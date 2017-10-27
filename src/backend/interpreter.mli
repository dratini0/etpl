open Language

exception RuntimeException of string * state
val nextStep: state -> state
val evaluateLoop: state -> value
val evaluate: expression -> value
