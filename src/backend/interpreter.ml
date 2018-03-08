(*
 * interpreter.ml
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
open Names
open Types

exception RuntimeException of string * state * position

(* I promise that this wil make sense once we have mutable state *)
let updateState (State(_)) e = State(e)

let evalConstant s (_:position) c = match c with
  | Pi -> updateState s (Literal(Number(3.1415926535897932384626433832795)))

let evalUnary s p o e1 = match (o, e1) with
  | (Ln, Number(v1)) -> updateState s (Literal(Number(log(v1))))
  | (Floor, Number(v1)) -> updateState s (Literal(Number(floor(v1))))
  | (StringOfNum, Number(v1)) -> updateState s (Literal(String(Printf.sprintf "%g" v1)))
  | (NumOfString, String(v1)) -> (try updateState s (Literal(Number(float_of_string v1))) with Failure "float_of_string" -> raise (RuntimeException("String is not numeric", s, p)))
  | (Strlen, String(v1)) -> updateState s (Literal(Number(v1 |> String.length |> float_of_int)))
  | (PairLeft, Pair(v1, _)) -> updateState s (Literal v1)
  | (PairRight, Pair(_, v2)) -> updateState s (Literal v2)
  | (ArrayClone, Array a) -> updateState s (Literal(Array (Array.copy a)))
  | (ArrayLen, Array a) -> updateState s (Literal(Number (a |> Array.length |> float_of_int)))
  | (o, v1) -> raise (RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an argument of type %s" (unaryOperatorName o) (v1 |> inferTypeValue |> typeName), s, p))

let evalBinary s p o e1 e2 = match (o, e1, e2) with
  | (Add, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 +. e2)))
  | (Sub, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 -. e2)))
  | (Mul, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 *. e2)))
  | (Div, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 /. e2)))
  | (Concat, String(e1), String(e2)) -> updateState s (Literal(String(e1 ^ e2)))
  | (SHead, String(e1), Number(e2)) -> (try updateState s (Literal(String(String.sub e1 0 (int_of_float e2)))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for SHead", s, p)))
  | (STail, String(e1), Number(e2)) -> (try let len = String.length e1 in updateState s (Literal(String(String.sub e1 (len - (int_of_float e2)) (int_of_float e2)))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for STail", s, p)))
  | (CharAt, String(e1), Number(e2)) -> (try updateState s (Literal(String(String.make 1 (String.get e1 (int_of_float e2))))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for CharAt", s, p)))
  | (Pair, e1, e2) -> updateState s (Literal(Pair(e1, e2)))
  | (Apply, Function(_, variables, recursiveName, argumentName, body), e2) ->
    let replacement1 = Let(argumentName, Literal e2, body) in
    let replacement2 = (match recursiveName with 
      | Some name -> Let(name, Literal e1, replacement1)
      | None -> replacement1) in
    let replacement3 = StringMap.fold (fun name value e -> Let(name, Literal value, e)) variables replacement2 in
    updateState s replacement3
  | (GTEQ, Number e1, Number e2) -> updateState s (Literal(Bool (e1 >= e2)))
  | (ArrayIndex, Array a, Number i) -> (try updateState s (Literal(Array.get a (int_of_float i))) with Invalid_argument "index out of bounds" -> raise (RuntimeException ("Index out of range for ArrayIndex", s, p)))
  | (Seq, _, _) -> updateState s (Literal e2)
  | (o, v1, v2) -> raise (RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an arguments of type %s and %s" (binaryOperatorName o) (v1 |> inferTypeValue |> typeName) (v2 |> inferTypeValue |> typeName), s, p))

let evalTernary s p o e1 e2 e3 = match o, e1, e2, e3 with
  | ArraySet, Array a, Number i, v -> (
    try
      Array.set a (int_of_float i) v;
      updateState s (Literal e1)
    with
      | Invalid_argument "index out of bounds" -> raise (RuntimeException ("Index out of range for ArraySet", s, p))
    )
  | ArraySlice, Array a, Number start, Number end_ -> (
    try
      let start = int_of_float start in
      let len = (int_of_float end_) - start in
      updateState s (Literal(Array(Array.sub a start len)))
    with
      | Invalid_argument "Array.sub" -> raise (RuntimeException ("Index out of range for ArraySlice", s, p))
    )
  | _ -> raise(RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an arguments of type %s, %s, and %s" (ternaryOperatorName o) (e1 |> inferTypeValue |> typeName) (e2 |> inferTypeValue |> typeName) (e3 |> inferTypeValue |> typeName), s, p))

let evalNAry s (_:position) o values = match o with
  | ArrayForm -> updateState s (Literal(Array(values |> List.rev |> Array.of_list)))

let rec nextStepInternal (State e as s) loc variables = match e with
  | Literal(_) -> raise (RuntimeException ("already a value", s, loc))
  | Constant(c) -> evalConstant s loc c
  | UnaryOp(o, Literal(e1)) -> evalUnary s loc o e1
  | UnaryOp(o, e1) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(UnaryOp(o, e1_))
  | BinaryOp(o, Literal(e1), Literal(e2)) -> evalBinary s loc o e1 e2
  | BinaryOp(o, (Literal _ as e1), e2) ->
      let State e2_ = nextStepInternal (State e2) (posPush loc 1) variables in
      State(BinaryOp(o, e1, e2_))
  | BinaryOp(o, e1, e2) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(BinaryOp(o, e1_, e2))
  | TernaryOp(o, Literal e1, Literal e2, Literal e3) -> evalTernary s loc o e1 e2 e3
  | TernaryOp(o, (Literal _ as e1), (Literal _ as e2), e3) ->
      let State e3_ = nextStepInternal (State e3) (posPush loc 2) variables in
      State(TernaryOp(o, e1, e2, e3_))
  | TernaryOp(o, (Literal _ as e1), e2, e3) ->
      let State e2_ = nextStepInternal (State e2) (posPush loc 1) variables in
      State(TernaryOp(o, e1, e2_, e3))
  | TernaryOp(o, e1, e2, e3) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(TernaryOp(o, e1_, e2, e3))
  | NAryOp(o, [], _, values) -> evalNAry s loc o values
  | NAryOp(o, Literal(v) :: es, n, values) -> State(NAryOp(o, es, n+1, v::values))
  | NAryOp(o, e::es, n, values) ->
      let State e_ = nextStepInternal (State e) (posPush loc n) variables in 
      State(NAryOp(o, e_::es, n, values))
  | Let(_, Literal _, (Literal _ as e2)) -> State(e2)
  | Let(name, Literal v, e2) ->
      let State e2_ = nextStepInternal (State e2) (posPush loc 1) (StringMap.add name v variables) in
      State(Let(name, Literal v, e2_))
  | Let(name, e1, e2) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(Let(name, e1_, e2))
  | Variable name -> (try State(Literal(StringMap.find name variables)) with 
      | Not_found -> raise (RuntimeException("Unbound variable " ^ name, s, loc)))
  | Function(recursiveName, argumentName, _, e1) -> State(Literal(Function(posPush loc 0, variables, recursiveName, argumentName, e1)))
  | If(Literal(Bool condition), then_, else_) ->
      if condition then
        State then_
      else
        State else_
  | If(Literal condition, _, _) ->
      raise (RuntimeException(Printf.sprintf "Program is not well-typed: conditional used with argument of type %s" (condition |> inferTypeValue |> typeName), s, loc))
  | While(condition, body) ->
      State(If(condition, BinaryOp(Seq, body, e), Literal Unit))
  | If(condition, then_, else_) ->
      let State condition_ = nextStepInternal (State condition) (posPush loc 0) variables in
      State(If(condition_, then_, else_))
  | Hole -> raise(RuntimeException ("Programs with holes in them can't be executed.", s, loc))

let nextStep ?vars:(variables=StringMap.empty) s = nextStepInternal s emptyPosition variables

let rec evaluateLoop ?vars:(variables=StringMap.empty) s = match s with
  | State(Literal v) -> v
  | _ -> evaluateLoop ~vars:variables (nextStep ~vars:variables s)


let evaluate ?vars:(variables=StringMap.empty) e = evaluateLoop ~vars:variables (State e)

