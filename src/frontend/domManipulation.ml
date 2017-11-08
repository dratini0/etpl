let jquery = Jquery.jquery

let currentPanel = ref None

let hidePanels () = begin
  ignore (jquery ".panel" |> Jquery.removeClass (`str "shown"));
  ignore (jquery "#panelmeta" |> Jquery.removeClass (`str "shown"));
  currentPanel := None;
end

let showPanel name () = begin
  if !currentPanel <> Some(name) then begin
    ignore (jquery ".panel" |> Jquery.removeClass (`str "shown"));
    ignore (jquery "#panelmeta" |> Jquery.addClass (`str "shown"));
    ignore (jquery ("#" ^ name) |> Jquery.addClass (`str "shown"));
    currentPanel := Some(name)
  end else
    hidePanels()
end

let hideModals () = begin
  ignore (jquery ".modal" |> Jquery.removeClass (`str "shown"));
  ignore (jquery "#modalmeta" |> Jquery.removeClass (`str "shown"));
end

let showModal name () = begin
  ignore (jquery ".modal" |> Jquery.removeClass (`str "shown"));
  ignore (jquery "#modalmeta" |> Jquery.addClass (`str "shown"));
  ignore (jquery ("#" ^ name) |> Jquery.addClass (`str "shown"));
end

let doSimpleBind event binding jq =
  ignore (jq |> Jquery.on event (fun [@bs.this] _ _ -> (binding (); Js.true_)))

let doSimpleFalseBind event binding jq =
  ignore (jq |> Jquery.on event (fun [@bs.this] _ _ -> (binding (); Js.false_)))  

let hideThrobber () = ignore (
  jquery "#throbber_bg" |> Jquery.hide
)

let init () = begin
  jquery "#panelshade" |> doSimpleBind "click" hidePanels;
  jquery "#modalshade" |> doSimpleBind "click" hideModals;
end
