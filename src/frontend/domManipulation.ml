(*
 * domManipulation.ml
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

open JquerySafe

let currentPanel = ref None

let getCurrentPanel () = !currentPanel

let hidePanels () = begin
  ignore (jquerySome ".panel" |> Jquery.removeClass (`str "shown"));
  ignore (jquery "#panelmeta" |> Jquery.removeClass (`str "shown"));
  currentPanel := None;
end

let showPanelWithReturn name = begin
  if !currentPanel <> Some(name) then begin
    ignore (jquerySome ".panel" |> Jquery.removeClass (`str "shown"));
    ignore (jquery "#panelmeta" |> Jquery.addClass (`str "shown"));
    ignore (jquery ("#" ^ name) |> Jquery.addClass (`str "shown"));
    currentPanel := Some(name);
    true;
  end else begin
    hidePanels();
    false;
  end
end

let showPanel name () = ignore (showPanelWithReturn name)

let hideModals () = begin
  ignore (jquerySome ".modal" |> Jquery.removeClass (`str "shown"));
  ignore (jquery "#modalmeta" |> Jquery.removeClass (`str "shown"));
end

let showModal name () = begin
  ignore (jquerySome ".modal" |> Jquery.removeClass (`str "shown"));
  ignore (jquery "#modalmeta" |> Jquery.addClass (`str "shown"));
  ignore (jquery ("#" ^ name) |> Jquery.addClass (`str "shown"));
end

let doSimpleBind event binding jq =
  ignore (jq |> Jquery.on event (fun [@bs.this] _ _ -> (binding (); Js.false_)))

let doSimpleTrueBind event binding jq =
  ignore (jq |> Jquery.on event (fun [@bs.this] _ _ -> (binding (); Js.true_)))
  
let hideThrobber () = ignore (
  jquery "#throbber_bg" |> Jquery.hide
)

let init () = begin
  jquery "#panelshade" |> doSimpleBind "click" hidePanels;
  jquery "#modalshade" |> doSimpleBind "click" hideModals;
end
