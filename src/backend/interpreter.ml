open Language
open Position
open Names
open Types

exception RuntimeException of string * state

let updateState (State(_, loc)) e = State(e, loc)

let evalConstant s c = match c with
  | Pi -> updateState s (Literal(Number(3.1415926535897932384626433832795)))

let evalUnary s o e1 = match (o, e1) with
  | (Ln, Number(v1)) -> updateState s (Literal(Number(log(v1))))
  | (Floor, Number(v1)) -> updateState s (Literal(Number(floor(v1))))
  | (StringOfNum, Number(v1)) -> updateState s (Literal(String(Printf.sprintf "%g" v1)))
  | (NumOfString, String(v1)) -> (try updateState s (Literal(Number(float_of_string v1))) with Failure "float_of_string" -> raise (RuntimeException("String is not numeric", s)))
  | (Strlen, String(v1)) -> updateState s (Literal(Number(v1 |> String.length |> float_of_int)))
  | (PairLeft, Pair(v1, _)) -> updateState s (Literal v1)
  | (PairRight, Pair(_, v2)) -> updateState s (Literal v2)
  | (o, v1) -> raise (RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an argument of type %s" (unaryOperatorName o) (v1 |> inferTypeValue |> typeName), s))

let evalBinary s o e1 e2 = match (o, e1, e2) with
  | (Add, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 +. e2)))
  | (Sub, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 -. e2)))
  | (Mul, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 *. e2)))
  | (Div, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 /. e2)))
  | (Concat, String(e1), String(e2)) -> updateState s (Literal(String(e1 ^ e2)))
  | (SHead, String(e1), Number(e2)) -> (try updateState s (Literal(String(String.sub e1 0 (int_of_float e2)))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for SHead", s)))
  | (STail, String(e1), Number(e2)) -> (try let len = String.length e1 in updateState s (Literal(String(String.sub e1 (len - (int_of_float e2)) (int_of_float e2)))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for STail", s)))
  | (CharAt, String(e1), Number(e2)) -> (try updateState s (Literal(String(String.make 1 (String.get e1 (int_of_float e2))))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for CharAt", s)))
  | (Pair, e1, e2) -> updateState s (Literal(Pair(e1, e2)))
  | (o, v1, v2) -> raise (RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an arguments of type %s and %s" (binaryOperatorName o) (v1 |> inferTypeValue |> typeName) (v2 |> inferTypeValue |> typeName), s))

let evalNAry s o values = match o with
  | ArrayForm -> updateState s (Literal(Array(values |> List.rev |> Array.of_list)))

let rec nextStep (State(e, loc) as s) = match e with
  | Literal(_) -> raise (RuntimeException ("already a value", s))
  | Constant(c) -> evalConstant s c
  | UnaryOp(o, Literal(e1)) -> evalUnary s o e1
  | UnaryOp(o, e1) ->
    (match (nextStep(State(e1, posPush loc 0))) with State(e1_, _) ->
      State(UnaryOp(o, e1_), loc))
  | BinaryOp(o, Literal(e1), Literal(e2)) -> evalBinary s o e1 e2
  | BinaryOp(o, Literal(e1), e2) ->
    (match (nextStep(State(e2, posPush loc 1))) with State(e2_, _) ->
      State(BinaryOp(o, Literal(e1), e2_), loc))
  | BinaryOp(o, e1, e2) ->
    (match (nextStep(State(e1, posPush loc 0))) with State(e1_, _) ->
      State(BinaryOp(o, e1_, e2), loc))
  | NAryOp(o, [], _, values) -> evalNAry s o values
  | NAryOp(o, Literal(v) :: es, n, values) -> State(NAryOp(o, es, n+1, v::values), loc)
  | NAryOp(o, e::es, n, values) ->
      let State(e_, _) = nextStep(State(e, posPush loc n)) in 
      State(NAryOp(o, e_::es, n, values), loc)
  | Hole -> raise(RuntimeException ("Programs with holes in them can't be executed.", s))

let rec evaluateLoop s = match s with
  | State(Literal(v), _) -> v
  | _ -> evaluateLoop (nextStep s)


let evaluate e = evaluateLoop (State(e, emptyPosition))

