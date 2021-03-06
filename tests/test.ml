(*
 * test.ml
 * Copyright 2017-2018 Balint Kovacs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *)

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
open Revision

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
  Literal(Pair(Number(1.), String("asd"))), 
  "Literal,Pair,Number,1,String,1,asd",
  "(1., \"asd\")",
  TPair(TNumber,TString),
  Pair(Number(1.), String("asd"))
  ;
  Literal(Array([|Number(1.); Number(2.)|])), 
  "Literal,Array,2,Number,1,Number,2",
  "[1., 2.]",
  TArray(TNumber),
  Array([|Number(1.); Number(2.)|]) 
  ;
  NAryOp(ArrayForm, [], 0, []),
  "NAryOp,ArrayForm,0",
  "ArrayForm()",
  TArray(FTV 0),
  Array [||]
  ;
  NAryOp(ArrayForm, [BinaryOp(Pair, Constant Pi, Literal(String "pi")); BinaryOp(Pair, Literal(Number 2.), Literal(String "two"))], 0, []),
  "NAryOp,ArrayForm,2,BinaryOp,Pair,Constant,Pi,Literal,String,1,pi,BinaryOp,Pair,Literal,Number,2,Literal,String,1,two",
  "ArrayForm(Pair(Pi, \"pi\"), Pair(2., \"two\"))",
  TArray(TPair(TNumber, TString)),
  Array [|Pair(Number 3.1415926535897932384626433832795, String "pi"); Pair(Number 2., String "two")|]
  ;
  NAryOp(ArrayForm, [NAryOp(ArrayForm, [Literal (Number 5.)], 0, [])], 0, []),
  "NAryOp,ArrayForm,1,NAryOp,ArrayForm,1,Literal,Number,5",
  "ArrayForm(ArrayForm(5.))",
  TArray (TArray TNumber),
  Array[|Array[|Number 5.|]|]
  ;
  Let("ETPL", Literal(Number 1.), Variable "ETPL"),
  "Let,1,ETPL,Literal,Number,1,Variable,1,ETPL",
  "let ETPL = (1.) in (ETPL)",
  TNumber,
  Number 1.
  ;
  Let("ETPL", Literal(Number 1.), Let("ETPL", Literal(String "test"), Variable "ETPL")),
  "Let,1,ETPL,Literal,Number,1,Let,1,ETPL,Literal,String,1,test,Variable,1,ETPL",
  "let ETPL = (1.) in (let ETPL = (\"test\") in (ETPL))",
  TString,
  String "test"
  ;
  Let("a", Literal(Number 1.), Let("b", Literal(String "test"), BinaryOp(Concat, UnaryOp(StringOfNum, Variable "a"), Variable "b"))),
  "Let,1,a,Literal,Number,1,Let,1,b,Literal,String,1,test,BinaryOp,Concat,UnaryOp,StringOfNum,Variable,1,a,Variable,1,b",
  "let a = (1.) in (let b = (\"test\") in (Concat(StringOfNum(a), b)))",
  TString,
  String "1test"
  ;
  BinaryOp(Apply, Function(None, "x", None, BinaryOp(Add, Variable "x", Literal(Number 1.))), Literal(Number 2.)),
  "BinaryOp,Apply,Function,1,x,BinaryOp,Add,Variable,1,x,Literal,Number,1,Literal,Number,2",
  "Apply(fun x -> (Add(x, 1.)), 2.)",
  TNumber,
  Number 3.
  ;
  Let("f", Let("y", Literal(Number 5.), Function(None, "x", None, BinaryOp(Add, Variable "x", Variable "y"))), BinaryOp(Apply, Variable "f", Literal(Number 7.))),
  "Let,1,f,Let,1,y,Literal,Number,5,Function,1,x,BinaryOp,Add,Variable,1,x,Variable,1,y,BinaryOp,Apply,Variable,1,f,Literal,Number,7",
  "let f = (let y = (5.) in (fun x -> (Add(x, y)))) in (Apply(f, 7.))",
  TNumber,
  Number 12.
  ;
  Let("f", Let("x", Literal(Number 5.), Function(None, "x", None, Variable "x")), BinaryOp(Apply, Variable "f", Literal(Number 7.))),
  "Let,1,f,Let,1,x,Literal,Number,5,Function,1,x,Variable,1,x,BinaryOp,Apply,Variable,1,f,Literal,Number,7",
  "let f = (let x = (5.) in (fun x -> (x))) in (Apply(f, 7.))",
  TNumber,
  Number 7.
  ;
  (* Polymorphic functions are still not completely implemented
  Let("id", Function(None, "x", Some(GTV 0), Variable("x")), BinaryOp(Pair, BinaryOp(Apply, Variable "id", Literal(Number 1.)), BinaryOp(Apply, Variable "id", Literal(String "ETPL")))),
  "Let,1,id,Function,1,x,Variable,1,x,BinaryOp,Pair,BinaryOp,Apply,Variable,1,id,Literal,Number,1,BinaryOp,Apply,Variable,1,id,Literal,String,1,ETPL",
  "let id = (fun x -> (x)) in (Pair(Apply(id, 1.), Apply(id, \"ETPL\")))",
  TPair(TNumber, TString),
  Pair(Number 1., String "ETPL")
  ;
  *)
  If(BinaryOp(GTEQ, Constant Pi, Literal(Number 1.)), Literal(String "Kittens"), Hole),
  "If,BinaryOp,GTEQ,Constant,Pi,Literal,Number,1,Literal,String,1,Kittens,Hole",
  "if (GTEQ(Pi, 1.)) then (\"Kittens\") else ([])",
  TString,
  String "Kittens"
  ;
  If(Literal(Bool false), Literal(String "Kittens"), Literal(String "Puppies")),
  "If,Literal,False,Literal,String,1,Kittens,Literal,String,1,Puppies",
  "if (False) then (\"Kittens\") else (\"Puppies\")",
  TString,
  String "Puppies"
  ;
  Let("fac", 
    Function(Some "fac", "n", None, 
      If(BinaryOp(GTEQ, Variable "n", Literal(Number 1.)),
        BinaryOp(Mul, Variable "n", BinaryOp(Apply, Variable "fac", BinaryOp(Sub, Variable "n", Literal(Number 1.)))),
        Literal(Number 1.)
      )
    ),
    BinaryOp(Apply, Variable "fac", Literal(Number 6.))),
  "Let,1,fac,RecFun,1,fac,1,n,If,BinaryOp,GTEQ,Variable,1,n,Literal,Number,1,BinaryOp,Mul,Variable,1,n,BinaryOp,Apply,Variable,1,fac,BinaryOp,Sub,Variable,1,n,Literal,Number,1,Literal,Number,1,BinaryOp,Apply,Variable,1,fac,Literal,Number,6",
  "let fac = (fun (rec: fac) n -> (if (GTEQ(n, 1.)) then (Mul(n, Apply(fac, Sub(n, 1.)))) else (1.))) in (Apply(fac, 6.))",
  TNumber,
  Number 720.
  ;
  BinaryOp(Repeat, Literal(Number 5.), Function(None, "i", None, Variable "i")),
  "BinaryOp,Repeat,Literal,Number,5,Function,1,i,Variable,1,i",
  "Repeat(5., fun i -> (i))",
  TArray TNumber,
  Array [|Number 0.; Number 1.; Number 2.; Number 3.; Number 4.;|]
  ;
  BinaryOp(For, NAryOp(ArrayForm, [Literal(Number 5.); Literal(Number 4.); Literal(Number 3.); Literal(Number 2.); Literal(Number 1.); ], 0, []), Function(None, "i", None, Function(None, "e", None, BinaryOp(Add, Variable "i", Variable "e")))),
  "BinaryOp,For,NAryOp,ArrayForm,5,Literal,Number,5,Literal,Number,4,Literal,Number,3,Literal,Number,2,Literal,Number,1,Function,1,i,Function,1,e,BinaryOp,Add,Variable,1,i,Variable,1,e",
  "For(ArrayForm(5., 4., 3., 2., 1.), fun i -> (fun e -> (Add(i, e))))",
  TArray TNumber,
  Array [|Number 5.; Number 5.; Number 5.; Number 5.; Number 5.;|]
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
  Let("ETPL", Literal(Number 1.), Variable "something"),
  "Let,1,ETPL,Literal,Number,1,Variable,1,something",
  "let ETPL = (1.) in (something)",
  None,
  "Unbound variable something",
  Variable "something",
  [1]
  ;
  If(Constant Pi, Hole, Hole),
  "If,Constant,Pi,Hole,Hole",
  "if (Pi) then ([]) else ([])",
  None,
  "Program is not well-typed: conditional used with argument of type Number",
  If(Literal(Number 3.1415926535897932384626433832795), Hole, Hole),
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
      serialize tree |> Expect.toEqual (gitRevision ^ "," ^ serialized))
    )
  )

let deserializeTests =
  describe "Deserialize" (fun () -> interpreterTestCasesAll |> List.map (fun (tree, serialized, pretty, _) ->
    test pretty (fun() ->
      deserialize (gitRevision ^ "," ^ serialized) |> Expect.toEqual tree)
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
      inferTypeValue result |> typeName |> Expect.toEqual (type_ |> typeName))
    )
  )
  
let evaluateTestsNegative =
  describe "Evaluate - runtime exception" (fun () -> interpreterTestCasesNegative |> List.map (fun (tree, _, pretty, _, message, expression, position) ->
    test pretty (fun() ->
      (try let _ = evaluate tree in None
      with RuntimeException(actualMessage, State actualExpression, actualPosition)
        -> Some(actualMessage, actualExpression, list_of_pos actualPosition))
       |> Expect.toEqual (Some(message, expression, position)))
    )
  )

let holeTest = NAryOp(ArrayForm, [BinaryOp(Sub, BinaryOp(Div, Hole, Hole), Hole); Hole], 0, [])
let treeManipulationExample = BinaryOp(Sub, BinaryOp(Div, Literal(Number(22.)), Literal(Number(7.))), Constant(Pi))

let treeManipulationTests =

  describe "TreeManipulation" (fun () -> [
  
    test "GetSubtree" (fun () ->
      getSubtree treeManipulationExample (pos_of_list [1]) |> Expect.toEqual (Constant(Pi))
    );

    test "GetSubtreeNAry" (fun () -> 
      getSubtree holeTest (pos_of_list [1]) |> Expect.toEqual Hole
    );

    test "ReplaceSubtree" (fun () ->
      replaceSubtree treeManipulationExample (pos_of_list [0]) Hole |> Expect.toEqual (BinaryOp(Sub, Hole, Constant(Pi)))
    );

    test "ReplaceSubtreeNAry" (fun () ->
      replaceSubtree holeTest (pos_of_list [0]) (Constant Pi) |> Expect.toEqual (NAryOp(ArrayForm, [Constant Pi; Hole], 0, []))
    );

    test "FirstHoleTrivial" (fun () ->
      firstHole Hole |> resolveOrFail |> list_of_pos |> Expect.toEqual []
    );

    test "FirstHoleNegative" (fun () ->
      firstHole treeManipulationExample |> Expect.toEqual None
    );

    test "FirstHole" (fun () ->
      firstHole holeTest |> resolveOrFail |> list_of_pos |> Expect.toEqual [0; 0; 0]
    );

    test "FirstHoleRight" (fun () ->
      firstHole (BinaryOp(Mul, Constant Pi, Hole)) |> resolveOrFail |> list_of_pos |> Expect.toEqual [1]
    );

    test "NextHoleNegative" (fun () ->
      nextHole treeManipulationExample (pos_of_list [0]) |> Expect.toEqual None
    );

    test "NextHole" (fun () ->
      BatList.unfold emptyPosition 
        (fun pos -> 
          match nextHole holeTest pos with
            | None -> None
            | Some result -> Some(result, result))
        |> List.map list_of_pos
        |> Expect.toEqual [[0; 0; 0]; [0; 0; 1]; [0; 1]; [1]]
    );

    test "NextHoleRegression" (fun () ->
      let program = NAryOp(ArrayForm, [Constant Pi; BinaryOp(Add, Hole, Hole)], 0, []) in
      nextHole program (pos_of_list [1]) |> resolveOrFail |> list_of_pos |> Expect.toEqual [1;0]
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