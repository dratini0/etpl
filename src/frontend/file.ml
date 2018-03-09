type _baseClass

type 'a blob_like
type blob = _baseClass blob_like
type _file
type file = _file blob_like
type t = file
type 'a fileReader

type blobOptions
external blobOptions: ?_type:string -> unit -> blobOptions = "" [@@bs.obj]

external make: string array -> ?options:blobOptions -> unit -> blob = "Blob" [@@bs.new]
external concat: blob array -> ?options:blobOptions -> unit -> blob = "Blob" [@@bs.new]
external inputFiles: Dom.node -> file array = "files" [@@bs.get] (* how do we ensure? *)
external fileReader: unit -> string fileReader = "FileReader" [@@bs.new]
external readAsText: string fileReader -> 'a blob_like -> unit = "" [@@bs.send]
external result: 'a fileReader -> 'a = "" [@@bs.get]
external onLoad: 'a fileReader -> (unit -> unit) -> unit = "onload" [@@bs.set]
external onError: 'a fileReader -> (unit -> unit) -> unit = "onerror" [@@bs.set]

external saveAs: 'a blob_like -> string -> unit = "" [@@bs.module "FileSaver"]
