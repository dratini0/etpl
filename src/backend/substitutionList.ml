(*
 * substitutionList.ml
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

module IntMap = Map.Make(struct type t = int let compare: int -> int -> int = compare end)

type t = int * etplType IntMap.t

let emptySubstitutionList = (0, IntMap.empty)
let newFreeVariable (index, map) = (index, (index + 1, map))
let addSubstitution index substitution (i, map) = (i, IntMap.add index substitution map)
let findSubstitution index (_, map) = if IntMap.mem index map
                                        then (Some (IntMap.find index map))
                                        else None
let mapSubstitutions mapping (i, map) = (i, IntMap.map mapping map)
