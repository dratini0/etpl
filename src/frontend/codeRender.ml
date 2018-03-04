(*
 * codeRender.ml
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
open Names
open Position
open JquerySafe

external createTextNode : string -> Dom.node = "document.createTextNode" [@@bs.val]

let setChild number child element = begin
  ignore (element
    |> Jquery.find ("> .child" ^ (string_of_int number))
    |> Jquery.append_ child);
  element;
end

let cloneElementFromTemplate id = jquery ("#templates ." ^ id) |> Jquery.clone

let posToId position = "node" ^ (position
                                  |> Position.list_of_pos
                                  |> List.map string_of_int
                                  |> String.concat "_")

let rec renderValue = function
  | Unit -> cloneElementFromTemplate "literal_Unit"
  | Number(n) ->
      cloneElementFromTemplate "literal_Number"
        |> setChild 0 (Jquery.jquery'' (createTextNode (string_of_float n)))
  | String(s) ->
      cloneElementFromTemplate "literal_String"
        |> setChild 0 (Jquery.jquery'' (createTextNode s))
  | Bool true -> cloneElementFromTemplate "literal_True"
  | Bool false -> cloneElementFromTemplate "literal_False"
  | Pair(v1, v2) ->
      cloneElementFromTemplate "literal_Pair"
        |> setChild 0 (renderValue v1)
        |> setChild 1 (renderValue v2)
  | Array a ->
      let protoElement = cloneElementFromTemplate "literal_Array" in
      let container = protoElement |> Jquery.find ".container" in
      Array.iter (fun e -> 
        let item = cloneElementFromTemplate ("literal_Array_item") in
        item |> setChild 0 (renderValue e) |> ignore;
        container |> Jquery.append_ item |> ignore;
      ) a;
      protoElement
  | Function _ -> cloneElementFromTemplate "literal_Function"


let rec renderExpression expression position specialCasingFunction = begin
  let recurse index expression element = 
    setChild index (renderExpression expression (Option.map (fun x -> posPush x index) position) specialCasingFunction) element in
  let element = (match expression with
    | Literal value -> renderValue value
    | Constant(c) ->
      cloneElementFromTemplate ("constant_" ^ (constantName c))
    | UnaryOp(o, e0) ->
      cloneElementFromTemplate ("unary_" ^ (unaryOperatorName o))
        |> recurse 0 e0
    | BinaryOp(o, e0, e1) ->
      cloneElementFromTemplate ("binary_" ^ (binaryOperatorName o))
        |> recurse 0 e0
        |> recurse 1 e1
    | TernaryOp(o, e0, e1, e2) ->
      cloneElementFromTemplate ("ternary_" ^ (ternaryOperatorName o))
        |> recurse 0 e0
        |> recurse 1 e1
        |> recurse 2 e2
    | NAryOp(o, es, 0, []) ->
      let protoElement = cloneElementFromTemplate ("nary_" ^ (nAryOperatorName o)) in
      let container = protoElement |> Jquery.find ".container" in
      List.iteri (fun n e -> 
        let item = cloneElementFromTemplate ("nary_" ^ (nAryOperatorName o) ^ "_item") in
        item |> setChild 0 (renderExpression e (Option.map (fun x -> posPush x n) position) specialCasingFunction) |> ignore;
        container |> Jquery.append_ item |> ignore;
      ) es;
      protoElement
    | NAryOp _ -> raise IntermediateStateError
    | Let(name, e0, e1) ->
      let element = cloneElementFromTemplate "other_Let" in
      element
        |> Jquery.find ".name"
        |> Jquery.text name
        |> ignore;
      element
        |> recurse 0 e0
        |> recurse 1 e1
    | Variable name ->
      let element = cloneElementFromTemplate "other_Variable" in
      element
        |> Jquery.find ".name"
        |> Jquery.text name
        |> ignore;
      element
    | Function(None, argumentName, None, body) ->
      let element = cloneElementFromTemplate "other_Function" in
      element
        |> Jquery.find ".argument_name"
        |> Jquery.text argumentName
        |> ignore;
      element
        |> recurse 0 body
    | Function(Some recursiveName, argumentName, None, body) ->
      let element = cloneElementFromTemplate "other_RecFunction" in
      element
        |> Jquery.find ".argument_name"
        |> Jquery.text argumentName
        |> ignore;
      element
        |> Jquery.find ".recursive_name"
        |> Jquery.text recursiveName
        |> ignore;
      element
        |> recurse 0 body
    | If (condition, then_, else_) ->
      cloneElementFromTemplate "other_If"
        |> recurse 0 condition
        |> recurse 1 then_
        |> recurse 2 else_
    | While (condition, body) ->
        cloneElementFromTemplate "other_While"
          |> recurse 0 condition
          |> recurse 1 body
    | Hole ->
      cloneElementFromTemplate "hole"
  ) in
  (match position with 
    | None -> ()
    | Some position -> ignore (element |> Jquery.attr (`kv ("id", posToId position))));
  specialCasingFunction expression position element;
end
  
let emptySpecialCasingFunction _ _ element = element;
