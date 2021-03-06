(*
 * interpreter.mli
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

type runtimeExceptionBody = string * state * position
exception RuntimeException of runtimeExceptionBody
val nextStep: ?vars: value StringMap.t -> state -> state
val evaluateLoop: ?vars: value StringMap.t -> state -> value
val evaluate: ?vars: value StringMap.t -> expression -> value
