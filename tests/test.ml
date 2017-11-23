open InfiniteJest
open InfiniteJest.Test

open Language
open PrettyPrint
open Interpreter
open Serialize
open Position
open TreeManipulation

let resolveOrFail = function
  | Some(x) -> x
  | None -> raise (Failure "resolveOrFail")
  
let interpreterTestCasesPositive = [
  BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi)),  
  "BinaryOp,Sub,BinaryOp,Div,Literal,Number,22,Literal,Number,7,Constant,Pi",
  "Sub(Div(22., 7.), Pi)",
  Number(0.0012644892673496777)
  ;
  BinaryOp(CharAt, Literal(String("asd,fgh")), Literal(Number(0.))),  
  "BinaryOp,CharAt,Literal,String,2,asd,fgh,Literal,Number,0",
  "CharAt(\"asd,fgh\", 0.)",
  String("a")
  ;
  BinaryOp(Add, BinaryOp(Mul, Constant(Pi), Constant(Pi)), UnaryOp(Strlen, Literal(String({js|Árvíztűrő tükörfúrógép|js})))),
  {js|BinaryOp,Add,BinaryOp,Mul,Constant,Pi,Constant,Pi,UnaryOp,Strlen,Literal,String,1,Árvíztűrő tükörfúrógép|js},
  {js|Add(Mul(Pi, Pi), Strlen("Árvíztűrő tükörfúrógép"))|js},
  Number(31.869604401089358)
  ;
  BinaryOp(SHead, Literal(String({js|Árvíztűrő tükörfúrógép|js})), Literal(Number(5.))),
  {js|BinaryOp,SHead,Literal,String,1,Árvíztűrő tükörfúrógép,Literal,Number,5|js},
  {js|SHead("Árvíztűrő tükörfúrógép", 5.)|js},
  String({js|Árvíz|js})
  ;
  BinaryOp(SHead, Literal(String({js|Árvíztűrő tükörfúrógép|js})), Literal(Number(5.))),
  {js|BinaryOp,SHead,Literal,String,1,Árvíztűrő tükörfúrógép,Literal,Number,5|js},
  {js|SHead("Árvíztűrő tükörfúrógép", 5.)|js},
  String({js|Árvíz|js})
  ;
  BinaryOp(Sub, UnaryOp(NumOfString, Literal(String("3.1415926535897932384626433832795"))), Constant(Pi)),
  "BinaryOp,Sub,UnaryOp,NumOfString,Literal,String,1,3.1415926535897932384626433832795,Constant,Pi",
  "Sub(NumOfString(\"3.1415926535897932384626433832795\"), Pi)",
  Number(0.)
  ;
  UnaryOp(Ln, UnaryOp(NumOfString, Literal(String("2.7182818284590452353602874")))),
  "UnaryOp,Ln,UnaryOp,NumOfString,Literal,String,1,2.7182818284590452353602874",
  "Ln(NumOfString(\"2.7182818284590452353602874\"))",
  Number(1.)
  ;
  UnaryOp(StringOfNum, UnaryOp(Ln, Literal(Number(2.7182818284590452353602874)))),
  "UnaryOp,StringOfNum,UnaryOp,Ln,Literal,Number,2.7182818284590451",
  "StringOfNum(Ln(2.71828182846))",
  String("1")
  ;
]

let interpreterTestCasesNegative = [
  BinaryOp(Sub, BinaryOp(Div, Hole, Literal(Number(7.))), Constant(Pi)),  
  "BinaryOp,Sub,BinaryOp,Div,Hole,Literal,Number,7,Constant,Pi",
  "Sub(Div([], 7.), Pi)",
  "Programs with holes in them are not well typed",
  Hole,
  [0; 0]
  ;
]

let interpreterTestCasesAll =
  (List.map (fun (tree, serialized, pretty, _) -> (tree, serialized, pretty)) interpreterTestCasesPositive) @
  (List.map (fun (tree, serialized, pretty, _, _, _) -> (tree, serialized, pretty)) interpreterTestCasesNegative)

let prettyPrintTests =
  describe "Pretty print" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, _, pretty) ->
    test pretty (fun() ->
      prettyPrintExpression tree |> Expect.toEqual pretty)
    )
  )

let serializeTests =
  describe "Serialize" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, serialized, pretty) ->
    test pretty (fun() ->
      serialize tree |> Expect.toEqual serialized)
    )
  )

let deserializeTests =
  describe "Deserialize" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, serialized, pretty) ->
    test pretty (fun() ->
      deserialize serialized |> Expect.toEqual tree)
    )
  )

let evaluateTestsPositive =
  describe "Evaluate - no error" (fun () -> interpreterTestCasesPositive |> List.map (fun (tree, _, pretty, result) ->
    test pretty (fun() ->
      evaluate tree |> Expect.toEqual result)
    )
  )

let evaluateTestsNegative =
  describe "Evaluate - runtime exception" (fun () -> interpreterTestCasesNegative |> List.map (fun (tree, _, pretty, message, expression, position) ->
    test pretty (fun() ->
      (try let _ = evaluate tree in None
      with RuntimeException(actualMessage, State(actualExpression, actualPosition))
        -> Some(actualMessage, actualExpression, list_of_pos actualPosition))
       |> Expect.toEqual (Some(message, expression, position)))
    )
  )

let holeTest = BinaryOp(Sub, BinaryOp(Div, Hole, Hole), Hole)
let treeManipulationExample = BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi))

let treeManipulationTests =

  describe "TreeManipulation" (fun () -> [
  
    test "GetSubtree" (fun () ->
      getSubtree treeManipulationExample (pos_of_list [1]) |> Expect.toEqual (Constant(Pi))
    );

    test "ReplaceSubtree" (fun () ->
      replaceSubtree treeManipulationExample (pos_of_list [0]) Hole |> Expect.toEqual (BinaryOp(Sub, Hole, Constant(Pi)))
    );

    test "FirstHoleTrivial" (fun () ->
      firstHole Hole |> resolveOrFail |> list_of_pos |> Expect.toEqual []
    );

    test "FirstHoleNegative" (fun () ->
      firstHole treeManipulationExample |> Expect.toEqual None
    );

    test "FirstHole" (fun () ->
      firstHole holeTest |> resolveOrFail |> list_of_pos |> Expect.toEqual [0; 0]
    );

    test "FirstHoleRight" (fun () ->
      firstHole (BinaryOp(Mul, Constant Pi, Hole)) |> resolveOrFail |> list_of_pos |> Expect.toEqual [1]
    );

    test "NextHoleNegative" (fun () ->
      firstHole treeManipulationExample |> Expect.toEqual None
    );

    test "NextHole" (fun () ->
      BatList.unfold emptyPosition 
        (fun pos -> 
          match nextHole holeTest pos with
            | None -> None
            | Some result -> Some(result, result))
        |> List.map list_of_pos
        |> Expect.toEqual [[0; 0]; [0; 1]; [1]]
    );

])

let _ = 
  run [prettyPrintTests; serializeTests; deserializeTests; evaluateTestsPositive; evaluateTestsNegative; treeManipulationTests]