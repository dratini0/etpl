open Language
open Interpreter
open Prettyprint
open Serialize

let exampleProgram = BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi))

let () = begin 
  print_endline (prettyPrintExpression exampleProgram);
  print_endline (prettyPrintValue (evaluate exampleProgram));
  print_endline (serialize exampleProgram);
  print_endline (prettyPrintExpression(deserialize(serialize exampleProgram)));
end
