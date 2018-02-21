open Position

(* Raised when the serialization/pretty-printing of an internal-only state is
   attempted *)
exception IntermediateStateError

module StringMap = Map.Make(String)

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
  | Apply

type nAryOp =
  | ArrayForm

type value =
  | Number of float
  | String of string
  | Array of value array
  | Pair of value * value
  | Function of position * value StringMap.t * string * expression

and expression =
  | Literal of value
  | Constant of constant
  | UnaryOp of unaryOp * expression
  | BinaryOp of binaryOp * expression * expression
  | NAryOp of nAryOp * expression list * int * value list
  | Let of string * expression * expression
  | Variable of string
  | Function of string * expression
  | Hole

(* This will eventually hold mutable state *)
type state = State of expression

type etplType =
  | TNumber
  | TString
  | FTV of int
  | TArray of etplType
  | TPair of etplType * etplType
  | TFun of etplType * etplType
