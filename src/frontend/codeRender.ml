open Language
open Types
open Names
let jquery = Jquery.jquery
open Position

external createTextNode : string -> Dom.node = "document.createTextNode" [@@bs.val]

let setChild number child element = begin
  ignore (element
    |> Jquery.find ("> .child" ^ (string_of_int number))
    |> Jquery.append_ child);
  element;
end

let cloneElementFromTemplate id = jquery ("#templates ." ^ id) |> Jquery.clone

let posToId position = "node" ^ (position
                                  |> Position.list_of_pos
                                  |> List.map string_of_int
                                  |> String.concat "_")

let renderValue = function
  | Number(n) -> (Jquery.jquery'' (createTextNode (string_of_float n)))

let rec renderExpression expression position specialCasingFunction = begin
  let element = (match expression with
    | Literal value ->
      let typeName_ = typeName (inferType expression) in
      cloneElementFromTemplate ("literal_" ^ typeName_)
        |> setChild 0 (renderValue value)
    | Constant(c) ->
      cloneElementFromTemplate ("constant_" ^ (constantName c))
    | UnaryOp(o, e0) ->
      cloneElementFromTemplate ("unary_" ^ (unaryOperatorName o))
        |> setChild 0 (renderExpression e0 (Option.map (fun x -> posPush x 0) position) specialCasingFunction)
    | BinaryOp(o, e0, e1) ->
      cloneElementFromTemplate ("binary_" ^ (binaryOperatorName o))
        |> setChild 0 (renderExpression e0 (Option.map (fun x -> posPush x 0) position) specialCasingFunction)
        |> setChild 1 (renderExpression e1 (Option.map (fun x -> posPush x 1) position) specialCasingFunction)
    | Hole ->
      cloneElementFromTemplate "hole"
  ) in 
  (match position with 
    | None -> ()
    | Some position -> ignore (element |> Jquery.attr (`kv ("id", posToId position))));
  specialCasingFunction expression position element;
end
  
let emptySpecialCasingFunction _ _ element = element;
