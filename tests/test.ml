open InfiniteJest
open InfiniteJest.Test

open Language
open PrettyPrint
open Interpreter
open Serialize
open ExampleProgram
open Position
open TreeManipulation

let resolveOrFail = function
  | Some(x) -> x
  | None -> raise (Failure "resolveOrFail")
  
let exampleProgramEncoded = "BinaryOp,Sub,BinaryOp,Div,Literal,Number,22,Literal,Number,7,Constant,Pi"

let holeTest = BinaryOp(Sub, BinaryOp(Div, Hole, Hole), Hole)

let interpreterTests =

  describe "Interpreter" (fun () -> [

    test "Pretty print" (fun () ->
      prettyPrintExpression exampleProgram |> Expect.toEqual "Sub(Div(22., 7.), Pi)");

    test "Evaluate" (fun () ->
      evaluate exampleProgram |> Expect.toEqual (Number(0.0012644892673496777)));

    test "Encode" (fun () ->
      serialize exampleProgram |> Expect.toEqual exampleProgramEncoded);

    test "Decode" (fun () ->
      deserialize exampleProgramEncoded |> Expect.toEqual exampleProgram);

])

let treeManipulationTests =

  describe "TreeManipulation" (fun () -> [
  
    test "GetSubtree" (fun () ->
      getSubtree exampleProgram (pos_of_list [1]) |> Expect.toEqual (Constant(Pi))
    );

    test "ReplaceSubtree" (fun () ->
      replaceSubtree exampleProgram (pos_of_list [0]) Hole |> Expect.toEqual (BinaryOp(Sub, Hole, Constant(Pi)))
    );

    test "FirstHoleTrivial" (fun () ->
      firstHole Hole |> resolveOrFail |> list_of_pos |> Expect.toEqual []
    );

    test "FirstHoleNegative" (fun () ->
      firstHole exampleProgram |> Expect.toEqual None
    );

    test "FirstHole" (fun () ->
      firstHole holeTest |> resolveOrFail |> list_of_pos |> Expect.toEqual [0; 0]
    );

    test "NextHoleNegative" (fun () ->
      firstHole exampleProgram |> Expect.toEqual None
    );

    (* test "NextHole" (fun () ->
      BatList.unfold emptyPosition 
        (fun pos -> 
          match nextHole holeTest pos with
            | None -> None
            | Some result -> Some(result, result))
        |> List.map list_of_pos
        |> Expect.toEqual [[0; 0]; [0; 1]; [1]]
    ); *)

])

let _ = 
  run [interpreterTests; treeManipulationTests]