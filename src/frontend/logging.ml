(*
 * logging.ml
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

open Language
open Position
open DomManipulation
open ProgrammingState
open JquerySafe

open Dom.Storage

(* Ajax-related stuff should go to bucklescript-jquery *)
type ajaxConfig
type jqXHR

type token = Token of string * string
type signinRecord = {userAgent: string; width: float; height: float; revision: string}
type stateRecord = {program: expression; hole: position option; clipboard: expression list}
type buttonPressRecord = {buttonNumber: int; expression: expression; hole: position option}
type replaceSubtreeRecord = {expression: expression; position: position; newHole: position option}
type holeSelectRecord = {oldHole: position option; newHole: position}
type clipboardCutCopyRecord = {copy: bool; expression: expression; position: position; oldHole: position option; newHole: position option}
type clipboardPasteRecord = {number: int; expression: expression; hole: position option}
type clipboardDeleteRecord = {number: int; expression: expression}
type successfulExecutionRecord = {result: expression}
type runtimeExceptionRecord = {message: string; expression: expression; location: position}
type pageChangeRecord = {next: bool; newStart: int}
type arrayAddRecord = {first: bool; position: position}
type arrayDeleteRecord = {index: int; position: position}
type renameVariableRecord = {position: position; index: int; newName: string}
type logEvent =
  | ESignin of signinRecord
  | EState of stateRecord
  | EButtonPress of buttonPressRecord
  | EReplaceSubtree of replaceSubtreeRecord
  | EHoleSelect of holeSelectRecord
  | EClipboardCutCopy of clipboardCutCopyRecord
  | EClipboardPaste of clipboardPasteRecord
  | EClipboardDelete of clipboardDeleteRecord
  | ESuccessfulExecution of successfulExecutionRecord
  | ERuntimeException of runtimeExceptionRecord
  | EPageChange of pageChangeRecord
  | EArrayAdd of arrayAddRecord
  | EArrayDelete of arrayDeleteRecord
  | ERenameVariable of renameVariableRecord
type logRecord = {timestamp: float; seq: int; event: logEvent}

external makeAjaxConfig : 
  ?contentType: string ->
  ?data: string ->
  ?dataType: string ->
  ?jsonp: Js.boolean ->
  ?method__string: string ->
  ?success: (Js.Json.t -> string -> jqXHR -> unit) ->
  ?timeout: float ->
  ?url: string ->
  ?error: (jqXHR -> string -> string Js.undefined -> unit) ->
  unit -> ajaxConfig = "" [@@bs.obj]

external ajax: ajaxConfig -> jqXHR = "" [@@bs.module "jquery"]

external responseText: jqXHR -> string = "" [@@bs.get] 

external userAgent: string = "" [@@bs.val] [@@bs.scope "navigator"]
external innerWidth: float = "" [@@bs.val] [@@bs.scope "window"]
external innerHeight: float = "" [@@bs.val] [@@bs.scope "window"]

let api = "http://bk372.user.srcf.net/etplLog"
let timeout = 10000.
let cooldown = 10000.

let enabled = ref false
let seqCounter = ref 0
let queue = ref []
let currentToken = ref None
let inFlight = ref false
let lastSubmit = ref 0.

let positionCodec = let open JsonCodec in
  wrap
    (fun position -> position |> list_of_pos)
    (fun positionArray -> positionArray |> pos_of_list)
    (list int)

let expressionCodec = let open JsonCodec in
  wrap
    Serialize.serialize
    Serialize.deserialize
    string

let clipboardCodec = let open JsonCodec in
  wrap
    (fun clipboard -> clipboard |> List.map Serialize.serialize)
    (fun clipbardArray -> clipbardArray |> List.map Serialize.deserialize)
    (list string)

let signinCodec = let open JsonCodec in
  wrap
    (fun {userAgent=u; width=w; height=h; revision=r} -> ((), u, w, h, r))
    (fun ((), u, w, h, r) -> {userAgent=u; width=w; height=h; revision=r})
    (object5
      (field "tagSignin" null)
      (field "userAgent" string)
      (field "width" number)
      (field "height" number)
      (field "revision" string))
      
let stateCodec = let open JsonCodec in
  wrap
    (fun {program=pr; hole=pos; clipboard=c} -> ((), pr, pos, c))
    (fun ((), pr, pos, c) -> {program=pr; hole=pos; clipboard=c})
    (object4
      (field "tagState" null)
      (field "expression" expressionCodec)
      (field "hole" (nullable positionCodec))
      (field "clipboard" clipboardCodec))

let buttonPressCodec = let open JsonCodec in
  wrap
    (fun {buttonNumber=n; expression=e; hole=h} -> ((), n, e, h))
    (fun ((), n, e, h) -> {buttonNumber=n; expression=e; hole=h})
    (object4
      (field "tagButtonPress" null)
      (field "buttonNumber" int)
      (field "experssion" expressionCodec)
      (field "hole" (nullable positionCodec)))

let replaceSubtreeCodec = let open JsonCodec in
  wrap
    (fun ({expression=e; position=h; newHole=n}:replaceSubtreeRecord) -> ((), e, h, n))
    (fun ((), e, h, n) -> {expression=e; position=h; newHole=n})
    (object4
      (field "tagReplaceSubtree" null)
      (field "expression" expressionCodec)
      (field "hole" positionCodec)
      (field "newHole" (nullable positionCodec)))

let holeSelectCodec = let open JsonCodec in
  wrap
  (fun ({oldHole=o; newHole=n}:holeSelectRecord) -> ((), o, n))
    (fun ((), o, n) -> {oldHole=o; newHole=n})
    (object3
      (field "tagHoleSelect" null)
      (field "oldHole" (nullable positionCodec))
      (field "newHole" positionCodec))

let clipboardCutCopyCodec = let open JsonCodec in
  wrap
    (fun {copy=c; expression=e; position=p; oldHole=o; newHole=n} -> ((), c, e, p, o, n))
    (fun ((), c, e, p, o, n) -> {copy=c; expression=e; position=p; oldHole=o; newHole=n})
    (object6
      (field "tagClipboardCopyCut" null)
      (field "copy" bool)
      (field "expression" expressionCodec)
      (field "position" positionCodec)
      (field "oldHole" (nullable positionCodec))
      (field "newHole" (nullable positionCodec)))

let clipboardPasteCodec = let open JsonCodec in
  wrap
    (fun {number=n; expression=e; hole=h} -> ((), n, e, h))
    (fun ((), n, e, h) -> {number=n; expression=e; hole=h})
    (object4
      (field "tagClipboardPaste" null)
      (field "number" int)
      (field "expression" expressionCodec)
      (field "hole" (nullable positionCodec)))

let clipboardDeleteCodec = let open JsonCodec in
  wrap
    (fun {number=n; expression=e} -> ((), n, e))
    (fun ((), n, e) -> {number=n; expression=e})
    (object3
      (field "tagClipboardDelete" null)
      (field "number" int)
      (field "expression" expressionCodec))

let successfulExecutionCodec = let open JsonCodec in
  wrap
    (fun {result=r} -> ((), r))
    (fun ((), r) -> {result=r})
    (object2
      (field "tagSuccessfulExecution" null)
      (field "result" expressionCodec))

let runtimeExceptionCodec = let open JsonCodec in
  wrap
    (fun {message=m; expression=e; location=l} -> ((), m, e, l))
    (fun ((), m, e, l) -> {message=m; expression=e; location=l})
    (object4
      (field "tagRuntimeException" null)
      (field "message" string)
      (field "expression" expressionCodec)
      (field "location" positionCodec))

let pageChangeCodec = let open JsonCodec in
  wrap
    (fun {next=n; newStart=s} -> ((), n, s))
    (fun ((), n, s) -> {next=n; newStart=s})
    (object3
      (field "tagPageChange" null)
      (field "next" bool)
      (field "newStart" int))

let arrayAddCodec = let open JsonCodec in
  wrap
    (fun {first=f; position=p} -> ((), f, p))
    (fun ((), f, p) -> {first=f; position=p})
    (object3
      (field "tagArrayAdd" null)
      (field "first" bool)
      (field "position" positionCodec))

let arrayDeleteCodec = let open JsonCodec in
  wrap
    (fun ({index=i; position=p}:arrayDeleteRecord) -> ((), i, p))
    (fun ((), i, p) -> {index=i; position=p})
    (object3
      (field "tagArrayDelete" null)
      (field "index" int)
      (field "position" positionCodec))    

let renameVariableCodec = let open JsonCodec in
  wrap
    (fun {position=p; index=i; newName=n} -> ((), p, i, n))
    (fun ((), p, i, n) -> {position=p; index=i; newName=n})
    (object4
      (field "tagRenameVariable" null)
      (field "position" positionCodec)
      (field "index" int)
      (field "newName" string))

let logEventCodec = let open JsonCodec in let open JsonCodec.Xor in
  wrap
  (function
    | ESignin x -> Left(x)
    | EState x -> Right(Left(x))
    | EButtonPress x -> Right(Right(Left(x)))
    | EReplaceSubtree x -> Right(Right(Right(Left(x))))
    | EHoleSelect x -> Right(Right(Right(Right(Left(x)))))
    | EClipboardCutCopy x -> Right(Right(Right(Right(Right(Left(x))))))
    | EClipboardPaste x -> Right(Right(Right(Right(Right(Right(Left(x)))))))
    | EClipboardDelete x -> Right(Right(Right(Right(Right(Right(Right(Left(x))))))))
    | ESuccessfulExecution x -> Right(Right(Right(Right(Right(Right(Right(Right(Left(x)))))))))
    | ERuntimeException x -> Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x))))))))))
    | EPageChange x -> Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x)))))))))))
    | EArrayAdd x -> Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x))))))))))))
    | EArrayDelete x -> Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x)))))))))))))
    | ERenameVariable x -> Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(x)))))))))))))
    )
  (function
    | Left(x) -> ESignin x
    | Right(Left(x)) -> EState x
    | Right(Right(Left(x))) -> EButtonPress x
    | Right(Right(Right(Left(x)))) -> EReplaceSubtree x
    | Right(Right(Right(Right(Left(x))))) -> EHoleSelect x
    | Right(Right(Right(Right(Right(Left(x)))))) -> EClipboardCutCopy x
    | Right(Right(Right(Right(Right(Right(Left(x))))))) -> EClipboardPaste x
    | Right(Right(Right(Right(Right(Right(Right(Left(x)))))))) -> EClipboardDelete x
    | Right(Right(Right(Right(Right(Right(Right(Right(Left(x))))))))) -> ESuccessfulExecution x
    | Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x)))))))))) -> ERuntimeException x
    | Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x))))))))))) -> EPageChange x
    | Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x)))))))))))) -> EArrayAdd x
    | Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Left(x))))))))))))) -> EArrayDelete x
    | Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(Right(x))))))))))))) -> ERenameVariable x
    )
  (xor signinCodec
  (xor stateCodec
  (xor buttonPressCodec
  (xor replaceSubtreeCodec
  (xor holeSelectCodec
  (xor clipboardCutCopyCodec
  (xor clipboardPasteCodec
  (xor clipboardDeleteCodec
  (xor successfulExecutionCodec
  (xor runtimeExceptionCodec
  (xor pageChangeCodec
  (xor arrayAddCodec
  (xor arrayDeleteCodec renameVariableCodec)))))))))))))

let logRecordCodec = let open JsonCodec in
  wrap
  (fun {timestamp=t; seq=s; event=e} -> (t, s, e))
  (fun (t, s, e) -> {timestamp=t; seq=s; event=e})
  (object3
    (field "timestamp" number)
    (field "seq" int)
    (field "event" logEventCodec))

let recordCodec = let open JsonCodec in
  object3
    (field "aud" string)
    (field "token" string)
    (field "data" (list logRecordCodec))

let getTokenCodec = let open JsonCodec in
  object4
    (field "aud" string)
    (field "token" string)
    (field "iat" number)
    (field "exp" number)

let errorCodec = let open JsonCodec in
  object2
    (field "code" int)
    (optional "error" string)

let reportCodec = let open JsonCodec in
  object3
    (field "code" int)
    (optional "error" string)
    (optional "statuses" (list errorCodec))

let getToken success failure =
  ajax (makeAjaxConfig
    ~url: (api ^ "/token")
    ~dataType: "json"
    ~timeout: timeout
    ~jsonp: Js.false_
    ~success: (fun result _ _ ->
      match JsonCodec.decode getTokenCodec result with
        | Js.Result.Ok (aud, token, _, _) -> success (Token(aud, token))
        | Js.Result.Error error -> failure error
    )
    ~error: (fun _ message httpMessage ->
      match Js.Undefined.to_opt httpMessage with
        | Some httpMessage -> failure (message ^ " " ^ httpMessage)
        | None -> failure message
    )
    ()) |> ignore

let record token items success failure =
  let Token(aud, token) = token in
  ajax (makeAjaxConfig
    ~url: (api ^ "/record")
    ~method__string: "POST"
    ~contentType: "application/json"
    ~dataType: "json"
    ~timeout: timeout
    ~jsonp: Js.false_
    ~data: (JsonCodec.encodeJson recordCodec (aud, token, items))
    ~success: (fun response _ _ -> success (
      match JsonCodec.decode reportCodec response with
        | Js.Result.Ok (_, _, None) -> success ()
        | Js.Result.Ok (_, _, Some responses) -> failure(Some(List.map (
          function
            | 200, _ -> true
            | _ -> false
        ) responses))
        | Js.Result.Error _ -> failure None
    ))
    ~error: (fun xhr _ _ ->
      match xhr |> responseText |> JsonCodec.decodeJson reportCodec with
      (* I should have been using 207 for this, but whatever *)
      | Js.Result.Ok (_, _, Some responses) -> failure(Some(List.map (
        function
          | 200, _ -> true
          | _ -> false
      ) responses))
      | Js.Result.Ok _
      | Js.Result.Error _ -> failure None
    )
    ()
  ) |> ignore

let timestamp () = Js.Date.now() /. 1000.

let rec sumbit () = match !currentToken, !queue with
  | None, _
  | _, [] -> inFlight := false
  | Some token, queueItems -> begin
    queue := [];
    lastSubmit := Js.Date.now();
    record token queueItems (fun () -> 
      inFlight := false;
      scheduleSubmit ();
    ) (fun report ->
      let recycle = match report with
        | None -> queueItems
        | Some report -> List.combine report queueItems |> List.filter (fun(x, _) -> not x) |> List.map snd
      in
      queue := recycle @ !queue;
      inFlight := false;
      scheduleSubmit ();
    );
    ()
  end

and scheduleSubmit () =
  if not !inFlight then begin
    Js.Global.setTimeout sumbit (int_of_float(max (cooldown +. !lastSubmit -. Js.Date.now()) 0.)) |> ignore;
    inFlight := true
  end

let enque item =
  if !enabled then begin
    seqCounter := !seqCounter + 1;
    queue := {timestamp=timestamp(); seq=(!seqCounter); event=item}::!queue;
    scheduleSubmit ();
  end

let signin () = enque (ESignin{userAgent=userAgent; width=innerWidth; height=innerHeight; revision=Revision.gitRevision})

let logState () = enque (EState {program=(getCurrentProgram()); hole=(getCurrentHole ()); clipboard=(getClipboard ())})

let disable manual = begin
  enabled := false;
  queue := [];
  PanelDebugLog.log "Disabled";
  if manual then localStorage |> removeItem "loggingEnabled";
end

let enable () = begin
  getToken (fun newToken -> begin
    currentToken := Some newToken;
    PanelDebugLog.log "Enabled";
    scheduleSubmit ();
  end) (fun error -> begin
    PanelDebugLog.log error;
    disable false;
  end);
  enabled := true;
  localStorage |> setItem "loggingEnabled" "1";
  signin();
  logState();
end

let toggle () =
  if !enabled then disable true else enable()

let init() = begin
  jquery "#logging" |> doSimpleBind "click" toggle;
  match localStorage |> getItem "loggingEnabled" with
    | Some _ -> enable()
    | None -> ();
end
