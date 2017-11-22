open Language
open Names

exception DecodingUnderrunError

let separator = ","

let encodeValue = function
  | Number(n) -> ["Number"; Printf.sprintf "%.17g" n]
  | String(_) -> ["String"] (* TODO *)
  (* This is lossless, assuming we are dealing with doubles *)

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
  | Hole -> "Hole" :: accumulator

let serialize expression = String.concat separator (encode expression [])

let decodeValue code = match code with
  | typename :: encoded :: rest -> (match typename with
    | "Number" -> (Number(float_of_string encoded), rest)
    | _ -> raise (UnknownNameException("Type " ^ typename))
  )
  | _ -> raise DecodingUnderrunError
  

let rec decode = function
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
    | "Hole" -> (Hole, tail)
    | _ -> raise (UnknownNameException ("Token type " ^ tokenType)))
  | _ -> raise DecodingUnderrunError

(* JS in backend *)
let deserialize code = 
  let e, _ = decode (Array.to_list (Js_string.split separator code)) in
    e
