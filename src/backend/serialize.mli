open Language

exception DecodingUnderrunError
val serialize: expression -> string
val deserialize: string -> expression
