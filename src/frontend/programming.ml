open Language
open Position
open TreeManipulation
open CodeRender
open Types
open DomManipulation
open ModalGetNumber
open ModalGetText
open ModalGetLine
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
  | ModeArrayDelete of position

let currentMode = ref ModeInsert

(* Would benefit from array-ness! *)
let currentSuggestions = ref []

let currentSuggestionPageStart = ref 0

(* Pagination-related magic constants, for now *)
let buttonCount = 16
let nextPageButtonIndex = 15
let prevPageButtonIndex = 12

let jqueryPosition position = jquery ("#" ^ (posToId position))
let jqueryMaybePosition position = jqueryMaybe ("#" ^ (posToId position))

let setMode mode = begin
  currentMode := mode;
  jquery "body"
    |> Jquery.removeClass (`str "cut_mode")
    |> Jquery.removeClass (`str "copy_mode")
    |> Jquery.removeClass (`str "lock_mode")
    |> ignore;
  jqueryMaybe ".array_delete_active"
    |> Jquery.removeClass (`str "array_delete_active")
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
        |> ignore
    | ModeArrayDelete p ->
      jqueryPosition p
        |> Jquery.addClass (`str "array_delete_active")
        |> ignore
  );
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
    | ModeCopy
    | ModeArrayDelete _ -> setMode ModeInsert
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

let rec updateButtons () =
  let buttons = jquerySome "#keypad button" in
  let renderPrevButton = !currentSuggestionPageStart != 0 in
  let suggestionCount = List.length !currentSuggestions in
  let possiblyRenderedSuggestions = !currentSuggestionPageStart
                                    + buttonCount
                                    - (if renderPrevButton then 1 else 0) in
  let renderNextButton = possiblyRenderedSuggestions < suggestionCount in begin
    ignore (buttons
      |> Jquery.attr (`kv ("disabled", "disabled"))
      |> Jquery.off "click"
      |> Jquery.find ".button_liner"
      |> Jquery.empty
      );
    let rec fillButtons index suggestions = (
      if index >= buttonCount then () else
      if renderPrevButton && index = prevPageButtonIndex then (
        buttons
          |> Jquery.eq index
          |> Jquery.removeAttr "disabled"
          |> doSimpleBind "click" prevPage;
        buttons
          |> Jquery.eq index
          |> Jquery.find ".button_liner"
          |> Jquery.append_ (cloneElementFromTemplate "label_prev")
          |> ignore;
        fillButtons (index + 1) suggestions
      ) else
      if renderNextButton && index = nextPageButtonIndex then (
        buttons
          |> Jquery.eq index
          |> Jquery.removeAttr "disabled"
          |> doSimpleBind "click" nextPage;
        buttons
          |> Jquery.eq index
          |> Jquery.find ".button_liner"
          |> Jquery.append_ (cloneElementFromTemplate "label_next")
          |> ignore;
        fillButtons (index + 1) suggestions
      ) else 
        match suggestions with
          | [] -> fillButtons (index + 1) []
          | suggestion::otherSuggestions -> (
            buttons
              |> Jquery.eq index
              |> Jquery.removeAttr "disabled"
              |> doSimpleBind "click" (replaceCurrentHoleWrapper index suggestion)
              |> ignore;
            buttons
              |> Jquery.eq index
              |> Jquery.find ".button_liner"
              |> Jquery.append_ (renderExpression suggestion None emptySpecialCasingFunction)
              |> ignore;
            fillButtons (index + 1) otherSuggestions
          )
    ) in
    fillButtons 0 (BatList.drop !currentSuggestionPageStart !currentSuggestions)
  end

and nextPage () = begin
  if !currentSuggestionPageStart = 0 then
    currentSuggestionPageStart := buttonCount - 1
  else
    currentSuggestionPageStart := !currentSuggestionPageStart + (buttonCount - 2);
  updateButtons ();
  enque (EPageChange {next=true; newStart=(!currentSuggestionPageStart)});
end
and prevPage () = begin
  if !currentSuggestionPageStart <= buttonCount - 1 then
    currentSuggestionPageStart := 0
  else
    currentSuggestionPageStart := !currentSuggestionPageStart - (buttonCount - 2);
  updateButtons ();
  enque (EPageChange {next=false; newStart=(!currentSuggestionPageStart)});
end

and setSuggestions suggestions = begin
  currentSuggestions := suggestions;
  currentSuggestionPageStart := 0;
  updateButtons ();
end

and setCurrentHole hole =
  begin
    resetMode ();
    (match !currentHole with
      | Some oldHole -> ignore (jqueryMaybePosition oldHole |> Jquery.removeClass (`str "focus"));
      | None -> ());
    (match hole with
      | Some hole -> ignore (jqueryPosition hole |> Jquery.addClass (`str "focus"));
      | None -> ());
    currentHole := hole;
    (match hole with
      | Some hole -> setSuggestions (whatFits !currentProgram hole) 
      | None -> setSuggestions [];
    )
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

and handleArrayAddTop position () = begin
  resetMode ();
  (match getSubtree !currentProgram position with
    | NAryOp(ArrayForm, l, 0, []) ->
      (* We re-render the whole subtree, so that all the ids change accordingly *)
      replaceSubtreeVisual position (NAryOp(ArrayForm, Hole::l, 0, []))
    | _ -> raise (Invalid_argument "handleArrayAddTop"));
  enque (EArrayAdd {first=true; position=position})
end

and handleArrayAddBottom position () = begin
  resetMode ();
  (match getSubtree !currentProgram position with
    | NAryOp(ArrayForm, l, 0, []) ->
      (* Could just add the very last item, theoretically. *)
      replaceSubtreeVisual position (NAryOp(ArrayForm, l@[Hole], 0, []))
    | _ -> raise (Invalid_argument "handleArrayAddBottom"));
  enque (EArrayAdd {first=false; position=position})
end

and handleArrayDeleteButton position () = begin
  match !currentMode with
    | ModeArrayDelete p when posEqual p position -> setMode ModeInsert
    | _ -> setMode (ModeArrayDelete position)
end

and handleArrayDeleteItem position item () = begin
  resetMode ();
  (match getSubtree !currentProgram position with
    | NAryOp(ArrayForm, l, 0, []) ->
      (* Could just add the very last item, theoretically. *)
      replaceSubtreeVisual position (NAryOp(ArrayForm, BatList.remove_at item l, 0, []))
    | _ -> raise (Invalid_argument "handleArrayAddBottom"));
  enque (EArrayDelete {index=item; position=position})
end

and holeClickSpecialCasingFunction pos element = begin
  element |> doSimpleBind "click" (fun () -> begin
    enque (EHoleSelect {oldHole=(getCurrentHole()); newHole=pos});
    setCurrentHole (Some pos);
  end);
  element
end

and copyCutControlSpecialCasingFunction pos element = begin
  let controls = cloneElementFromTemplate "controls" in
  controls |> Jquery.find ".cut_control" |> doSimpleBind "click" (handleCut pos);
  controls |> Jquery.find ".copy_control" |> doSimpleBind "click" (handleCopy pos);
  element |> Jquery.prepend_ controls;
end

and arrayEditorSpecialCasingFunction pos element = begin
  let array_controls = element |> Jquery.find ".array_controls" |> Jquery.eq 0 in
  array_controls |> Jquery.find ".array_add_top" |> doSimpleBind "click" (handleArrayAddTop pos);
  array_controls |> Jquery.find ".array_add_bottom" |> doSimpleBind "click" (handleArrayAddBottom pos);
  array_controls |> Jquery.find ".array_delete" |> doSimpleBind "click" (handleArrayDeleteButton pos);
  element
    |> Jquery.find ".container"
    |> Jquery.eq 0
    |> Jquery.children
    |> Jquery.toArray
    |> fun x -> Js.log x; x
    |> Array.iteri (fun i item -> (
      Jquery.jquery'' item
        |> Jquery.find ".array_delete_item"
        |> Jquery.eq 0
        |> fun x -> Js.log x; x
        |> doSimpleBind "click" (handleArrayDeleteItem pos i)
        |> ignore
    ));
  element
end

and eventHandlerSpecialCasingFunction expression position element = match expression, position with
  | Hole, Some(pos) -> 
    element
      |> holeClickSpecialCasingFunction pos
  | NAryOp(ArrayForm, _, 0, []), Some(pos) ->
    element
      |> copyCutControlSpecialCasingFunction pos
      |> arrayEditorSpecialCasingFunction pos
  | _, Some(pos) ->
    element
      |> copyCutControlSpecialCasingFunction pos 
  | _ -> element

and replaceSubtreeVisual position expression = begin
  resetMode ();
  jqueryMaybe ".errormarker" |> Jquery.removeClass (`str "errormarker") |> ignore;
  ignore (jqueryPosition position
    |> Jquery.parent
    |> Jquery.empty
    |> Jquery.append_ (renderExpression expression (Some position) eventHandlerSpecialCasingFunction));
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
    | Let(_, Hole, Hole) -> getLine "Variable name" "" (fun name -> replaceCurrentHole(Let(name, Hole, Hole)))
    | Function(None, _, None, Hole) ->
        getLine "Argument name" "" (fun argumentName ->
          replaceCurrentHole(Function(None, argumentName, None, Hole)))
    | Function(Some _, _, None, Hole) ->
        getLine "Argument name" "" (fun argumentName ->
          getLine "Recursive variable name" "" (fun recursiveVariableName ->
            replaceCurrentHole(Function(Some recursiveVariableName, argumentName, None, Hole))))
    | _ -> replaceCurrentHole expression;
end

let redraw () = begin
  ignore (jquery "#codebox"
    |> Jquery.empty
    |> Jquery.append_ (renderExpression !currentProgram (Some Position.emptyPosition) eventHandlerSpecialCasingFunction));
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
    | Interpreter.RuntimeException (message, State expression, position) -> begin
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
