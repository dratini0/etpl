(*
 * serialize.ml
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
open Revision

exception DecodingUnderrunError

let separator = ","

let encodeStringPayload s accumulator =
  (BatString.find_all s separator |> BatEnum.count |> (+) 1 |> string_of_int) ::
  s :: accumulator

let rec encodeValue = function
  | Unit -> ["Unit"]
  | Number(n) -> ["Number"; Printf.sprintf "%.17g" n]
  (* This is lossless, assuming we are dealing with doubles *)
  | String(s) -> "String" :: encodeStringPayload s []
  | Bool(true) -> ["True"]
  | Bool(false) -> ["False"]
  | Pair(v1, v2) -> "Pair" :: encodeValue v1 @ encodeValue v2
  | Array(a) -> "Array" :: (Array.length a |> string_of_int) :: (Array.to_list a |> List.map encodeValue |> List.concat)
  | Function _ -> ["FunctionValue"] (*Could be done, but would be a hassle*)

let rec encode expression accumulator = match expression with
  | Literal(v) -> "Literal" :: ((encodeValue v) @ accumulator)
  | Constant(c) -> "Constant" :: (constantName c) :: accumulator
  | UnaryOp(o, e1) ->
    let accumulator2 = encode e1 accumulator in
      "UnaryOp" :: unaryOperatorName o :: accumulator2
  | BinaryOp(o, e1, e2) ->
    let accumulator2 = encode e2 accumulator in
    let accumulator3 = encode e1 accumulator2 in
      "BinaryOp" :: binaryOperatorName o :: accumulator3
  | TernaryOp(o, e1, e2, e3) ->
    let accumulator2 = encode e3 accumulator in
    let accumulator3 = encode e2 accumulator2 in
    let accumulator4 = encode e1 accumulator3 in
      "TernaryOp" :: ternaryOperatorName o :: accumulator4    
  | NAryOp(o, es, 0, []) ->
    let length = List.length es in
      "NAryOp":: (nAryOperatorName o) :: (string_of_int length) ::
        BatList.fold_right encode es accumulator
  | NAryOp _ -> raise IntermediateStateError
  | Let(name, e1, e2) ->
      let accumulator2 = encode e2 accumulator in
      let accumulator3 = encode e1 accumulator2 in
      let accumulator4 = encodeStringPayload name accumulator3 in
      "Let" :: accumulator4
  | Variable name ->
      "Variable" :: (encodeStringPayload name accumulator)
  | Function(None, argumentName, _, e) -> (* TODO *)
      let accumulator2 = encode e accumulator in
      let accumulator3 = encodeStringPayload argumentName accumulator2 in
      "Function" :: accumulator3
  | Function(Some recursiveName, argumentName, _, e) -> (* TODO *)
      let accumulator2 = encode e accumulator in
      let accumulator3 = encodeStringPayload argumentName accumulator2 in
      let accumulator4 = encodeStringPayload recursiveName accumulator3 in
      "RecFun" :: accumulator4
  | If(condition, then_, else_) ->
      let accumulator2 = encode else_ accumulator in
      let accumulator3 = encode then_ accumulator2 in
      let accumulator4 = encode condition accumulator3 in
      "If" :: accumulator4
  | While(condition, body) ->
      let accumulator2 = encode body accumulator in
      let accumulator3 = encode condition accumulator2 in
      "While" :: accumulator3
  | Hole -> "Hole" :: accumulator

let serialize expression = String.concat separator (gitRevision::(encode expression []))

let decodeStringPayload = function
  | lengthIndicator :: rest ->
      let length = int_of_string lengthIndicator in
      let components, rest = (try BatList.split_at length rest with | Invalid_argument _ -> raise DecodingUnderrunError) in
      (String.concat separator components), rest
  | [] -> raise DecodingUnderrunError

let rec decodeArray count rest accumulator =
  if count = 0 then
    (accumulator, rest)
  else
    let value, rest_ = decodeValue rest in
    decodeArray (count - 1) rest_ (value::accumulator)

(* There is no type by name funtion because it will eventually get quite complicated *)
and decodeValue code = match code with
  | "Unit" :: rest -> Unit, rest
  | "Number" :: encoded :: rest -> (Number(float_of_string encoded), rest)
  | "String" :: rest ->
      let s, rest = decodeStringPayload rest in
      (String s, rest)
  | "True" :: rest -> Bool true, rest
  | "False" :: rest -> Bool false, rest
  | "Pair" :: rest ->
      let v1, rest1 = decodeValue rest in
      let v2, rest2 = decodeValue rest1 in
      (Pair(v1, v2), rest2)
  | "Array" :: lengthEncoded :: rest ->
      let length = int_of_string lengthEncoded in
      let values, rest_ = decodeArray length rest [] in
      (Array (values |> List.rev |> Array.of_list), rest_)
  | "Number" :: _
  | "Array" :: _
  | [] -> raise DecodingUnderrunError
  | typename :: _ -> raise (UnknownNameException("Type " ^ typename))
  
let rec decodeNAry count rest accumulator =
  if count = 0 then
    (accumulator, rest)
  else
    let value, rest_ = decode rest in
    decodeNAry (count - 1) rest_ (value::accumulator)
  
and decode = function
  | tokenType :: tail -> (match tokenType with
    | "Literal" -> let v, tail2 = decodeValue tail in (Literal(v), tail2)
    | "Constant" -> (match tail with
      | c :: tail2 -> (Constant(constantByName c), tail2)
      | _ -> raise DecodingUnderrunError
    )
    | "UnaryOp" -> (match tail with
      | o :: tail2 -> (
        let e1, tail3 = decode tail2 in
        (UnaryOp((unaryOperatorByName o), e1), tail3)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "BinaryOp" -> (match tail with
      | o :: tail2 -> (
        let e1, tail3 = decode tail2 in
        let e2, tail4 = decode tail3 in
        (BinaryOp((binaryOperatorByName o), e1, e2), tail4)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "TernaryOp" -> (match tail with
      | o :: tail2 -> (
        let e1, tail3 = decode tail2 in
        let e2, tail4 = decode tail3 in
        let e3, tail5 = decode tail4 in
        (TernaryOp((ternaryOperatorByName o), e1, e2, e3), tail5)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "NAryOp" -> (match tail with
      | o_ :: n_ :: tail2 -> (
        let o = nAryOperatorByName o_ in 
        let n = int_of_string n_ in
        let results, tail3 = decodeNAry n tail2 [] in
        (NAryOp(o, List.rev results, 0, []), tail3)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "Let" ->
        let name, tail2 = decodeStringPayload tail in
        let e1, tail3 = decode tail2 in
        let e2, tail4 = decode tail3 in
        Let(name, e1, e2), tail4
    | "Variable" ->
        let name, tail2 = decodeStringPayload tail in
        Variable name, tail2
    | "Function" ->
        let argumentName, tail2 = decodeStringPayload tail in
        let e, tail3 = decode tail2 in
        Function(None, argumentName, None, e), tail3 (* TODO *)
    | "RecFun" ->
        let recursiveName, tail2 = decodeStringPayload tail in
        let argumentName, tail3 = decodeStringPayload tail2 in
        let e, tail4 = decode tail3 in
        Function(Some recursiveName, argumentName, None, e), tail4 (* TODO *)
    | "If" ->
        let condition, tail2 = decode tail in
        let then_, tail3 = decode tail2 in
        let else_, tail4 = decode tail3 in
        If(condition, then_, else_), tail4
    | "While" ->
        let condition, tail2 = decode tail in
        let body, tail3 = decode tail2 in
        While(condition, body), tail3
    | "Hole" -> (Hole, tail)
    | _ -> raise (UnknownNameException ("Token type " ^ tokenType)))
  | [] -> raise DecodingUnderrunError

let deserialize code =
  match BatString.nsplit ~by:separator code with
    | [] -> raise DecodingUnderrunError
    | _ :: encoded -> fst (decode encoded)
