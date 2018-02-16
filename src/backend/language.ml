open Position

type constant =
  | Pi

type unaryOp =
  | Ln
  | Floor
  | StringOfNum
  | NumOfString
  | Strlen
  | PairLeft
  | PairRight

type binaryOp =
  | Add
  | Sub
  | Mul
  | Div
  | Concat
  | SHead
  | STail
  | CharAt
  | Pair

type value =
  | Number of float
  | String of string
  | Array of value array
  | Pair of value * value

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
  | TString
  | FTV of int
  | TArray of etplType
  | TPair of etplType * etplType
