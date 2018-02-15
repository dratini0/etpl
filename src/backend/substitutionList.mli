open Language

type t

val emptySubstitutionList: t
val newFreeVariable: t -> int * t
val addSubstitution: int -> etplType -> t -> t
val findSubstitution: int -> t -> etplType option
val mapSubstitutions: (etplType -> etplType) -> t -> t
