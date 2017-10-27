open Language

val inferType : expression -> etplType
val fitsHole : expression -> position -> expression -> bool
val whatFits : expression -> position -> expression list
