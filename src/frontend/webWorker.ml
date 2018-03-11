(*
 * worker.ml
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

module type MessageTypes = sig
  type downstream
  type upstream
end

module MessageEvent = struct
  type 'a t
  external data: 'a t -> 'a = "" [@@bs.get]
  external origin: 'a t -> string = "" [@@bs.get]
  external lastEventId: 'a t -> string = "" [@@bs.get]
end

module DedicatedWorker (MT : MessageTypes) = struct
  type t
  external make: string -> t = "Worker" [@@bs.new]
  external postMessage: MT.downstream -> unit= "" [@@bs.send.pipe: t]
  external onMessage: t -> (MT.upstream MessageEvent.t -> unit) -> unit = "onmessage" [@@bs.set]
  let onMessageSimple worker handler = onMessage worker (fun e -> MessageEvent.data e |> handler)
  external terminate: unit = "" [@@bs.send.pipe: t]
end

module DedicatedWorkerGlobal (MT: MessageTypes): sig
  external postMessage: MT.upstream -> unit = "" [@@bs.val]
  val onMessage: (MT.downstream MessageEvent.t -> unit) -> unit
  val onMessageSimple: (MT.downstream -> unit) -> unit
end = struct
  type t
  external postMessage: MT.upstream -> unit = "" [@@bs.val]
  external self: t = "" [@@bs.val] 
  external _onMessage: t -> (MT.downstream MessageEvent.t -> unit) -> unit = "onmessage" [@@bs.set]
  let onMessage = _onMessage self
  let onMessageSimple handler = onMessage (fun e -> MessageEvent.data e |> handler)
end
