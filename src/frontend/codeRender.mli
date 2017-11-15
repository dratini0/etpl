open Language
open Position

val posToId: position -> string
val renderValue: value -> Jquery.jquery
val renderExpression: expression -> position option -> (expression -> position option -> Jquery.jquery -> Jquery.jquery) -> Jquery.jquery
val emptySpecialCasingFunction: expression -> position option -> Jquery.jquery -> Jquery.jquery
