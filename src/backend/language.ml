open Position

type constant =
  | Pi

type unaryOp =
  | Ln
  | Floor
  | StringOfNum
  | NumOfString
  | Strlen

type binaryOp =
  | Add
  | Sub
  | Mul
  | Div
  | Concat
  | SHead
  | STail
  | CharAt

type value =
  | Number of float
  | String of string

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
