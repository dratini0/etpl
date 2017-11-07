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
  ignore (jq |> Jquery.on event (fun [@bs.this] _ _ -> (binding (); Js.true_)))  

let bindPanelHandlers () = begin 
  jquery "#panelshade" |> doSimpleBind "click" hidePanels;
  jquery "#debugpanel_button" |> doSimpleBind "click" (showPanel "debugpanel")
end

let currentGetNumberCallback = ref (fun (number:float) -> Js.log number)

let frexpDecimal number =
  match classify_float number with
  | FP_zero
  | FP_infinite
  | FP_nan -> ("0", "0")
  | FP_normal
  | FP_subnormal ->
      let strform = Printf.sprintf "%.17e" (abs_float number) in
      let mantissa = String.sub strform 0 19 in
      let exponent = String.sub strform 20 3 in
      ((if number > 0. then mantissa else ("-" ^ mantissa)), exponent)
      

let getNumber current callback =
let (mantissa, exponent) = frexpDecimal current in begin
  ignore (jquery "#numberinput_mantissa" |> Jquery.val_ (`str mantissa));
  ignore (jquery "#numberinput_exponent" |> Jquery.val_ (`str exponent));
  currentGetNumberCallback := callback; 
  showModal "numberinput_modal" ();
end


let handleNumber () =
  let mantissa = jquery "#numberinput_mantissa" |> Jquery.val_get in
  let exponent = jquery "#numberinput_exponent" |> Jquery.val_get in
  begin
    try
      (mantissa ^ "e" ^ exponent) |> float_of_string |> !currentGetNumberCallback;
      hideModals();
    with Failure "float_of_string" -> (); (* TODO: handle error *)
  end

let bindModalHandlers () = begin
  jquery "#modalshade" |> doSimpleBind "click" hideModals;
  jquery "#numberinput_ok" |> doSimpleFalseBind "click" handleNumber;
  jquery "#numberinput_cancel" |> doSimpleFalseBind "click" hideModals;
end
