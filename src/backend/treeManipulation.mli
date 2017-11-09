open Language
open Position

exception UnknownPositionError of position

val replaceSubtree: expression -> position -> expression -> expression
