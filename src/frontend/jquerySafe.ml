let log = PanelDebugLog.log

(* Optimally, a jquery binding would have something like this *)

let jquery1 selector =
  let result = Jquery.jquery selector in begin
    if result |> Jquery.length != 1 then begin
      [%bs.debugger];
      log (Printf.sprintf "jquery1: Selector \"%s\" returned %d elements" selector (result |> Jquery.length));
    end;
    result;
  end

let jquery = jquery1

let jquerySome selector =
  let result = Jquery.jquery selector in begin
    if result |> Jquery.length = 0 then begin
      [%bs.debugger];
      log (Printf.sprintf "jquerySome: Selector \"%s\" returned no elements" selector);
    end;
    result;
  end
