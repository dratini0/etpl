open Language

exception RuntimeException of string * state
val nextStep: state -> state
val evaluateLoop: state -> state
val evaluate: expression -> expression
