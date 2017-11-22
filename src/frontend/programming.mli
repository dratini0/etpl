open Language
open Position

val getCurrentHole: unit -> position option
val getCurrentProgram: unit -> expression
val getClipboard: unit -> expression list

val setCurrentHole: position option -> unit
val replaceCurrentHole: expression -> unit
val redraw: unit -> unit
val setCurrentProgram: expression -> unit
val init: unit -> unit
