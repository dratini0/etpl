(*
 * panelFile.ml
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

open JquerySafe
open DomManipulation
open File
open Language
open Serialize
open Types
open Programming

include PanelFileState
open PanelFileState.Private

let defaultFilename = "program.etpl"

let loadFileError failure id () = begin
  failure();
  jquerySome ("#" ^ id ^ "_ok, #" ^ id ^ "_spinner") |> Jquery.hide |> ignore;
  jquery ("#" ^ id ^ "_error") |> Jquery.show |> ignore;
end

let processLine line =
  Array(Js.String.split " " line |>
    Array.map (fun word -> String word))

let loadFileDone success id reader () = begin
  if success (result reader) then begin
    jquerySome ("#" ^ id ^ "_spinner, #" ^ id ^ "_error") |> Jquery.hide |> ignore;
    jquerySome ("#" ^ id ^ "_ok") |> Jquery.show |> ignore;
  end else loadFileError (fun () -> ()) id ()
end

let loadFile success failure id () = begin
  let input = Array.get (jquery1 ("#load_" ^ id) |> Jquery.toArray) 0 in
  let file = Array.get (inputFiles input) 0 in
  let reader = fileReader () in
  onLoad reader (loadFileDone success id reader);
  onError reader (loadFileError failure id);
  jquerySome ("#" ^ id ^ "_ok, #" ^ id ^ "_error")
    |> Jquery.hide
    |> ignore;
  jquery ("#" ^ id ^ "_spinner") |> Jquery.show |> ignore;
  readAsText reader file;
end

let loadFileBind success failure id =
  jquery1 ("#load_" ^ id)
    |> doSimpleBind "change" (loadFile success failure id)

let loadInputFileError () = begin
  jquery1 "#file_linecount_paragraph" |> Jquery.hide |> ignore;
  inputFile := Array([||]);
end

let loadInputFileSuccess data = begin
  let lines = Js.String.split "\n" data in
  let len = Array.length lines in
  let lines2 = if Array.get lines (len - 1) = "" then
                 Array.sub lines 0 (len - 1)
               else lines in
  let words = Array.map processLine lines2 in
  inputFile := Array words;
  jquerySome "#file_linecount_paragraph" |> Jquery.show |> ignore;
  jquery "#file_linecount"
    |> Jquery.text (string_of_int (Array.length words))
    |> ignore;
  true
end

let loadProgramError () = ()

let loadProgramSuccess string = begin
  try (
    let expression = deserialize string in
    match inferType ~vars:(StringMap.singleton "input" inputFileType) expression with
      | None -> false
      | Some _ -> setCurrentProgram expression; true
  ) with
    | _ -> false
end

let saveProgram () =
  let options = blobOptions ~_type:"application/octet-stream" () in
  let text = getCurrentProgram () |> serialize in
  let blob = File.make ~options:options [|text|] () in
  saveAs blob defaultFilename

let init () = begin
  jquery1 "#file_button"
    |> doSimpleBind "click" (showPanel "filepanel");
  jquery1 "#about_button"
    |> doSimpleBind "click" (showModal "about_modal");
  jquery1 "#about_ok"
    |> doSimpleBind "click" hideModals;
  loadFileBind loadInputFileSuccess loadInputFileError "file";
  loadFileBind loadProgramSuccess loadProgramError "program";
  jquery1 "#save_program"
    |> doSimpleBind "click" saveProgram;
end
