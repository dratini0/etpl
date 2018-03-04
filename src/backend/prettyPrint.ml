(*
 * prettyPrint.ml
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

let rec prettyPrintValue v = match v with
  | Unit -> "Unit"
  | Number(n) -> string_of_float(n)
  | String(s) -> Printf.sprintf "\"%s\"" s
  | Bool true -> "True"
  | Bool false -> "False"
  | Pair(v1, v2) -> "(" ^ (prettyPrintValue v1) ^ ", " ^ (prettyPrintValue v2) ^ ")"
  | Array a -> "[" ^ (a |> Array.map prettyPrintValue |> Array.to_list |> BatString.concat ", ") ^ "]"
  | Function _ -> "[function]"

let rec prettyPrintExpression e = match e with
  | Literal(l) -> prettyPrintValue l
  | Constant(c) -> constantName c
  | UnaryOp(o, e1) -> (unaryOperatorName o) ^ "(" ^ (prettyPrintExpression e1) ^ ")"
  | BinaryOp(o, e1, e2) -> (binaryOperatorName o) ^ "(" ^ (prettyPrintExpression e1) ^ ", " ^ (prettyPrintExpression e2) ^ ")"
  | TernaryOp(o, e1, e2, e3) -> Printf.sprintf "%s(%s, %s, %s)" (ternaryOperatorName o) (prettyPrintExpression e1) (prettyPrintExpression e2) (prettyPrintExpression e3)
  | NAryOp(o, es, 0, []) -> (nAryOperatorName o) ^ "(" ^ (es |> List.map prettyPrintExpression |> String.concat ", ") ^ ")"
  | NAryOp _ -> raise IntermediateStateError
  | Let(name, e1, e2) -> "let " ^ name ^ " = (" ^ (prettyPrintExpression e1) ^ ") in (" ^ (prettyPrintExpression e2) ^ ")"
  | Variable name -> name
  | Function(None, argumentName, _, e) -> Printf.sprintf "fun %s -> (%s)" argumentName (prettyPrintExpression e) (* TODO: deal with annotations *)
  | Function(Some recursiveName, argumentName, _, e) -> Printf.sprintf "fun (rec: %s) %s -> (%s)" recursiveName argumentName (prettyPrintExpression e)
  | If(condition, then_, else_) -> Printf.sprintf "if (%s) then (%s) else (%s)" (prettyPrintExpression condition) (prettyPrintExpression then_) (prettyPrintExpression else_)
  | While(condition, body) -> Printf.sprintf "while (%s) (%s)" (prettyPrintExpression condition) (prettyPrintExpression body) 
  | Hole -> "[]"
