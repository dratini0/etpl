open Language
open Position

module Private: sig
  val currentProgram : expression ref
  val currentHole : position option ref
  val clipboard : expression list ref
end

val getCurrentHole: unit -> position option
val getCurrentProgram: unit -> expression
val getClipboard: unit -> expression list

