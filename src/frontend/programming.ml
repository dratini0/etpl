open Language
open Position
open TreeManipulation
open CodeRender
open Types
open DomManipulation

let jquery = Jquery.jquery

let currentProgram = ref Hole
let currentHole = ref emptyPosition

let jqueryPosition position = jquery ("#" ^ (posToId position))

let getCurrentHole () = !currentHole

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
      |> Jquery.append_ (renderExpression expression None)
      |> doSimpleBind "click" (replaceCurrentHoleWrapper expression)
    ));
  end

and replaceCurrentHole expression = begin
  ignore (jqueryPosition !currentHole
    |> Jquery.parent
    |> Jquery.empty
    |> Jquery.append_ (renderExpression expression (Some !currentHole)));
  currentProgram := replaceSubtree !currentProgram !currentHole expression;
  setCurrentHole (match nextHole !currentProgram !currentHole with
    | Some(pos) -> pos
    | None -> (match firstHole !currentProgram with
      | Some(pos) -> pos
      | None -> emptyPosition
    ));
end

(* This is meant to handle special cases like number literals *)
and replaceCurrentHoleWrapper expression () = replaceCurrentHole expression

let redraw () = begin
  ignore (jquery "#codebox"
    |> Jquery.empty
    |> Jquery.append_ (renderExpression !currentProgram (Some Position.emptyPosition)));
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

let init () = begin
  redraw ()
end
