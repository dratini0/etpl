open Language
open Position
open TreeManipulation
open CodeRender
open Types
open DomManipulation
open ModalGetNumber
open ModalGetText
open Logging

open JquerySafe

include ProgrammingState
open ProgrammingState.Private

type mode =
  | ModeInsert
  | ModeCut
  | ModeCutLock
  | ModeCopy
  | ModeCopyLock

let currentMode = ref ModeInsert

let jqueryPosition position = jquery ("#" ^ (posToId position))

let setMode mode = begin
  currentMode := mode;
  jquery "body"
    |> Jquery.removeClass (`str "cut_mode")
    |> Jquery.removeClass (`str "copy_mode")
    |> Jquery.removeClass (`str "lock_mode")
    |> ignore;
  (match mode with
    | ModeInsert -> ()
    | ModeCut
    | ModeCutLock ->
      jquery "body"
        |> Jquery.addClass (`str "cut_mode")
        |> ignore
    | ModeCopy
    | ModeCopyLock ->
      jquery "body"
        |> Jquery.addClass (`str "copy_mode")
        |> ignore);
  (match mode with
    | ModeCutLock
    | ModeCopyLock ->
      jquery "body"
        |> Jquery.addClass (`str "lock_mode")
        |> ignore
    | _ -> ());
end

let resetMode () = 
  match !currentMode with
    | ModeCut
    | ModeCopy -> setMode ModeInsert
    | _ -> ()

let cutButton () = begin
  setMode (match !currentMode with
    | ModeCut -> ModeCutLock
    | ModeCutLock -> ModeInsert
    | _ -> ModeCut);
  hidePanels ();
end

let copyButton () = begin
  setMode (match !currentMode with
    | ModeCopy -> ModeCopyLock
    | ModeCopyLock -> ModeInsert
    | _ -> ModeCopy);
  hidePanels ();
end

let addToClipboard expression = clipboard := expression::!clipboard

let rec setCurrentHole hole =
  let buttons = jquerySome "#keypad button" in
  begin
    resetMode ();
    (match !currentHole with
      | Some oldHole -> ignore (jqueryPosition oldHole |> Jquery.removeClass (`str "focus"));
      | None -> ());
    (match hole with
      | Some hole -> ignore (jqueryPosition hole |> Jquery.addClass (`str "focus"));
      | None -> ());
    currentHole := hole;
    ignore (buttons
      |> Jquery.empty
      |> Jquery.attr (`kv ("disabled", "disabled"))
      |> Jquery.off "click");
    (match hole with
      | Some hole ->
          whatFits !currentProgram hole |> List.iteri (fun index expression ->
          ignore (buttons
            |> Jquery.eq index
            |> Jquery.removeAttr "disabled"
            |> Jquery.append_ (renderExpression expression None emptySpecialCasingFunction)
            |> doSimpleBind "click" (replaceCurrentHoleWrapper index expression)
          ));
      | None -> ());
  end

and handleCut position () = begin
  let oldHole = getCurrentHole() in
  let expression = getSubtree !currentProgram position in
  resetMode ();
  addToClipboard expression;
  replaceSubtreeVisual position Hole;
  enque (EClipboardCutCopy{copy=false; expression=expression; position=position; oldHole=oldHole; newHole=(getCurrentHole())})
end

and handleCopy position () = begin
  resetMode ();
  let expression = getSubtree !currentProgram position in
  addToClipboard expression;
  enque (EClipboardCutCopy{copy=true; expression=expression; position=position; oldHole=(getCurrentHole()); newHole=(getCurrentHole())})
end

and holeClickHandlerSpecialCasingFunction expression position element = match expression, position with
  | Hole, Some(pos) -> begin
    element |> doSimpleBind "click" (fun () -> begin
      enque (EHoleSelect {oldHole=(getCurrentHole()); newHole=pos});
      setCurrentHole (Some pos);
    end);
    element
  end
  | _, Some(pos) -> begin
    let controls = cloneElementFromTemplate "controls" in
    controls |> Jquery.find ".cut_control" |> doSimpleBind "click" (handleCut pos);
    controls |> Jquery.find ".copy_control" |> doSimpleBind "click" (handleCopy pos);
    element |> Jquery.prepend_ controls;
  end
  | _ -> element

and replaceSubtreeVisual position expression = begin
  resetMode ();
  jqueryMaybe ".errormarker" |> Jquery.removeClass (`str "errormarker") |> ignore;
  ignore (jqueryPosition position
    |> Jquery.parent
    |> Jquery.empty
    |> Jquery.append_ (renderExpression expression (Some position) holeClickHandlerSpecialCasingFunction));
  currentProgram := replaceSubtree !currentProgram position expression;
  (match !currentHole with
    | Some hole ->
      if isInside hole position then
        setCurrentHole (match nextHole !currentProgram position with
          | Some(pos) -> Some(pos)
          | None -> firstHole !currentProgram)
      else ();
    | None -> setCurrentHole (firstHole !currentProgram));
  enque (EReplaceSubtree {position=position; expression=expression; newHole=(getCurrentHole())})
end

and replaceCurrentHole expression = match !currentHole with 
  | Some hole -> replaceSubtreeVisual hole expression
  | None -> ()

(* This is meant to handle special cases like number literals *)
and replaceCurrentHoleWrapper number expression () = begin
  enque(EButtonPress {buttonNumber=number; expression=expression; hole=(getCurrentHole())});
  match expression with 
    | Literal(Number(_)) -> getNumber 0. (fun x -> replaceCurrentHole(Literal(Number(x))))
    | Literal(String(_)) -> getText "" (fun x -> replaceCurrentHole(Literal(String(x))))
    | _ -> replaceCurrentHole expression;
end

let redraw () = begin
  ignore (jquery "#codebox"
    |> Jquery.empty
    |> Jquery.append_ (renderExpression !currentProgram (Some Position.emptyPosition) holeClickHandlerSpecialCasingFunction));
  setCurrentHole (firstHole !currentProgram);
end

let setCurrentProgram expression = begin
  currentProgram := expression;
  redraw()
end

let executeProgram() = begin
  logState();
  try
    let result = Interpreter.evaluate !currentProgram in
    enque (ESuccessfulExecution {result=Literal(result)});
    ignore (jquery "#result"
      |> Jquery.empty
      |> Jquery.append_ (renderValue result));
    showModal "result_modal" ();
    ignore(Js.Global.setTimeout (fun () ->
      ignore (jquery "#result_close" |> Jquery.focus);
    ) 500);
  with
    | Interpreter.RuntimeException (message, State(expression, position)) -> begin
        enque (ERuntimeException{message=message; expression=expression; location=position});
        jquery1 "#error_msg" |> Jquery.text message |> ignore;
        jquery1 "#error_codebox"
          |> Jquery.empty
          |> Jquery.append_ (renderExpression expression None emptySpecialCasingFunction)
          |> ignore;
        jqueryPosition position |> Jquery.addClass (`str "errormarker") |> ignore;
        showModal "error_modal" ();
      end
end

let clipboardDeleteHandler = fun [@bs.this] node _ -> begin
  let node = Jquery.jquery'' node |> Jquery.parent in
  let index = node |> Jquery.index in
  enque (EClipboardDelete {number=index; expression=(List.nth !clipboard index)});
  clipboard := !clipboard |> BatList.remove_at (index);
  node |> Jquery.remove |> ignore;
  Js.true_;
end

let clipboardPasteHandler expression = fun [@bs.this] node _ -> begin
  let index = Jquery.jquery'' node |> Jquery.parent |> Jquery.index in
  enque (EClipboardPaste {expression=expression; hole=(getCurrentHole()); number=index});
  (match getCurrentHole() with
    | None -> ()
    | Some hole ->
        if fitsHole !currentProgram hole expression then begin
          replaceCurrentHole expression;
          hidePanels();
        end);
  Js.true_;
end

let showClipboard () =
  if showPanelWithReturn "clipboardpanel" then begin
    let clipboardElement = jquery "#clipboard" |> Jquery.empty in
    !clipboard |> List.iter (fun expression -> (
      let item = cloneElementFromTemplate "clipboarditem" in
      item
        |> Jquery.find ".child0"
        |> Jquery.append_(renderExpression expression None emptySpecialCasingFunction)
        |> ignore;
      item
        |> Jquery.find ".clip_delete"
        |> Jquery.on "click" clipboardDeleteHandler
        |> ignore;
      if match getCurrentHole() with
        | Some hole -> fitsHole !currentProgram hole expression
        | None -> false
      then begin
        item
          |> Jquery.find ".clip_paste"
          |> Jquery.on "click" (clipboardPasteHandler expression)
          |> ignore;
      end else begin
        item
          |> Jquery.find ".clip_paste"
          |> doSimpleBind "click" (fun () -> ());
        item |> Jquery.addClass (`str "invalid") |> ignore;
      end;
      clipboardElement |> Jquery.append_ item |> ignore;
      ))
  end else ()

let init () = begin
  redraw ();
  jquery "#codebox" |> doSimpleBind "dblclick" executeProgram;
  jquery "#result_close" |> doSimpleBind "click" hideModals;
  jquery "#error_close" |> doSimpleBind "click" hideModals;
  jquery "#cut_button" |> doSimpleBind "click" cutButton;
  jquery "#copy_button" |> doSimpleBind "click" copyButton;
  jquery "#clipboard_button" |> doSimpleBind "click" showClipboard;
end
