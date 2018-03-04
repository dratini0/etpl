open Language

type typeNormalization
exception UnknownNameException of string
val emptyTypeNormalization: typeNormalization
val constantName: constant -> string
val unaryOperatorName: unaryOp -> string
val binaryOperatorName: binaryOp -> string
val ternaryOperatorName: ternaryOp -> string
val nAryOperatorName: nAryOp -> string
val typeNameInternal: typeNormalization -> etplType -> typeNormalization * string
val typeName: etplType -> string
val constantByName: string -> constant
val unaryOperatorByName: string -> unaryOp
val binaryOperatorByName: string -> binaryOp
val ternaryOperatorByName: string -> ternaryOp
val nAryOperatorByName: string -> nAryOp
