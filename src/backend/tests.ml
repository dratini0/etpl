open Language
open Interpreter
open Prettyprint

let exampleProgram = BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi))

let () = begin 
  print_endline (prettyPrintExpression exampleProgram);
  match (evalBinary (State(Constant(Pi))) Div (Number(22.)) (Number(7.))) with 
    State(e) -> print_endline (prettyPrintExpression e);
  print_endline (prettyPrintExpression (evaluate exampleProgram));
end
