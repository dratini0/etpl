(*
 * zoom.ml
 * Copyright 2017-2018 Balint Kovacs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *)

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