open Language
open Names
open Position
open JquerySafe

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

let rec renderValue = function
  | Number(n) ->
      cloneElementFromTemplate "literal_Number"
        |> setChild 0 (Jquery.jquery'' (createTextNode (string_of_float n)))
  | String(s) ->
      cloneElementFromTemplate "literal_String"
        |> setChild 0 (Jquery.jquery'' (createTextNode s))
  | Bool true -> cloneElementFromTemplate "literal_True"
  | Bool false -> cloneElementFromTemplate "literal_False"
  | Pair(v1, v2) ->
      cloneElementFromTemplate "literal_Pair"
        |> setChild 0 (renderValue v1)
        |> setChild 1 (renderValue v2)
  | Array a ->
      let protoElement = cloneElementFromTemplate "literal_Array" in
      let container = protoElement |> Jquery.find ".container" in
      Array.iter (fun e -> 
        let item = cloneElementFromTemplate ("literal_Array_item") in
        item |> setChild 0 (renderValue e) |> ignore;
        container |> Jquery.append_ item |> ignore;
      ) a;
      protoElement
  | Function _ -> cloneElementFromTemplate "literal_Function"


let rec renderExpression expression position specialCasingFunction = begin
  let recurse index expression element = 
    setChild index (renderExpression expression (Option.map (fun x -> posPush x index) position) specialCasingFunction) element in
  let element = (match expression with
    | Literal value -> renderValue value
    | Constant(c) ->
      cloneElementFromTemplate ("constant_" ^ (constantName c))
    | UnaryOp(o, e0) ->
      cloneElementFromTemplate ("unary_" ^ (unaryOperatorName o))
        |> setChild 0 (renderExpression e0 (Option.map (fun x -> posPush x 0) position) specialCasingFunction)
    | BinaryOp(o, e0, e1) ->
      cloneElementFromTemplate ("binary_" ^ (binaryOperatorName o))
        |> setChild 0 (renderExpression e0 (Option.map (fun x -> posPush x 0) position) specialCasingFunction)
        |> setChild 1 (renderExpression e1 (Option.map (fun x -> posPush x 1) position) specialCasingFunction)
    | NAryOp(o, es, 0, []) ->
      let protoElement = cloneElementFromTemplate ("nary_" ^ (nAryOperatorName o)) in
      let container = protoElement |> Jquery.find ".container" in
      List.iteri (fun n e -> 
        let item = cloneElementFromTemplate ("nary_" ^ (nAryOperatorName o) ^ "_item") in
        item |> setChild 0 (renderExpression e (Option.map (fun x -> posPush x n) position) specialCasingFunction) |> ignore;
        container |> Jquery.append_ item |> ignore;
      ) es;
      protoElement
    | NAryOp _ -> raise IntermediateStateError
    | Let(name, e0, e1) ->
      let element = cloneElementFromTemplate "other_Let" in
      element
        |> Jquery.find ".name"
        |> Jquery.text name
        |> ignore;
      element
        |> recurse 0 e0
        |> recurse 1 e1
    | Variable name ->
      let element = cloneElementFromTemplate "other_Variable" in
      element
        |> Jquery.find ".name"
        |> Jquery.text name
        |> ignore;
      element
    | If (condition, then_, else_) ->
      cloneElementFromTemplate "other_If"
        |> setChild 0 (renderExpression condition (Option.map (fun x -> posPush x 0) position) specialCasingFunction)
        |> setChild 1 (renderExpression then_ (Option.map (fun x -> posPush x 1) position) specialCasingFunction)
        |> setChild 2 (renderExpression else_ (Option.map (fun x -> posPush x 2) position) specialCasingFunction)
    | Hole ->
      cloneElementFromTemplate "hole"
  ) in
  (match position with 
    | None -> ()
    | Some position -> ignore (element |> Jquery.attr (`kv ("id", posToId position))));
  specialCasingFunction expression position element;
end
  
let emptySpecialCasingFunction _ _ element = element;
