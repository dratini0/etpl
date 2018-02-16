open InfiniteJest
open InfiniteJest.Test

open Language
open PrettyPrint
open Interpreter
open Serialize
open Position
open TreeManipulation
open Types
open Names
open SubstitutionList

let (>>=) = Option.bind

let resolveOrFail = function
  | Some(x) -> x
  | None -> raise (Failure "resolveOrFail")

let unificationTestCases = [
  FTV 0,
  TArray(FTV 1),
  Some(TArray(FTV 1))
  ;
  TString,
  TArray(FTV 0),
  None
  ;
  TArray(TNumber),
  TArray(TString),
  None
  ;
  TArray(TString),
  TArray(FTV 0),
  Some(TArray TString)
  ;
  TArray(FTV 0),
  FTV 0,
  None
  ;
  TPair(TString, TNumber),
  FTV 0,
  Some(TPair(TString, TNumber))
  ;
  TPair(TString, FTV 0),
  TPair(FTV 1, TNumber),
  Some(TPair(TString, TNumber))
  ;
  TPair(TString, FTV 0),
  TPair(FTV 0, TNumber),
  None
  ;
  TPair(TPair(FTV 0, FTV 0), FTV 1),
  TPair(TPair(FTV 0, FTV 1), FTV 1),
  Some(TPair(TPair(FTV 0, FTV 0), FTV 0))
  ;
  TPair(FTV 1, TPair(FTV 0, FTV 0)),
  TPair(TPair(FTV 0, FTV 0), FTV 1),
  Some(TPair(TPair(FTV 0, FTV 0), TPair(FTV 0, FTV 0)))
  ;
  TPair(FTV 0, TPair(FTV 0, FTV 0)),
  TPair(TPair(FTV 1, FTV 1), FTV 1),
  None
  ;
]

let interpreterTestCasesPositive = [
  BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi)),  
  "BinaryOp,Sub,BinaryOp,Div,Literal,Number,22,Literal,Number,7,Constant,Pi",
  "Sub(Div(22., 7.), Pi)",
  TNumber,
  Number(0.0012644892673496777)
  ;
  BinaryOp(CharAt, Literal(String("asd,fgh")), Literal(Number(0.))),  
  "BinaryOp,CharAt,Literal,String,2,asd,fgh,Literal,Number,0",
  "CharAt(\"asd,fgh\", 0.)",
  TString,
  String("a")
  ;
  BinaryOp(Add, BinaryOp(Mul, Constant(Pi), Constant(Pi)), UnaryOp(Strlen, Literal(String({js|Árvíztűrő tükörfúrógép|js})))),
  {js|BinaryOp,Add,BinaryOp,Mul,Constant,Pi,Constant,Pi,UnaryOp,Strlen,Literal,String,1,Árvíztűrő tükörfúrógép|js},
  {js|Add(Mul(Pi, Pi), Strlen("Árvíztűrő tükörfúrógép"))|js},
  TNumber,
  Number(31.869604401089358)
  ;
  BinaryOp(SHead, Literal(String({js|Árvíztűrő tükörfúrógép|js})), Literal(Number(5.))),
  {js|BinaryOp,SHead,Literal,String,1,Árvíztűrő tükörfúrógép,Literal,Number,5|js},
  {js|SHead("Árvíztűrő tükörfúrógép", 5.)|js},
  TString,
  String({js|Árvíz|js})
  ;
  BinaryOp(STail, Literal(String({js|Árvíztűrő tükörfúrógép|js})), Literal(Number(3.))),
  {js|BinaryOp,STail,Literal,String,1,Árvíztűrő tükörfúrógép,Literal,Number,3|js},
  {js|STail("Árvíztűrő tükörfúrógép", 3.)|js},
  TString,
  String({js|gép|js})
  ;
  BinaryOp(SHead, Literal(String("ETPL")), Literal(Number(0.))),
  "BinaryOp,SHead,Literal,String,1,ETPL,Literal,Number,0",
  "SHead(\"ETPL\", 0.)",
  TString,
  String("")
  ;
  BinaryOp(STail, Literal(String("ETPL")), Literal(Number(0.))),
  "BinaryOp,STail,Literal,String,1,ETPL,Literal,Number,0",
  "STail(\"ETPL\", 0.)",
  TString,
  String("")
  ;
  BinaryOp(SHead, Literal(String("ETPL")), Literal(Number(4.))),
  "BinaryOp,SHead,Literal,String,1,ETPL,Literal,Number,4",
  "SHead(\"ETPL\", 4.)",
  TString,
  String("ETPL")
  ;
  BinaryOp(STail, Literal(String("ETPL")), Literal(Number(4.))),
  "BinaryOp,STail,Literal,String,1,ETPL,Literal,Number,4",
  "STail(\"ETPL\", 4.)",
  TString,
  String("ETPL")
  ;
  BinaryOp(Sub, UnaryOp(NumOfString, Literal(String("3.1415926535897932384626433832795"))), Constant(Pi)),
  "BinaryOp,Sub,UnaryOp,NumOfString,Literal,String,1,3.1415926535897932384626433832795,Constant,Pi",
  "Sub(NumOfString(\"3.1415926535897932384626433832795\"), Pi)",
  TNumber,
  Number(0.)
  ;
  UnaryOp(Ln, UnaryOp(NumOfString, Literal(String("2.7182818284590452353602874")))),
  "UnaryOp,Ln,UnaryOp,NumOfString,Literal,String,1,2.7182818284590452353602874",
  "Ln(NumOfString(\"2.7182818284590452353602874\"))",
  TNumber,
  Number(1.)
  ;
  UnaryOp(StringOfNum, UnaryOp(Ln, Literal(Number(2.7182818284590452353602874)))),
  "UnaryOp,StringOfNum,UnaryOp,Ln,Literal,Number,2.7182818284590451",
  "StringOfNum(Ln(2.71828182846))",
  TString,
  String("1")
  ;
  BinaryOp(Pair, Literal(String("Pi")), Constant Pi),
  "BinaryOp,Pair,Literal,String,1,Pi,Constant,Pi",
  "Pair(\"Pi\", Pi)",
  TPair(TString, TNumber),
  Pair(String("Pi"), Number(3.1415926535897932384626433832795))
  ;
  UnaryOp(PairLeft, BinaryOp(Pair, Literal(String("Pi")), Constant Pi)),
  "UnaryOp,PairLeft,BinaryOp,Pair,Literal,String,1,Pi,Constant,Pi",
  "PairLeft(Pair(\"Pi\", Pi))",
  TString,
  String("Pi")
  ;
  UnaryOp(PairRight, BinaryOp(Pair, Literal(String("Pi")), Constant Pi)),
  "UnaryOp,PairRight,BinaryOp,Pair,Literal,String,1,Pi,Constant,Pi",
  "PairRight(Pair(\"Pi\", Pi))",
  TNumber,
  Number(3.1415926535897932384626433832795)
  ;
]

let interpreterTestCasesNegative = [
  BinaryOp(Sub, BinaryOp(Div, Hole, Literal(Number(7.))), Constant(Pi)),  
  "BinaryOp,Sub,BinaryOp,Div,Hole,Literal,Number,7,Constant,Pi",
  "Sub(Div([], 7.), Pi)",
  Some(TNumber),
  "Programs with holes in them can't be executed.",
  Hole,
  [0; 0]
  ;
  BinaryOp(SHead, Literal(String("ETPL")), Literal(Number(5.))),
  "BinaryOp,SHead,Literal,String,1,ETPL,Literal,Number,5",
  "SHead(\"ETPL\", 5.)",
  Some(TString),
  "Index out of range for SHead",
  BinaryOp(SHead, Literal(String("ETPL")), Literal(Number(5.))),
  []
  ;
  BinaryOp(STail, Literal(String("ETPL")), Literal(Number(5.))),
  "BinaryOp,STail,Literal,String,1,ETPL,Literal,Number,5",
  "STail(\"ETPL\", 5.)",
  Some(TString),
  "Index out of range for STail",
  BinaryOp(STail, Literal(String("ETPL")), Literal(Number(5.))),
  []
  ;
  UnaryOp(NumOfString, Literal(String("ETPL"))),
  "UnaryOp,NumOfString,Literal,String,1,ETPL",
  "NumOfString(\"ETPL\")",
  Some(TNumber),
  "String is not numeric",
  UnaryOp(NumOfString, Literal(String("ETPL"))),
  []
  ;
]

let interpreterTestCasesAll =
  (List.map (fun (tree, serialized, pretty, type_, _) -> (tree, serialized, pretty, Some(type_))) interpreterTestCasesPositive) @
  (List.map (fun (tree, serialized, pretty, type_, _, _, _) -> (tree, serialized, pretty, type_)) interpreterTestCasesNegative)

let unificaionTests = 
  describe "Unify" (fun () -> unificationTestCases |> List.map (fun (a, b, expected) ->
    let normalization, aname = typeNameInternal emptyTypeNormalization a in
    let _, bname = typeNameInternal normalization b in
    let expectedStr = expected >>= fun t -> Some(typeName t) in
    test (aname ^ " + " ^ bname ^ " = " ^ (Option.default "None" expectedStr)) (fun() ->
      unify emptySubstitutionList a b >>= (fun (_, type_) -> (Some(typeName type_))) |> Expect.toEqual expectedStr)
    )
  )

let prettyPrintTests =
  describe "Pretty print" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, _, pretty, _) ->
    test pretty (fun() ->
      prettyPrintExpression tree |> Expect.toEqual pretty)
    )
  )

let serializeTests =
  describe "Serialize" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, serialized, pretty, _) ->
    test pretty (fun() ->
      serialize tree |> Expect.toEqual serialized)
    )
  )

let deserializeTests =
  describe "Deserialize" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, serialized, pretty, _) ->
    test pretty (fun() ->
      deserialize serialized |> Expect.toEqual tree)
    )
  )

let inferTypeTests =
  describe "Type inference" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, _, pretty, type_) ->
    test pretty (fun() ->
      let type_String = Option.map typeName type_ in
      inferType tree |> (Option.map typeName) |> Expect.toEqual type_String)
    )
  )

let evaluateTestsPositive =
  describe "Evaluate - no error" (fun () -> interpreterTestCasesPositive |> List.map (fun (tree, _, pretty, _, result) ->
    test pretty (fun() ->
      evaluate tree |> Expect.toEqual result)
    )
  )

let typePreservationTests =
  describe "Type preservation" (fun () -> interpreterTestCasesPositive |> List.map (fun (_, _, pretty, type_, result) ->
    test pretty (fun() ->
      inferTypeValue result |> Expect.toEqual type_)
    )
  )
  
let evaluateTestsNegative =
  describe "Evaluate - runtime exception" (fun () -> interpreterTestCasesNegative |> List.map (fun (tree, _, pretty, _, message, expression, position) ->
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
  run [unificaionTests;
       prettyPrintTests;
       serializeTests;
       deserializeTests;
       evaluateTestsPositive;
       evaluateTestsNegative;
       treeManipulationTests;
       ]