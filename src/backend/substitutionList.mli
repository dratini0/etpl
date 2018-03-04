(*
 * substitutionList.mli
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

type t

val emptySubstitutionList: t
val newFreeVariable: t -> int * t
val addSubstitution: int -> etplType -> t -> t
val findSubstitution: int -> t -> etplType option
val mapSubstitutions: (etplType -> etplType) -> t -> t
