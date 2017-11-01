open Prettyprint
open Serialize
open Names
open Types
open Interpreter

let jquery = Jquery.jquery

let log message =
  let logbox = (jquery "#logbox") in
  let current = (logbox |> Jquery.val_get) in
  ignore (logbox |> Jquery.val_ (`str(current ^ message ^ "\n")))

let currentProgram = ref Tests.exampleProgram

let _ = jquery "#encode" |> Jquery.on "click" (fun [@bs.this] _ _ -> begin
  ignore (jquery "#encodedview" |> Jquery.val_ (`str (serialize !currentProgram)));
  Js.true_
end)

let _ = jquery "#decode" |> Jquery.on "click" (fun [@bs.this] _ _ -> begin
  (try (
    currentProgram := deserialize (jquery "#encodedview" |> Jquery.val_get);
    ignore (jquery "#prettyview" |> Jquery.text (prettyPrintExpression !currentProgram));
  ) with
  | DecodingUnderrunError -> log "Decoding failed: ran out of tokens"
  | Names.UnknownNameException name -> log ("Decoding failed: unknown " ^ name));
  Js.true_
end)

let _ = jquery "#infer" |> Jquery.on "click" (fun [@bs.this] _ _ -> begin
  log ("Type: " ^ (!currentProgram |> inferType |> typeName));
  Js.true_
end)

(* Which hole are we filling? Well, that doesn't matter yet *)
let _ = jquery "#fill_hole" |> Jquery.on "click" (fun [@bs.this] _ _ -> begin
  log "The following fragments fit in the hole:";
  List.iter (fun fragment -> log (prettyPrintExpression fragment)) (whatFits !currentProgram []);
  Js.true_
end)

let _ = jquery "#execute" |> Jquery.on "click" (fun [@bs.this] _ _ -> begin
  (try(
    log ("Result: " ^ (!currentProgram |> evaluate |> prettyPrintValue))
  ) with 
  | RuntimeException(message, _) -> log ("Runtime Exception: " ^ message));
  Js.true_
end)

let () = begin
  ignore (jquery "#prettyview" |> Jquery.text (prettyPrintExpression !currentProgram));
  ignore (jquery "#encodedview" |> Jquery.val_ (`str (serialize !currentProgram)));  
end
