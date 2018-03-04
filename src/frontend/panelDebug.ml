(*
 * panelDebug.ml
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

open PrettyPrint
open Serialize
open Names
open Types
open Interpreter
open DomManipulation
open Programming
open ModalGetNumber
open ModalGetText
open ModalGetLine
include PanelDebugLog

open JquerySafe

external getQueryString: string = "location.search" [@@bs.val]

let encodeButton () =
  ignore (jquery "#encodedview" |> Jquery.val_ (`str (serialize (getCurrentProgram ()))))

let decodeButton () =
  try begin
    setCurrentProgram (deserialize (jquery "#encodedview" |> Jquery.val_get));
    ignore (jquery "#prettyview" |> Jquery.text (prettyPrintExpression (getCurrentProgram())));
  end with
  | DecodingUnderrunError -> log "Decoding failed: ran out of tokens"
  | Names.UnknownNameException name -> log ("Decoding failed: unknown " ^ name)

let inferButton () =
  match getCurrentProgram() |> inferType with
    | None -> log ("Not properly typed")
    | Some t -> log ("Type: " ^ (typeName t))

let fillHoleButton () = match getCurrentHole() with
  | Some hole -> begin
      log "The following fragments fit in the hole:";
      List.iter (fun fragment -> log (prettyPrintExpression fragment)) (whatFits (getCurrentProgram()) hole)
    end
  | None -> log "No hole to fill"

let executeButton () =
  try(
    log ("Result: " ^ (getCurrentProgram() |> evaluate |> prettyPrintValue))
  ) with 
  | RuntimeException(message, _, _) -> log ("Runtime Exception: " ^ message)

let getNumberButton () =
  getNumber 0. (fun number -> log("Got: " ^ (string_of_float number)))

let getTextButton () =
  getText "" (fun str -> log("Got string: \"" ^ str ^ "\""))

let getLineButton () =
  getLine "Test" "" (fun str -> log("Got line: \"" ^ str ^ "\""))
  
let openPanel () = begin
  ignore (jquery "#prettyview" |> Jquery.text (prettyPrintExpression (getCurrentProgram())));
  encodeButton();
  showPanel "debugpanel" ();
end

let init () = if getQueryString = "?dev" then begin
  ignore (jquery "#logbox" |> Jquery.val_ (`str ""));
  ignore (jquery "#revision" |> Jquery.text Revision.gitRevision);
  jquery "#encode" |> doSimpleBind "click" encodeButton;
  jquery "#decode" |> doSimpleBind "click" decodeButton;
  jquery "#infer" |> doSimpleBind "click" inferButton;
  jquery "#fill_hole" |> doSimpleBind "click" fillHoleButton;
  jquery "#execute" |> doSimpleBind "click" executeButton;
  jquery "#get_number" |> doSimpleBind "click" getNumberButton;
  jquery "#get_text" |> doSimpleBind "click" getTextButton;
  jquery "#get_line" |> doSimpleBind "click" getLineButton;
  jquery "#redraw" |> doSimpleBind "click" redraw;
  jquery "#debugpanel_button" |> doSimpleBind "click" openPanel;
  jquery "body" |> Jquery.addClass (`str "dev") |> ignore;
end
