(*
 * language.ml
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

open Position

(* Raised when the serialization/pretty-printing of an internal-only state is
   attempted *)
exception IntermediateStateError

module StringMap = Map.Make(String)

type etplType =
  | TUnit
  | TNumber
  | TString
  | TBool
  | FTV of int
  | TArray of etplType
  | TPair of etplType * etplType
  | TFun of etplType * etplType
  | GTV of int (* generalized type variable *)

type constant =
  | Pi

type unaryOp =
  | Ln
  | Floor
  | StringOfNum
  | NumOfString
  | Strlen
  | PairLeft
  | PairRight
  | ArrayClone
  | ArrayLen

type binaryOp =
  | Add
  | Sub
  | Mul
  | Div
  | Concat
  | SHead
  | STail
  | CharAt
  | Pair
  | Apply
  | GTEQ
  | ArrayIndex
  | Seq
  | ArrayMake

type ternaryOp =
  | ArraySet
  | ArraySlice

type nAryOp =
  | ArrayForm

type value =
  | Unit
  | Number of float
  | String of string
  | Bool of bool
  | Array of value array
  | Pair of value * value
  | Function of position * value StringMap.t * string option * string * expression

and expression =
  | Literal of value
  | Constant of constant
  | UnaryOp of unaryOp * expression
  | BinaryOp of binaryOp * expression * expression
  | TernaryOp of ternaryOp * expression * expression * expression
  | NAryOp of nAryOp * expression list * int * value list
  | Let of string * expression * expression
  | Variable of string
  | Function of string option * string * etplType option * expression
  | If of expression * expression * expression
  | While of expression * expression
  | Hole

(* This will eventually hold mutable state *)
type state = State of expression
