open Language
open Position

val getCurrentHole: unit -> position option
val setCurrentHole: position option -> unit
val replaceCurrentHole: expression -> unit
val replaceCurrentHoleWrapper: expression -> unit -> unit
val redraw: unit -> unit
val getCurrentProgram: unit -> expression
val setCurrentProgram: expression -> unit
val init: unit -> unit
