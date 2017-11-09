open Language
open Position

val inferType : expression -> etplType
val fitsHole : expression -> position -> expression -> bool
val whatFits : expression -> position -> expression list
