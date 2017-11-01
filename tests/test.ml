open InfiniteJest
open InfiniteJest.Test

open Language
open Prettyprint
open Interpreter
open Serialize
open ExampleProgram

let exampleProgramEncoded = "BinaryOp,Sub,BinaryOp,Div,Literal,Number,22,Literal,Number,7,Constant,Pi"

let myTests =

  describe "Backend" (fun () -> [
  
    test "Pretty print" (fun () ->
      prettyPrintExpression exampleProgram |> Expect.toEqual "Sub(Div(22., 7.), Pi)");

    test "Evaluate" (fun () ->
      evaluate exampleProgram |> Expect.toEqual (Number(0.0012644892673496777)));

    test "Encode" (fun () ->
      serialize exampleProgram |> Expect.toEqual exampleProgramEncoded);

    test "Decode" (fun () ->
      deserialize exampleProgramEncoded |> Expect.toEqual exampleProgram);

  ])

let _ = 
  run [myTests]