open DomManipulation

open JquerySafe

let zoomLevel = ref 14.
let zoomStep = 1.1

let setZoom number = begin
  zoomLevel := number;
  ignore(jquery "body" |> Jquery.css (`kv ("font-size", Printf.sprintf "%f%,px" number)));
end

let  zoomIn () = setZoom (!zoomLevel *. zoomStep)
let  zoomOut () = setZoom (!zoomLevel /. zoomStep)

let init () = begin
  (try (
    Scanf.sscanf (jquery "body" |> Jquery.css_get "font-size") "%f px" (fun size -> zoomLevel := size)
  ) with (Scanf.Scan_failure msg) -> Js.log ("Failed to get font size: " ^ msg));
  jquery "#zoomin_button" |> doSimpleBind "click" zoomIn;
  jquery "#zoomout_button" |> doSimpleBind "click" zoomOut;
end