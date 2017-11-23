open Language
open Position
open TreeManipulation

let (>>=) = Option.bind

(* TODO: add some way of grouping these, because they will not always fit the screen *)
let insertableExpressions = [
  Literal(Number(0.));
  Literal(String "");
  Constant(Pi);
  UnaryOp(Ln, Hole);
  UnaryOp(Floor, Hole);
  UnaryOp(StringOfNum, Hole);
  UnaryOp(NumOfString, Hole);
  UnaryOp(Strlen, Hole);
  BinaryOp(Add, Hole, Hole);
  BinaryOp(Sub, Hole, Hole);
  BinaryOp(Mul, Hole, Hole);
  BinaryOp(Div, Hole, Hole);
  BinaryOp(SHead, Hole, Hole);
  BinaryOp(STail, Hole, Hole);
  BinaryOp(CharAt, Hole, Hole);
  BinaryOp(Concat, Hole, Hole);
]

let unify a b = match a, b with
  | FTV, FTV -> Some FTV
  | _, FTV -> Some a
  | FTV, _ -> Some b
  | _, _ -> if a = b then Some a else None

let inferTypeValue = function
  | Number _ -> TNumber
  | String _ -> TString

let inferTypeConstant = function
  | Pi -> TNumber

let unaryOpConstratints = function
  | Ln
  | Floor -> TNumber, TNumber
  | StringOfNum -> TString, TNumber
  | NumOfString -> TNumber, TString
  | Strlen -> TNumber, TString

let binaryOpConstratints = function
  | Add
  | Sub
  | Mul
  | Div -> TNumber, TNumber, TNumber
  | Concat -> TString, TString, TString
  | SHead
  | STail
  | CharAt -> TString, TString, TNumber

let rec inferType = function
  | Literal v -> Some (inferTypeValue v)
  | Constant(c) -> Some (inferTypeConstant c)
  | UnaryOp(o, e1) -> let r, t1 = unaryOpConstratints o in
      if Option.is_some(inferType e1 >>= unify t1) then Some r else None
  | BinaryOp(o, e1, e2) -> let r, t1, t2 = binaryOpConstratints o in
      if Option.is_some(inferType e1 >>= unify t1) && Option.is_some(inferType e2 >>= unify t2) then Some r else None
  | Hole -> Some FTV

(* TODO: we can do better *)
let fitsHole expression position subExpression =
  replaceSubtree expression position subExpression
  |> inferType
  |> Option.is_some

let whatFits expression position = List.filter (fitsHole expression position) insertableExpressions
