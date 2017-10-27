open Language

(* TODO: add some way of grouping these, because they will not always fit the screen *)
let insertableExpressions = [
  Literal(Number(0.)); (* This will need special handling *)
  Constant(Pi);
  UnaryOp(Ln, Hole);
  UnaryOp(Floor, Hole);
  BinaryOp(Add, Hole, Hole);
  BinaryOp(Sub, Hole, Hole);
  BinaryOp(Mul, Hole, Hole);
  BinaryOp(Div, Hole, Hole);
]

let inferType (_:expression) = TNumber

let fitsHole (_:expression) (_:position) (_:expression) = true

let whatFits expression position = List.filter (fitsHole expression position) insertableExpressions
