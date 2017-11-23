open Language

exception UnknownNameException of string

let constantName = function
  | Pi -> "Pi"

let unaryOperatorName = function
  | Ln -> "Ln"
  | Floor -> "Floor"
  | StringOfNum -> "StringOfNum"
  | NumOfString -> "NumOfString"
  | Strlen -> "Strlen"

let binaryOperatorName = function
  | Add -> "Add"
  | Sub -> "Sub"
  | Mul -> "Mul"
  | Div -> "Div"
  | Concat -> "Concat"
  | SHead -> "SHead"
  | STail -> "STail"
  | CharAt -> "CharAt"

let typeName = function
  | TNumber -> "Number"
  | TString -> "String"
  | FTV -> "FTV"

let constantByName = function
  | "Pi" -> Pi
  | name -> raise (UnknownNameException ("Constant " ^ name))

let unaryOperatorByName = function
  | "Ln" -> Ln
  | "Floor" -> Floor
  | "StringOfNum" -> StringOfNum
  | "NumOfString" -> NumOfString
  | "Strlen" -> Strlen
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
  | name -> raise (UnknownNameException ("Binary operator " ^ name))
