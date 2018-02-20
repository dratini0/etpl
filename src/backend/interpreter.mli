open Language
open Position

exception RuntimeException of string * state *  position
val nextStep: state -> state
val evaluateLoop: state -> value
val evaluate: expression -> value
