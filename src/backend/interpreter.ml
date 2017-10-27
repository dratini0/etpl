open Language

exception RuntimeException of string * state

let updateState (State(_, loc)) e = State(e, loc)

let evalConstant s c = match c with
  | Pi -> updateState s (Literal(Number(3.1415926535897932384626433832795)))

let evalUnary s o e1 = match (o, e1) with
  | (Ln, Number(v1)) -> updateState s (Literal(Number(log(v1))))
  | (Floor, Number(v1)) -> updateState s (Literal(Number(floor(v1))))
  (* | _ -> raise (RuntimeException("evalUnary called wrong. The program is not well-typed.", s)) *)
  
let evalBinary s o e1 e2 = match (o, e1, e2) with
  | (Add, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 +. e2)))
  | (Sub, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 -. e2)))
  | (Mul, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 *. e2)))
  | (Div, Number(e1), Number(e2)) -> updateState s (Literal(Number(e1 /. e2)))
  (* | _ -> raise (RuntimeException("evalBinary called wrong. The program is not well-typed.", s)) *)

let rec nextStep s = match s with State(e, loc) -> match e with
  | Literal(_) -> raise (RuntimeException ("already a value", s))
  | Constant(c) -> evalConstant s c
  | UnaryOp(o, Literal(e1)) -> evalUnary s o e1
  | UnaryOp(o, e1) ->
    (match (nextStep(State(e1, 0::loc))) with State(e1_, _) ->
      State(UnaryOp(o, e1_), loc))
  | BinaryOp(o, Literal(e1), Literal(e2)) -> evalBinary s o e1 e2
  | BinaryOp(o, Literal(e1), e2) ->
    (match (nextStep(State(e2, 1::loc))) with State(e2_, _) ->
      State(BinaryOp(o, Literal(e1), e2_), loc))
  | BinaryOp(o, e1, e2) ->
    (match (nextStep(State(e1, 0::loc))) with State(e1_, _) ->
      State(BinaryOp(o, e1_, e2), loc))
  | Hole -> raise(RuntimeException ("Programs with holes in them are not well typed", s))

let rec evaluateLoop s = match s with
  | State(Literal(v), _) -> v
  | _ -> evaluateLoop (nextStep s)


let evaluate e = evaluateLoop (State(e, []))

