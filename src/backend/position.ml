(*
 * position.ml
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

open BatDeque

type position = int BatDeque.t

let emptyPosition = empty

let posPush = snoc

let posPop = front

let pos_of_list = of_list

let list_of_pos = to_list

let rec isInside a b = match front a, front b with
  | _, None -> true
  | None, _ -> false
  | Some(head1, tail1), Some(head2, tail2) -> head1 = head2 && isInside tail1 tail2

let isEmpty = is_empty

let posEqual a b = BatDeque.eq a b

(* Type annotations are meant o ensure that the compare function is specialized *)
let rec posCompare (a:position) (b:position) =
  match posPop a, posPop b with
    | None, None -> 0
    | None, Some _ -> -1
    | Some _, None -> 1
    | Some(aHead, aRest), Some (bHead, bRest) ->
      match compare aHead bHead with
        | 0 -> posCompare aRest bRest
        | x -> x

module Proper = struct
  type t = position
  let compare = posCompare
end
