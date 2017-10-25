open Language

let constantName c = match c with
  | Pi -> "Pi"

let unaryOperatorName o = match o with
  | Ln -> "Ln"
  | Floor -> "Floor"

let binaryOperatorName o = match o with
  | Add -> "Add"
  | Sub -> "Sub"
  | Mul -> "Mul"
  | Div -> "Div"

let prettyPrintLiteral v = match v with
  | Number(n) -> string_of_float(n)

let rec prettyPrintExpression e = match e with
  | Literal(l) -> prettyPrintLiteral l
  | Constant(c) -> constantName c
  | UnaryOp(o, e1) -> (unaryOperatorName o) ^ "(" ^ (prettyPrintExpression e1) ^ ")"
  | BinaryOp(o, e1, e2) -> (binaryOperatorName o) ^ "(" ^ (prettyPrintExpression e1) ^ ", " ^ (prettyPrintExpression e2) ^ ")"
  | Hole -> "[]"
