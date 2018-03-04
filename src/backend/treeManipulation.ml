(*
 * treeManipulation.ml
 * Copyright 2017-2018 Balint Kovacs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *)

open Language
open Position

type t = Language.expression

module StringSet = Set.Make(String)

exception UnknownPositionError of position
exception RefactorRenameShadowedError of position
exception RefactorRenameWouldShadowError of position

let rec split_list n l acc positionBackup =
  match l with
    | x::xs -> 
        if n = 0 then
          acc, x, xs
        else
          split_list (n - 1) xs (x::acc) positionBackup
    | [] -> raise (UnknownPositionError positionBackup)

let rec replaceSubtree_ tree position replacement positionBackup =
  match posPop position with
    | None -> replacement
    | Some(head, rest) -> (
      match head, tree with
        | 0, UnaryOp(o, e0) -> UnaryOp(o, replaceSubtree_ e0 rest replacement positionBackup)
        | 0, BinaryOp(o, e0, e1) -> BinaryOp(o, replaceSubtree_ e0 rest replacement positionBackup, e1)
        | 1, BinaryOp(o, e0, e1) -> BinaryOp(o, e0, replaceSubtree_ e1 rest replacement positionBackup)
        | 0, TernaryOp(o, e1, e2, e3) -> TernaryOp(o, replaceSubtree_ e1 rest replacement positionBackup, e2, e3)
        | 1, TernaryOp(o, e1, e2, e3) -> TernaryOp(o, e1, replaceSubtree_ e2 rest replacement positionBackup, e3)
        | 2, TernaryOp(o, e1, e2, e3) -> TernaryOp(o, e1, e2, replaceSubtree_ e3 rest replacement positionBackup)
        | _, NAryOp(o, es, 0, []) ->
          let taken, element, dropped = split_list head es [] positionBackup in
          let element_ = replaceSubtree_ element rest replacement positionBackup in
          NAryOp(o, BatList.rev_append taken (element_::dropped), 0, [])
        | _, NAryOp _ -> raise IntermediateStateError
        | 0, Let(name, e0, e1) -> Let(name, replaceSubtree_ e0 rest replacement positionBackup, e1)
        | 1, Let(name, e0, e1) -> Let(name, e0, replaceSubtree_ e1 rest replacement positionBackup)
        | 0, Function(recursiveName, argumentName, t_, e) -> Function(recursiveName, argumentName, t_, replaceSubtree_ e rest replacement positionBackup)
        | 0, If(condition, then_, else_) -> If(replaceSubtree_ condition rest replacement positionBackup, then_, else_)
        | 1, If(condition, then_, else_) -> If(condition, replaceSubtree_ then_ rest replacement positionBackup, else_)
        | 2, If(condition, then_, else_) -> If(condition, then_, replaceSubtree_ else_ rest replacement positionBackup)
        | 0, While(condition, body) -> While(replaceSubtree_ condition rest replacement positionBackup, body)
        | 1, While(condition, body) -> While(condition, replaceSubtree_ body rest replacement positionBackup)
        | _, _ -> raise (UnknownPositionError positionBackup)
    )

let replaceSubtree tree position replacement =
  replaceSubtree_ tree position replacement position

let rec getSubtree_ tree position positionBackup =
  match posPop position with
  | None -> tree
  | Some(head, rest) -> (
    match head, tree with
      | 0, UnaryOp(_, e0)
      | 0, Function(_, _, _, e0)
      | 0, Let(_, e0, _)
      | 0, BinaryOp(_, e0, _)
      | 0, TernaryOp(_, e0, _, _)
      | 0, If(e0, _, _)
      | 0, While(e0, _) -> getSubtree_ e0 rest positionBackup
      | 1, Let(_, _, e1)
      | 1, BinaryOp(_, _, e1)
      | 1, TernaryOp(_, _, e1, _)
      | 1, If(_, e1, _) 
      | 1, While(_, e1) -> getSubtree_ e1 rest positionBackup
      | 2, TernaryOp(_, _, _, e2)
      | 2, If(_, _, e2) -> getSubtree_ e2 rest positionBackup
      | _, NAryOp(_, es, 0, []) ->
        (try getSubtree_ (List.nth es head) rest positionBackup with
        | Invalid_argument "List.nth" -> raise (UnknownPositionError positionBackup))
      | _, NAryOp _ -> raise IntermediateStateError
      | _, _ -> raise (UnknownPositionError positionBackup)
  )

let getSubtree tree position = getSubtree_ tree position position

let rec firstHoleNAry es accumulator count =
  match es with
    | e::rest -> (match firstHole_ e (posPush accumulator count) with
      | Some pos -> Some pos
      | None -> firstHoleNAry rest accumulator (count + 1)
    )
    | [] -> None

and firstHole_ tree accumulator = match tree with
  | Literal _
  | Constant _
  | Variable _ -> None
  | UnaryOp(_, e0)
  | Function(_, _, _, e0) -> firstHole_ e0 (posPush accumulator 0)
  | Let(_, e0, e1)
  | BinaryOp(_, e0, e1)
  | While(e0, e1) -> (match firstHole_ e0 (posPush accumulator 0) with
    | Some result -> Some result
    | None -> firstHole_ e1 (posPush accumulator 1))
  | NAryOp(_, es, 0, []) -> firstHoleNAry es accumulator 0
  | NAryOp _ -> raise IntermediateStateError
  | TernaryOp(_, e0, e1, e2)
  | If(e0, e1, e2) ->
    let candidate1 = firstHole_ e0 (posPush accumulator 0) in
    let candidate2 =
      if Option.is_some candidate1 then
        candidate1
      else
        firstHole_ e1 (posPush accumulator 1) in
    if Option.is_some candidate2 then
      candidate2
    else
      firstHole_ e2 (posPush accumulator 2)
  | Hole -> Some(accumulator)

let firstHole tree = firstHole_ tree emptyPosition

let rec nextHole_ tree position accumulator positionBackup =
  match posPop position with
  | None ->
    if tree = Hole then
      None
    else
      firstHole_ tree accumulator
  | Some(head, rest) -> (
    match head, tree with
      | 0, UnaryOp(_, e0)
      | 0, Function(_, _, _, e0) -> nextHole_ e0 rest (posPush accumulator 0) positionBackup
      | 0, Let(_, e0, e1)
      | 0, BinaryOp(_, e0, e1)
      | 0, While(e0, e1) -> (
        match nextHole_ e0 rest (posPush accumulator 0) positionBackup with
          | Some result -> Some result
          | None -> firstHole_ e1 (posPush accumulator 1)
      )
      | 1, Let(_, _, e1)
      | 1, BinaryOp(_, _, e1)
      | 1, While(_, e1) -> nextHole_ e1 rest (posPush accumulator 1) positionBackup
      | _, NAryOp(_, es, 0, []) ->
        let _, element, ess = split_list head es [] positionBackup in
        (match nextHole_ element rest (posPush accumulator head) positionBackup with
          | Some position -> Some position
          | None -> firstHoleNAry ess accumulator (head + 1))
      | 0, TernaryOp(_, e0, e1, e2)
      | 0, If(e0, e1, e2) ->
        let candidate1 = nextHole_ e0 rest (posPush accumulator 0) positionBackup in
        let candidate2 = if Option.is_some candidate1 then candidate1 else firstHole_ e1 (posPush accumulator 1) in
        if Option.is_some candidate2 then candidate2 else firstHole_ e2 (posPush accumulator 2)
      | 1, TernaryOp(_, _, e1, e2)
      | 1, If(_, e1, e2) ->
        let candidate1 = nextHole_ e1 rest (posPush accumulator 1) positionBackup in
        if Option.is_some candidate1 then candidate1 else firstHole_ e2 (posPush accumulator 2)
      | 2, TernaryOp(_, _, _, e2)
      | 2, If(_, _, e2) -> nextHole_ e2 rest (posPush accumulator 2) positionBackup
      | _, NAryOp _ -> raise IntermediateStateError
      | _, _ -> raise (UnknownPositionError positionBackup)
  )

let nextHole tree position = nextHole_ tree position emptyPosition position

let rec freeVariablesInternal bound acc = function
  | Literal _
  | Constant _
  | Hole -> acc
  | UnaryOp(_, e) -> freeVariablesInternal bound acc e
  | BinaryOp(_, e0, e1)
  | While (e0, e1) ->
      let acc2 = freeVariablesInternal bound acc e0 in
      freeVariablesInternal bound acc2 e1
  | NAryOp(_, es, 0, []) ->
      List.fold_left (freeVariablesInternal bound) acc es
  | NAryOp _ -> raise IntermediateStateError
  | Let(name, e0, e1) ->
      let acc2 = freeVariablesInternal bound acc e0 in
      freeVariablesInternal (StringSet.add name bound) acc2 e1
  | Variable name ->
      if StringSet.mem name bound then
        acc
      else
        StringSet.add name acc
  | Function(None, argumentName, _, body) ->
      freeVariablesInternal (StringSet.add argumentName bound) acc body 
  | Function(Some recursiveName, argumentName, _, body) ->
      let bound2 = bound |> StringSet.add argumentName |> StringSet.add recursiveName in
      freeVariablesInternal bound2 acc body
  | TernaryOp(_, e0, e1, e2)
  | If(e0, e1, e2) ->
      let acc2 = freeVariablesInternal bound acc e0 in
      let acc3 = freeVariablesInternal bound acc2 e1 in
      freeVariablesInternal bound acc3 e2

let freeVariables = freeVariablesInternal StringSet.empty StringSet.empty

let rec renameVariableInternal pos from to_ e =
  let recurse index expression =
    renameVariableInternal (posPush pos index) from to_ expression in
  match e with
    | Literal _
    | Constant _
    | Hole -> e
    | UnaryOp(o, e0) ->
        UnaryOp(o, recurse 0 e0)
    | BinaryOp(o, e0, e1) ->
        BinaryOp(o, recurse 0 e0, recurse 1 e1)
    | TernaryOp(o, e0, e1, e2) ->
        TernaryOp(o, recurse 0 e0, recurse 1 e1, recurse 2 e2)
    | NAryOp(o, es, 0, []) ->
        NAryOp(o, List.mapi recurse es, 0, [])
    | NAryOp _ -> raise IntermediateStateError
    | Let(name, e0, e1) when name = from ->
        Let(name, recurse 0 e0, e1)
    | Let(name, e0, e1) when name = to_ ->
        if StringSet.mem from (freeVariables e1) then
          raise_notrace (RefactorRenameShadowedError pos)
        else
          Let(name, recurse 0 e0, e1)
    | Let(name, e0, e1) ->
        Let(name, recurse 0 e0, recurse 1 e1)
    | Variable name when name = from -> Variable to_
    | Variable name when name = to_ -> raise_notrace(RefactorRenameWouldShadowError pos)
    | Variable _ -> e
    | Function(_, argumentName, _, _) when argumentName = from -> e
    | Function(None, argumentName, _, body) when argumentName = to_ ->
        if StringSet.mem from (freeVariables body) then
          raise_notrace (RefactorRenameShadowedError pos)
        else
          e
    | Function(Some recursiveName, _, _, _) when recursiveName = from -> e
    | Function(Some recursiveName, argumentName, _, body) when recursiveName = to_ || argumentName = to_ ->
        if StringSet.mem from (freeVariables body) then
          raise_notrace (RefactorRenameShadowedError pos)
        else
          e
    | Function(recursiveName, argumentName, annot, body) ->
        Function(recursiveName, argumentName, annot, recurse 0 body)
    | If(condition, then_, else_) ->
        If(recurse 0 condition, recurse 1 then_, recurse 2 else_)
    | While(e0, e1) ->
        While(recurse 0 e0, recurse 1 e1)

let renameVariable pos labelNumber newName expression = match labelNumber, expression with
  | 0, Let(name, e0, e1) ->
      Let(newName, e0, renameVariableInternal (posPush pos 1) name newName e1)
  | 0, Function(recursiveName, argumentName, annot, body) ->
      Function(recursiveName, newName, annot, renameVariableInternal (posPush pos 0) argumentName newName body)
  | 1, Function(Some recursiveName, argumentName, annot, body) when recursiveName = argumentName ->
      Function(Some newName, argumentName, annot, body)
  | 1, Function(Some recursiveName, argumentName, annot, body) when newName = argumentName ->
      if StringSet.mem recursiveName (freeVariables body) then
        raise_notrace (RefactorRenameShadowedError pos)
      else Function(Some newName, argumentName, annot, body)
  | 1, Function(Some recursiveName, argumentName, annot, body) ->
      Function(Some newName, argumentName, annot, renameVariableInternal (posPush pos 0) recursiveName newName body)
  | _ -> raise (UnknownPositionError pos)
