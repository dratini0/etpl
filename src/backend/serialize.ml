open Language
open Names

exception DecodingUnderrunError

let separator = ","

let encodeStringPayload s accumulator =
  (BatString.find_all s separator |> BatEnum.count |> (+) 1 |> string_of_int) ::
  s :: accumulator

let rec encodeValue = function
  | Number(n) -> ["Number"; Printf.sprintf "%.17g" n]
  | String(s) -> "String" :: encodeStringPayload s []
  (* This is lossless, assuming we are dealing with doubles *)
  | Pair(v1, v2) -> "Pair" :: encodeValue v1 @ encodeValue v2
  | Array(a) -> "Array" :: (Array.length a |> string_of_int) :: (Array.to_list a |> List.map encodeValue |> List.concat)
  | Function _ -> ["FunctionValue"] (*Could be done, but would be a hassle*)

let rec encode expression accumulator = match expression with
  | Literal(v) -> "Literal" :: ((encodeValue v) @ accumulator)
  | Constant(c) -> "Constant" :: (constantName c) :: accumulator
  | UnaryOp(o, e1) ->
    let accumulator2 = encode e1 accumulator in
      "UnaryOp" :: unaryOperatorName o :: accumulator2
  | BinaryOp(o, e1, e2) ->
    let accumulator2 = encode e2 accumulator in
    let accumulator3 = encode e1 accumulator2 in
      "BinaryOp" :: binaryOperatorName o :: accumulator3
  | NAryOp(o, es, 0, []) ->
    let length = List.length es in
      "NAryOp":: (nAryOperatorName o) :: (string_of_int length) ::
        BatList.fold_right encode es accumulator
  | NAryOp _ -> raise IntermediateStateError
  | Let(name, e1, e2) ->
      let accumulator2 = encode e2 accumulator in
      let accumulator3 = encode e1 accumulator2 in
      let accumulator4 = encodeStringPayload name accumulator3 in
      "Let" :: accumulator4
  | Variable name ->
      "Variable" :: (encodeStringPayload name accumulator)
  | Function(name, _, e) -> (* TODO *)
      let accumulator2 = encode e accumulator in
      let accumulator3 = encodeStringPayload name accumulator2 in
      "Function" :: accumulator3
| Hole -> "Hole" :: accumulator

let serialize expression = String.concat separator (encode expression [])

let decodeStringPayload = function
  | lengthIndicator :: rest ->
      let length = int_of_string lengthIndicator in
      let components, rest = (try BatList.split_at length rest with | Invalid_argument _ -> raise DecodingUnderrunError) in
      (String.concat separator components), rest
  | [] -> raise DecodingUnderrunError

let rec decodeArray count rest accumulator =
  if count = 0 then
    (accumulator, rest)
  else
    let value, rest_ = decodeValue rest in
    decodeArray (count - 1) rest_ (value::accumulator)

(* There is no type by name funtion because it will eventually get quite complicated *)
and decodeValue code = match code with
  | "Number" :: encoded :: rest -> (Number(float_of_string encoded), rest)
  | "String" :: rest ->
      let s, rest = decodeStringPayload rest in
      (String s, rest)
  | "Pair" :: rest ->
      let v1, rest1 = decodeValue rest in
      let v2, rest2 = decodeValue rest1 in
      (Pair(v1, v2), rest2)
  | "Array" :: lengthEncoded :: rest ->
      let length = int_of_string lengthEncoded in
      let values, rest_ = decodeArray length rest [] in
      (Array (values |> List.rev |> Array.of_list), rest_)
  | "Number" :: _
  | "Array" :: _
  | [] -> raise DecodingUnderrunError
  | typename :: _ -> raise (UnknownNameException("Type " ^ typename))
  
let rec decodeNAry count rest accumulator =
  if count = 0 then
    (accumulator, rest)
  else
    let value, rest_ = decode rest in
    decodeNAry (count - 1) rest_ (value::accumulator)
  
and decode = function
  | tokenType :: tail -> (match tokenType with
    | "Literal" -> let v, tail2 = decodeValue tail in (Literal(v), tail2)
    | "Constant" -> (match tail with
      | c :: tail2 -> (Constant(constantByName c), tail2)
      | _ -> raise DecodingUnderrunError
    )
    | "UnaryOp" -> (match tail with
      | o :: tail2 -> (
        let e1, tail3 = decode tail2 in
        (UnaryOp((unaryOperatorByName o), e1), tail3)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "BinaryOp" -> (match tail with
      | o :: tail2 -> (
        let e1, tail3 = decode tail2 in
        let e2, tail4 = decode tail3 in
        (BinaryOp((binaryOperatorByName o), e1, e2), tail4)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "NAryOp" -> (match tail with
      | o_ :: n_ :: tail2 -> (
        let o = nAryOperatorByName o_ in 
        let n = int_of_string n_ in
        let results, tail3 = decodeNAry n tail2 [] in
        (NAryOp(o, List.rev results, 0, []), tail3)
      )
      | _ -> raise DecodingUnderrunError
    )
    | "Let" ->
        let name, tail2 = decodeStringPayload tail in
        let e1, tail3 = decode tail2 in
        let e2, tail4 = decode tail3 in
        Let(name, e1, e2), tail4
    | "Variable" ->
        let name, tail2 = decodeStringPayload tail in
        Variable name, tail2
    | "Function" ->
        let name, tail2 = decodeStringPayload tail in
        let e, tail3 = decode tail2 in
        Function(name, None, e), tail3 (* TODO *)
    | "Hole" -> (Hole, tail)
    | _ -> raise (UnknownNameException ("Token type " ^ tokenType)))
  | [] -> raise DecodingUnderrunError

let deserialize code =
  let e, _ = decode (BatString.nsplit ~by:separator code) in
    e
