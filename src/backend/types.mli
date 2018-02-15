open Language
open Position
open SubstitutionList

val unify : SubstitutionList.t -> etplType -> etplType -> (SubstitutionList.t * etplType) option
val inferTypeValue : value -> etplType
val inferType : expression -> etplType option
val fitsHole : expression -> position -> expression -> bool
val whatFits : expression -> position -> expression list
