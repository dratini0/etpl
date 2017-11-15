open Language
open Position
open TreeManipulation
open CodeRender
open Types
open DomManipulation
open ModalGetNumber

let jquery = Jquery.jquery

let currentProgram = ref Hole
let currentHole = ref emptyPosition
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
  match mode with
    | ModeInsert -> ignore(jquery "#codebox"
        |> Jquery.removeClass (`str "cut_mode")
        |> Jquery.removeClass (`str "copy_mode"))
    | ModeCut
    | ModeCutLock -> ignore(jquery "#codebox"
        |> Jquery.addClass (`str "cut_mode")
        |> Jquery.removeClass (`str "copy_mode"))
    | ModeCopy
    | ModeCopyLock -> ignore(jquery "#codebox"
        |> Jquery.removeClass (`str "cut_mode")
        |> Jquery.addClass (`str "copy_mode"))
end

let cutButton () = setMode (match !currentMode with
  | ModeCut -> ModeCutLock
  | ModeCutLock -> ModeInsert
  | _ -> ModeCut)

let copyButton () = setMode (match !currentMode with
  | ModeCopy -> ModeCopyLock
  | ModeCopyLock -> ModeInsert
  | _ -> ModeCopy)

let resetMode () = setMode ModeInsert

let addToClipboard expression = clipboard := expression::!clipboard

let rec setCurrentHole hole =
  let buttons = jquery "#keypad button" in
  begin
    ignore (jqueryPosition !currentHole |> Jquery.removeClass (`str "focus"));
    ignore (jqueryPosition hole |> Jquery.addClass (`str "focus"));
    currentHole := hole;
    ignore (buttons
      |> Jquery.empty
      |> Jquery.attr (`kv ("disabled", "disabled"))
      |> Jquery.off "click");
    whatFits !currentProgram !currentHole |> List.iteri (fun index expression ->
    ignore (buttons
      |> Jquery.eq index
      |> Jquery.removeAttr "disabled"
      |> Jquery.append_ (renderExpression expression None emptySpecialCasingFunction)
      |> doSimpleBind "click" (replaceCurrentHoleWrapper expression)
    ));
  end

and handleCut position expression () = begin
  if !currentMode = ModeCut then resetMode () else ();
  addToClipboard expression;
  replaceSubtreeVisual position Hole;
end

and handleCopy _ expression () = begin
  if !currentMode = ModeCopy then resetMode () else ();
  addToClipboard expression;
end

and holeClickHandlerSpecialCasingFunction expression position element = match expression, position with
  | Hole, Some(pos) -> begin
    element |> doSimpleBind "click" (fun () -> setCurrentHole pos);
    element
  end
  | _, Some(pos) -> begin
    let controls = cloneElementFromTemplate "controls" in
    controls |> Jquery.find ".cut_control" |> doSimpleBind "click" (handleCut pos expression);
    controls |> Jquery.find ".copy_control" |> doSimpleBind "click" (handleCopy pos expression);
    element |> Jquery.prepend_ controls;
  end
  | _ -> element

and replaceSubtreeVisual position expression = begin
  ignore (jqueryPosition position
    |> Jquery.parent
    |> Jquery.empty
    |> Jquery.append_ (renderExpression expression (Some position) holeClickHandlerSpecialCasingFunction));
  currentProgram := replaceSubtree !currentProgram position expression;
  if isInside !currentHole position then
    setCurrentHole (match nextHole !currentProgram position with
      | Some(pos) -> pos
      | None -> (match firstHole !currentProgram with
        | Some(pos) -> pos
        | None -> emptyPosition
      ))
  else ();
end

and replaceCurrentHole expression = replaceSubtreeVisual !currentHole expression

(* This is meant to handle special cases like number literals *)
and replaceCurrentHoleWrapper expression () = match expression with 
  | Literal(Number(_)) -> getNumber 0. (fun x -> replaceCurrentHole(Literal(Number(x))))
  | _ -> replaceCurrentHole expression

let redraw () = begin
  ignore (jquery "#codebox"
    |> Jquery.empty
    |> Jquery.append_ (renderExpression !currentProgram (Some Position.emptyPosition) holeClickHandlerSpecialCasingFunction));
  setCurrentHole (match firstHole !currentProgram with
    | Some(pos) -> pos
    | None -> emptyPosition
  );
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

let init () = begin
  redraw ();
  jquery "#codebox" |> doSimpleBind "dblclick" executeProgram;
  jquery "#result_close" |> doSimpleBind "click" hideModals;
  jquery "#cut_button" |> doSimpleBind "click" cutButton;
  jquery "#copy_button" |> doSimpleBind "click" copyButton;
end
