open Position

type constant =
  | Pi

type unaryOp =
  | Ln
  | Floor

type binaryOp =
  | Add
  | Sub
  | Mul
  | Div

type value =
  | Number of float

type expression =
  | Literal of value
  | Constant of constant
  | UnaryOp of unaryOp * expression
  | BinaryOp of binaryOp * expression * expression
  | Hole

(* This will eventually hold mutable state *)
type state = State of expression * position

type etplType =
  | TNumber
