(*
 * names.mli
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

type typeNormalization
exception UnknownNameException of string
val emptyTypeNormalization: typeNormalization
val constantName: constant -> string
val unaryOperatorName: unaryOp -> string
val binaryOperatorName: binaryOp -> string
val ternaryOperatorName: ternaryOp -> string
val nAryOperatorName: nAryOp -> string
val typeNameInternal: typeNormalization -> etplType -> typeNormalization * string
val typeName: etplType -> string
val constantByName: string -> constant
val unaryOperatorByName: string -> unaryOp
val binaryOperatorByName: string -> binaryOp
val ternaryOperatorByName: string -> ternaryOp
val nAryOperatorByName: string -> nAryOp
