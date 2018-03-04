(*
 * jquerySafe.ml
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

let jqueryMaybe selector =
  let result = Jquery.jquery selector in begin
    if result |> Jquery.length > 1 then begin
      [%bs.debugger];
      log (Printf.sprintf "jquerySome: Selector \"%s\" returned no elements" selector);
    end;
    result;
  end

let jqueryAny = Jquery.jquery

let jqueryN selector n =
  let result = Jquery.jquery selector in begin
    if result |> Jquery.length != n then begin
      [%bs.debugger];
      log (Printf.sprintf "jquerySome: Selector \"%s\" returned no elements" selector);
    end;
    result;
  end

