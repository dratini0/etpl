open Language
open Position

type t = Language.expression

exception UnknownPositionError of position

val replaceSubtree: expression -> position -> expression -> expression
val getSubtree: expression -> position -> expression
val firstHole: expression -> position option
val nextHole: expression -> position -> position option
