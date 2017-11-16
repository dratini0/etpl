open Language
open Position
open TreeManipulation
open CodeRender
open Types
open DomManipulation
open ModalGetNumber

let jquery = Jquery.jquery

let currentProgram = ref Hole
let currentHole = ref (Some emptyPosition)
let clipboard = ref []

type mode =
  | ModeInsert
  | ModeCut
  | ModeCutLock
  | ModeCopy
  | ModeCopyLock

let currentMode = ref ModeInsert

let jqueryPosition position = jquery ("#" ^ (posToId position))

let getCurrentHole () = !currentHole

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
  let buttons = jquery "#keypad button" in
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
            |> doSimpleBind "click" (replaceCurrentHoleWrapper expression)
          ));
      | None -> ());
  end

and handleCut position () = begin
  resetMode ();
  addToClipboard (getSubtree !currentProgram position);
  replaceSubtreeVisual position Hole;
end

and handleCopy position () = begin
  resetMode ();
  addToClipboard (getSubtree !currentProgram position);
end

and holeClickHandlerSpecialCasingFunction expression position element = match expression, position with
  | Hole, Some(pos) -> begin
    element |> doSimpleBind "click" (fun () -> setCurrentHole (Some pos));
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
  ignore (jqueryPosition position
    |> Jquery.parent
    |> Jquery.empty
    |> Jquery.append_ (renderExpression expression (Some position) holeClickHandlerSpecialCasingFunction));
  currentProgram := replaceSubtree !currentProgram position expression;
  match !currentHole with
    | Some hole ->
      if isInside hole position then
        setCurrentHole (match nextHole !currentProgram position with
          | Some(pos) -> Some(pos)
          | None -> firstHole !currentProgram)
      else ();
    | None -> setCurrentHole (firstHole !currentProgram);
end

and replaceCurrentHole expression = match !currentHole with 
  | Some hole -> replaceSubtreeVisual hole expression
  | None -> ()

(* This is meant to handle special cases like number literals *)
and replaceCurrentHoleWrapper expression () = match expression with 
  | Literal(Number(_)) -> getNumber 0. (fun x -> replaceCurrentHole(Literal(Number(x))))
  | _ -> replaceCurrentHole expression

let redraw () = begin
  ignore (jquery "#codebox"
    |> Jquery.empty
    |> Jquery.append_ (renderExpression !currentProgram (Some Position.emptyPosition) holeClickHandlerSpecialCasingFunction));
  setCurrentHole (firstHole !currentProgram);
end

let getCurrentProgram () = !currentProgram
let setCurrentProgram expression = begin
  currentProgram := expression;
  redraw()
end

let executeProgram() = begin
  let result = Interpreter.evaluate !currentProgram in
  ignore (jquery "#result"
    |> Jquery.empty
    |> Jquery.append_ (renderValue result));
  showModal "result_modal" ();
  ignore(Js.Global.setTimeout (fun () ->
    ignore (jquery "#result_close" |> Jquery.focus);
  ) 500);
end

let clipboardDeleteHandler = fun [@bs.this] node _ -> begin
  let node = Jquery.jquery'' node |> Jquery.parent in
  clipboard := !clipboard |> BatList.remove_at (node |> Jquery.index);
  node |> Jquery.remove |> ignore;
  Js.true_;
end

let clipboardPasteHandler expression () =
  match getCurrentHole() with
    | None -> ()
    | Some hole -> 
      if fitsHole !currentProgram hole expression then begin
        replaceCurrentHole expression;
        hidePanels();
      end else ()

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
          |> doSimpleBind "click" (clipboardPasteHandler expression);
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
  jquery "#cut_button" |> doSimpleBind "click" cutButton;
  jquery "#copy_button" |> doSimpleBind "click" copyButton;
  jquery "#clipboard_button" |> doSimpleBind "click" showClipboard;
end
