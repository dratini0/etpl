open Language
open Position

type t = Language.expression

exception UnknownPositionError of position
exception RefactorRenameShadowedError of position
exception RefactorRenameWouldShadowError of position

val replaceSubtree: expression -> position -> expression -> expression
val getSubtree: expression -> position -> expression
val firstHole: expression -> position option
val nextHole: expression -> position -> position option
val freeVariables: expression -> Set.Make(String).t
val renameVariable: position -> int -> string -> expression -> expression
