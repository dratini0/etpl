open Language
open Names

let prettyPrintValue v = match v with
  | Number(n) -> string_of_float(n)
  | String(s) -> Printf.sprintf "\"%s\"" s

let rec prettyPrintExpression e = match e with
  | Literal(l) -> prettyPrintValue l
  | Constant(c) -> constantName c
  | UnaryOp(o, e1) -> (unaryOperatorName o) ^ "(" ^ (prettyPrintExpression e1) ^ ")"
  | BinaryOp(o, e1, e2) -> (binaryOperatorName o) ^ "(" ^ (prettyPrintExpression e1) ^ ", " ^ (prettyPrintExpression e2) ^ ")"
  | Hole -> "[]"
