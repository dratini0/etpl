(*
 * position.mli
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

type position

val emptyPosition: position
val posPush: position -> int -> position
val posPop: position -> (int * position) option
val pos_of_list: int list -> position
val list_of_pos: position -> int list
val isInside: position -> position -> bool
val isEmpty: position -> bool
val posEqual: position -> position -> bool
val posCompare: position -> position -> int
module Proper: sig
  type t = position
  val compare: position -> position -> int
end
