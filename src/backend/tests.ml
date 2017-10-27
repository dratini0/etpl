open Language
open Interpreter
open Prettyprint

let exampleProgram = BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi))

let () = begin 
  print_endline (prettyPrintExpression exampleProgram);
  print_endline (prettyPrintValue (evaluate exampleProgram));
end
