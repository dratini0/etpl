open DomManipulation

let jquery = Jquery.jquery

let currentGetNumberCallback = ref (fun (number:float) -> Js.log number)

let frexpDecimal number =
  match classify_float number with
  | FP_infinite
  | FP_nan -> ("0", "0")
  | FP_zero
  | FP_normal
  | FP_subnormal ->
      let strform = Printf.sprintf "%.17e" (abs_float number) in
      let mantissa = String.sub strform 0 19 in
      let exponent = String.sub strform 20 3 in
      ((if number >= 0. then mantissa else ("-" ^ mantissa)), exponent)
      

let getNumber current callback =
let (mantissa, exponent) = frexpDecimal current in begin
  match classify_float current with
  | FP_infinite ->
    if current > 0. then
      ignore (jquery "#numberinput_inf" |> Jquery.prop (`kv ("checked", "checked")))
    else
      ignore (jquery "#numberinput_neginf" |> Jquery.prop (`kv ("checked", "checked")))
  | FP_nan -> ignore (jquery "#numberinput_nan" |> Jquery.prop (`kv ("checked", "checked")))
  | FP_zero
  | FP_normal
  | FP_subnormal -> ignore (jquery "#numberinput_normal" |> Jquery.prop (`kv ("checked", "checked")))
  ;
  ignore (jquery "#numberinput_mantissa" |> Jquery.val_ (`str mantissa));
  ignore (jquery "#numberinput_exponent" |> Jquery.val_ (`str exponent));
  currentGetNumberCallback := callback; 
  showModal "numberinput_modal" ();
end

let handleNumber () =
  let number = match jquery "input[name=\"numberinput_floatclass\"]:checked" |> Jquery.val_get with
    | "normal" -> (
      let mantissa = jquery "#numberinput_mantissa" |> Jquery.val_get in
      let exponent = jquery "#numberinput_exponent" |> Jquery.val_get in
      try
        Some((mantissa ^ "e" ^ exponent) |> float_of_string);
      with Failure "float_of_string" -> try
        let mantissa_ = float_of_string mantissa in
        let exponent_ = exponent |> int_of_string |> float_of_int in
        Some(mantissa_ *. exp(log 10. *. exponent_))
      with Failure _ -> None)
    | "nan" -> Some nan
    | "inf" -> Some infinity
    | "neginf" -> Some neg_infinity
    | _ -> None
    in
  match number with
    | Some(number_) -> begin
        ignore(jquery "#numberinput_modal" |> Jquery.removeClass(`str "error"));
        hideModals ();
        !currentGetNumberCallback number_;
      end
    | None -> ignore(jquery "#numberinput_modal" |> Jquery.addClass(`str "error"))

let init () = begin
  jquery "#numberinput_ok" |> doSimpleFalseBind "click" handleNumber;
  jquery "#numberinput_cancel" |> doSimpleFalseBind "click" hideModals;
end
