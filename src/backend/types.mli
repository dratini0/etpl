open Language
open Position

val inferTypeValue : value -> etplType
val inferType : expression -> etplType option
val fitsHole : expression -> position -> expression -> bool
val whatFits : expression -> position -> expression list
