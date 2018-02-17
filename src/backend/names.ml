open Language

module IntMap = Map.Make(struct type t = int let compare: int -> int -> int = compare end)
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let alphabetlen = String.length alphabet

type typeNormalization = int * (int IntMap.t)

exception UnknownNameException of string

let emptyTypeNormalization = (0, IntMap.empty)

let constantName = function
  | Pi -> "Pi"

let unaryOperatorName = function
  | Ln -> "Ln"
  | Floor -> "Floor"
  | StringOfNum -> "StringOfNum"
  | NumOfString -> "NumOfString"
  | Strlen -> "Strlen"
  | PairLeft -> "PairLeft"
  | PairRight -> "PairRight"

let binaryOperatorName = function
  | Add -> "Add"
  | Sub -> "Sub"
  | Mul -> "Mul"
  | Div -> "Div"
  | Concat -> "Concat"
  | SHead -> "SHead"
  | STail -> "STail"
  | CharAt -> "CharAt"
  | Pair -> "Pair"

let nAryOperatorName = function
  | ArrayForm -> "ArrayForm"

let rec base26Internal number accumulator =
  if number < alphabetlen then
  (String.make 1 alphabet.[number mod alphabetlen]) ^ accumulator
  else
    let newChar = String.make 1 alphabet.[number mod alphabetlen] in
    base26Internal (number / alphabetlen) (newChar ^ accumulator)

let base26 number = base26Internal number ""

let rec typeNameInternal ((nextLetter, normalization) as state) = function
  | TNumber -> (state, "Number")
  | TString -> (state, "String")
  | FTV i ->
      if IntMap.mem i normalization then 
        ((nextLetter,
         normalization),
         "'" ^ (base26 (IntMap.find i normalization)))
      else
        ((nextLetter + 1,
         IntMap.add i nextLetter normalization),
         "'" ^ (base26 nextLetter))
  | TArray t -> let state_, result = typeNameInternal state t in
      (state_, result ^ " Array")
  | TPair (t1, t2) ->
      let state_, result1 = typeNameInternal state t1 in
      let state__, result2 = typeNameInternal state_ t2 in
      (state__, "(" ^ result1 ^ " * " ^ result2 ^ ")")

let typeName t = let _, result = typeNameInternal emptyTypeNormalization t in result

let constantByName = function
  | "Pi" -> Pi
  | name -> raise (UnknownNameException ("Constant " ^ name))

let unaryOperatorByName = function
  | "Ln" -> Ln
  | "Floor" -> Floor
  | "StringOfNum" -> StringOfNum
  | "NumOfString" -> NumOfString
  | "Strlen" -> Strlen
  | "PairLeft" -> PairLeft
  | "PairRight" -> PairRight
  | name -> raise (UnknownNameException ("Unary operator " ^ name))
  
let binaryOperatorByName = function
  | "Add" -> Add
  | "Sub" -> Sub
  | "Mul" -> Mul
  | "Div" -> Div
  | "Concat" -> Concat
  | "SHead" -> SHead
  | "STail" -> STail
  | "CharAt" -> CharAt
  | "Pair" -> Pair
  | name -> raise (UnknownNameException ("Binary operator " ^ name))

let nAryOperatorByName = function
  | "ArrayForm" -> ArrayForm
  | name -> raise (UnknownNameException ("N-ary operator " ^ name))
