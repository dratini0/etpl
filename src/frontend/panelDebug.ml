open PrettyPrint
open Serialize
open Names
open Types
open Interpreter
open DomManipulation
open CurrentProgram
open ModalGetNumber
open CodeRender

let jquery = Jquery.jquery

let log message =
  let logbox = (jquery "#logbox") in
  let current = (logbox |> Jquery.val_get) in
  ignore (logbox |> Jquery.val_ (`str(current ^ message ^ "\n")))

let updateCodeBox () =
  ignore (jquery "#codebox"
    |> Jquery.empty
    |> Jquery.append_ (renderExpression !currentProgram))

let encodeButton () =
  ignore (jquery "#encodedview" |> Jquery.val_ (`str (serialize !currentProgram)))

let decodeButton () =
  try begin
    currentProgram := deserialize (jquery "#encodedview" |> Jquery.val_get);
    ignore (jquery "#prettyview" |> Jquery.text (prettyPrintExpression !currentProgram));
    updateCodeBox();
  end with
  | DecodingUnderrunError -> log "Decoding failed: ran out of tokens"
  | Names.UnknownNameException name -> log ("Decoding failed: unknown " ^ name)


let inferButton () =
  log ("Type: " ^ (!currentProgram |> inferType |> typeName))

(* Which hole are we filling? Well, that doesn't matter yet *)
let fillHoleButton () = begin
  log "The following fragments fit in the hole:";
  List.iter (fun fragment -> log (prettyPrintExpression fragment)) (whatFits !currentProgram [])
end

let executeButton () =
  try(
    log ("Result: " ^ (!currentProgram |> evaluate |> prettyPrintValue))
  ) with 
  | RuntimeException(message, _) -> log ("Runtime Exception: " ^ message)

let getNumberButton () =
  getNumber 0. (fun number -> log("Got: " ^ (string_of_float number)))

let init () = begin
  ignore (jquery "#logbox" |> Jquery.val_ (`str ""));
  ignore (jquery "#revision" |> Jquery.text Revision.gitRevision);
  ignore (jquery "#prettyview" |> Jquery.text (prettyPrintExpression !currentProgram));
  encodeButton();
  updateCodeBox();
  jquery "#encode" |> doSimpleBind "click" encodeButton;
  jquery "#decode" |> doSimpleBind "click" decodeButton;
  jquery "#infer" |> doSimpleBind "click" inferButton;
  jquery "#fill_hole" |> doSimpleBind "click" fillHoleButton;
  jquery "#execute" |> doSimpleBind "click" executeButton;
  jquery "#get_number" |> doSimpleBind "click" getNumberButton;
  jquery "#redraw" |> doSimpleBind "click" updateCodeBox;
  jquery "#debugpanel_button" |> doSimpleBind "click" (showPanel "debugpanel")
end
