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

let inputFile = ref (Array([||]))
let inputFileType = TArray(TArray TString)

let loadFileError () = begin
  jquerySome "#file_ok, #file_spinner" |> Jquery.hide |> ignore;
  jquery "#file_error" |> Jquery.show |> ignore;
  inputFile := Array([||])
end

let processLine line =
  Array(Js.String.split " " line |>
    Array.map (fun word -> String word))

let loadFileDone reader () = begin
  let lines = Js.String.split "\n" (result reader) in
  let len = Array.length lines in
  let lines2 = if Array.get lines (len - 1) = "" then
                 Array.sub lines 0 (len - 1)
               else lines in
  let words = Array.map processLine lines2 in
  inputFile := Array words;
  jquerySome "#file_spinner, #file_error" |> Jquery.hide |> ignore;
  jquerySome "#file_ok, #file_linecount_paragraph" |> Jquery.show |> ignore;
  jquery "#file_linecount"
    |> Jquery.text (string_of_int (Array.length words))
    |> ignore;
end

let loadFile () = begin
  let input = Array.get (jquery1 "#inputfile" |> Jquery.toArray) 0 in
  let file = Array.get (inputFiles input) 0 in
  let reader = fileReader () in
  onLoad reader (loadFileDone reader);
  onError reader loadFileError;
  jquerySome "#file_ok, #file_error, #file_linecount_paragraph"
    |> Jquery.hide
    |> ignore;
  jquery "#file_spinner" |> Jquery.show |> ignore;
  readAsText reader file;
end

let init () = begin
  jquery1 "#file_button"
    |> doSimpleBind "click" (showPanel "filepanel");
  jquery1 "#about_button"
    |> doSimpleBind "click" (showModal "about_modal");
  jquery1 "#about_ok"
    |> doSimpleBind "click" hideModals;
  jquery1 "#inputfile"
    |> doSimpleBind "change" loadFile;
end