open Language
open Position
open Names
open Types

exception RuntimeException of string * state * position

module StringMap = Map.Make(String)

(* I promise that this wil make sense once we have mutable state *)
let updateState (State(_)) e = State(e)

let evalConstant s (_:position) c = match c with
  | Pi -> updateState s (Literal(Number(3.1415926535897932384626433832795)))

let evalUnary s p o e1 = match (o, e1) with
  | (Ln, Number(v1)) -> updateState s (Literal(Number(log(v1))))
  | (Floor, Number(v1)) -> updateState s (Literal(Number(floor(v1))))
  | (StringOfNum, Number(v1)) -> updateState s (Literal(String(Printf.sprintf "%g" v1)))
  | (NumOfString, String(v1)) -> (try updateState s (Literal(Number(float_of_string v1))) with Failure "float_of_string" -> raise (RuntimeException("String is not numeric", s, p)))
  | (Strlen, String(v1)) -> updateState s (Literal(Number(v1 |> String.length |> float_of_int)))
  | (PairLeft, Pair(v1, _)) -> updateState s (Literal v1)
  | (PairRight, Pair(_, v2)) -> updateState s (Literal v2)
  | (o, v1) -> raise (RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an argument of type %s" (unaryOperatorName o) (v1 |> inferTypeValue |> typeName), s, p))

let evalBinary s p o e1 e2 = match (o, e1, e2) with
  | (Add, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 +. e2)))
  | (Sub, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 -. e2)))
  | (Mul, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 *. e2)))
  | (Div, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 /. e2)))
  | (Concat, String(e1), String(e2)) -> updateState s (Literal(String(e1 ^ e2)))
  | (SHead, String(e1), Number(e2)) -> (try updateState s (Literal(String(String.sub e1 0 (int_of_float e2)))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for SHead", s, p)))
  | (STail, String(e1), Number(e2)) -> (try let len = String.length e1 in updateState s (Literal(String(String.sub e1 (len - (int_of_float e2)) (int_of_float e2)))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for STail", s, p)))
  | (CharAt, String(e1), Number(e2)) -> (try updateState s (Literal(String(String.make 1 (String.get e1 (int_of_float e2))))) with Invalid_argument _ -> raise (RuntimeException("Index out of range for CharAt", s, p)))
  | (Pair, e1, e2) -> updateState s (Literal(Pair(e1, e2)))
  | (Apply, Function(_, variables, name, e1), e2) ->
    let replacement1 = Let(name, Literal e2, e1) in
    let replacement2 = StringMap.fold (fun name value e -> Let(name, Literal value, e)) variables replacement1 in
    updateState s replacement2
  | (o, v1, v2) -> raise (RuntimeException(Printf.sprintf "Program is not well-typed: %s is not defined for an arguments of type %s and %s" (binaryOperatorName o) (v1 |> inferTypeValue |> typeName) (v2 |> inferTypeValue |> typeName), s, p))

let evalNAry s (_:position) o values = match o with
  | ArrayForm -> updateState s (Literal(Array(values |> List.rev |> Array.of_list)))

let rec nextStepInternal (State e as s) loc variables = match e with
  | Literal(_) -> raise (RuntimeException ("already a value", s, loc))
  | Constant(c) -> evalConstant s loc c
  | UnaryOp(o, Literal(e1)) -> evalUnary s loc o e1
  | UnaryOp(o, e1) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(UnaryOp(o, e1_))
  | BinaryOp(o, Literal(e1), Literal(e2)) -> evalBinary s loc o e1 e2
  | BinaryOp(o, (Literal _ as e1), e2) ->
      let State e2_ = nextStepInternal (State e2) (posPush loc 1) variables in
      State(BinaryOp(o, e1, e2_))
  | BinaryOp(o, e1, e2) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(BinaryOp(o, e1_, e2))
  | NAryOp(o, [], _, values) -> evalNAry s loc o values
  | NAryOp(o, Literal(v) :: es, n, values) -> State(NAryOp(o, es, n+1, v::values))
  | NAryOp(o, e::es, n, values) ->
      let State e_ = nextStepInternal (State e) (posPush loc n) variables in 
      State(NAryOp(o, e_::es, n, values))
  | Let(_, Literal _, (Literal _ as e2)) -> State(e2)
  | Let(name, Literal v, e2) ->
      let State e2_ = nextStepInternal (State e2) (posPush loc 1) (StringMap.add name v variables) in
      State(Let(name, Literal v, e2_))
  | Let(name, e1, e2) ->
      let State e1_ = nextStepInternal (State e1) (posPush loc 0) variables in
      State(Let(name, e1_, e2))
  | Variable name -> (try State(Literal(StringMap.find name variables)) with 
      | Not_found -> raise (RuntimeException("Unbound variable " ^ name, s, loc)))
  | Function(name, e1) -> State(Literal(Function(posPush loc 0, variables, name, e1)))
  | Hole -> raise(RuntimeException ("Programs with holes in them can't be executed.", s, loc))

let nextStep s = nextStepInternal s emptyPosition StringMap.empty

let rec evaluateLoop s = match s with
  | State(Literal v) -> v
  | _ -> evaluateLoop (nextStep s)


let evaluate e = evaluateLoop (State e)

