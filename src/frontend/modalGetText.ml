(*
 * modalGetText.ml
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

let currentGetTextCallback = ref (fun (string:string) -> Js.log string)

let getText current callback = begin
  jquery "#textinput_field" |> Jquery.val_ (`str current) |> ignore;
  currentGetTextCallback := callback; 
  showModal "textinput_modal" ();
end

let handleText () = begin
  hideModals ();
  !currentGetTextCallback (jquery "#textinput_field" |> Jquery.val_get);
end

let init () = begin
  jquery "#textinput_ok" |> doSimpleBind "click" handleText;
  jquery "#textinput_cancel" |> doSimpleBind "click" hideModals;
end
