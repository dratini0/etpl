open Language

exception RuntimeException of string * state

let evalConstant (s:state) c = match c with
  | Pi -> State(Literal(Number(3.1415926535897932384626433832795)))

let evalUnary (s:state) o e1 = match (o, e1) with
  | (Ln, Number(v1)) -> State(Literal(Number(log(v1))))
  | (Floor, Number(v1)) -> State(Literal(Number(floor(v1))))
  (* | _ -> raise (RuntimeException("evalUnary called wrong. The program is not well-typed.", s)) *)
  
let evalBinary (s:state) o e1 e2 = match (o, e1, e2) with
  | (Add, Number(e1), Number(e2)) -> State(Literal(Number(e1 +. e2)))
  | (Sub, Number(e1), Number(e2)) -> State(Literal(Number(e1 -. e2)))
  | (Mul, Number(e1), Number(e2)) -> State(Literal(Number(e1 *. e2)))
  | (Div, Number(e1), Number(e2)) -> State(Literal(Number(e1 /. e2)))
  (* | _ -> raise (RuntimeException("evalBinary called wrong. The program is not well-typed.", s)) *)

let rec nextStep (State(e)) = match e with
  | Literal(_) -> raise (RuntimeException ("already a value", State(e)))
  | Constant(c) -> evalConstant (State(e)) c
  | UnaryOp(o, Literal(e1)) -> evalUnary (State(e)) o e1
  | UnaryOp(o, e1) ->
    (match (nextStep(State(e1))) with State(e1_) ->
      State(UnaryOp(o, e1_)))
  | BinaryOp(o, Literal(e1), Literal(e2)) -> evalBinary (State(e)) o e1 e2
  | BinaryOp(o, Literal(e1), e2) ->
    (match (nextStep(State(e2))) with State(e2_) ->
      State(BinaryOp(o, Literal(e1), e2_)))
  | BinaryOp(o, e1, e2) ->
    (match (nextStep(State(e1))) with State(e1_) ->
      State(BinaryOp(o, e1_, e2)))
  | Hole -> raise(RuntimeException ("Programs with holes in them are not well typed", State(e)))

let rec evaluateLoop s = match s with
  | State(Literal(_)) -> s
  | _ -> evaluateLoop (nextStep s)


let evaluate e = match evaluateLoop (State(e)) with State(v) -> v

