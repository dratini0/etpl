(*
 * modalGetLine.ml
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

let currentGetLineCallback = ref (fun (string:string) -> Js.log string)

let getLine title current callback = begin
  jquery "#lineinput_title" |> Jquery.text title |> ignore;
  jquery "#lineinput_field" |> Jquery.val_ (`str current) |> ignore;
  currentGetLineCallback := callback; 
  showModal "lineinput_modal" ();
end

let handleLine () = begin
  hideModals ();
  !currentGetLineCallback (jquery "#lineinput_field" |> Jquery.val_get);
end

let init () = begin
  jquery "#lineinput_ok" |> doSimpleBind "click" handleLine;
  jquery "#lineinput_cancel" |> doSimpleBind "click" hideModals;
end
