(*
 * modalResult.ml
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

open DomManipulation
open Language
open CodeRender
open JquerySafe
open File

let currentResult = ref None
let defaultFileName = "program.out"

let showResult result = begin
  ignore (jquery "#result"
    |> Jquery.empty
    |> Jquery.append_ (renderValue result));
  showModal "result_modal" ();
  ignore(Js.Global.setTimeout (fun () ->
    ignore (jquery "#result_close" |> Jquery.focus);
  ) 500);
  currentResult := Some result
end

let rec processLine = function
  | Number n -> string_of_float n
  | String s -> s
  | Bool true -> "1"
  | Bool false -> "0"
  | Unit -> "_"
  | Array a ->
      a |> Array.map processLine |> Js.Array.joinWith " "
  | Pair(left, right) -> (processLine left) ^ "," ^ (processLine right)
  | Function _ -> "[Function]"

let processAll = function
  | Array a -> Array.map processLine a |> Array.map (fun s -> s ^ "\n")
  | v -> [| processLine v |]

let saveResult () = match !currentResult with
  | None -> ()
  | Some result ->
      let lines = processAll result in
      let options = blobOptions ~_type:"text/plain" () in
      let blob = File.make ~options:options lines () in
      saveAs blob defaultFileName

let init () = begin
  jquery "#result_close" |> doSimpleBind "click" hideModals;
  jquery "#result_save" |> doSimpleBind "click" saveResult;
end
