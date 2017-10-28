open Language

exception UnknownNameException of string

let constantName = function
  | Pi -> "Pi"

let unaryOperatorName = function
  | Ln -> "Ln"
  | Floor -> "Floor"

let binaryOperatorName = function
  | Add -> "Add"
  | Sub -> "Sub"
  | Mul -> "Mul"
  | Div -> "Div"

let constantByName = function
  | "Pi" -> Pi
  | name -> raise (UnknownNameException ("Constant " ^ name))

let unaryOperatorByName = function
  | "Ln" -> Ln
  | "Floor" -> Floor
  | name -> raise (UnknownNameException ("Unary operator " ^ name))
  
let binaryOperatorByName = function
  | "Add" -> Add
  | "Sub" -> Sub
  | "Mul" -> Mul
  | "Div" -> Div
  | name -> raise (UnknownNameException ("Binary operator " ^ name))
