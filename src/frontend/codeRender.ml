open Language
open Types
open Names
let jquery = Jquery.jquery

external createTextNode : string -> Dom.node = "document.createTextNode" [@@bs.val]

let setChild number child element = begin
  ignore (element
    |> Jquery.find ("> .child" ^ (string_of_int number))
    |> Jquery.append_ child);
  element;
end

let cloneElementFromTemplate id = jquery ("#templates ." ^ id) |> Jquery.clone

let renderValue = function
  | Number(n) -> (Jquery.jquery'' (createTextNode (string_of_float n)))

let rec renderExpression expression = match expression with
  | Literal value ->
    let typeName_ = typeName (inferType expression) in
    cloneElementFromTemplate ("literal_" ^ typeName_)
      |> setChild 0 (renderValue value)
  | Constant(c) ->
    cloneElementFromTemplate ("constant_" ^ (constantName c))
  | UnaryOp(o, e0) ->
    cloneElementFromTemplate ("unary_" ^ (unaryOperatorName o))
      |> setChild 0 (renderExpression e0)
  | BinaryOp(o, e0, e1) ->
    cloneElementFromTemplate ("binary_" ^ (binaryOperatorName o))
      |> setChild 0 (renderExpression e0)
      |> setChild 1 (renderExpression e1)
  | Hole ->
    cloneElementFromTemplate "hole"
  
  