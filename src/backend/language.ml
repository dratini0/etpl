open Position

(* Raised when the serialization/pretty-printing of an internal-only state is
   attempted *)
exception IntermediateStateError

module StringMap = Map.Make(String)

type etplType =
  | TUnit
  | TNumber
  | TString
  | TBool
  | FTV of int
  | TArray of etplType
  | TPair of etplType * etplType
  | TFun of etplType * etplType
  | GTV of int (* generalized type variable *)

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
  | ArrayClone
  | ArrayLen

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
  | GTEQ
  | ArrayIndex
  | Seq

type ternaryOp =
  | ArraySet
  | ArraySlice

type nAryOp =
  | ArrayForm

type value =
  | Unit
  | Number of float
  | String of string
  | Bool of bool
  | Array of value array
  | Pair of value * value
  | Function of position * value StringMap.t * string option * string * expression

and expression =
  | Literal of value
  | Constant of constant
  | UnaryOp of unaryOp * expression
  | BinaryOp of binaryOp * expression * expression
  | TernaryOp of ternaryOp * expression * expression * expression
  | NAryOp of nAryOp * expression list * int * value list
  | Let of string * expression * expression
  | Variable of string
  | Function of string option * string * etplType option * expression
  | If of expression * expression * expression
  | While of expression * expression
  | Hole

(* This will eventually hold mutable state *)
type state = State of expression
