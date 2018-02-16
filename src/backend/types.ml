open Language
open Position
open TreeManipulation
open SubstitutionList

let (>>=) = Option.bind

(* TODO: add some way of grouping these, because they will not always fit the screen *)
let insertableExpressions = [
  Literal(Number(0.));
  Literal(String "");
  Constant(Pi);
  UnaryOp(Ln, Hole);
  UnaryOp(Floor, Hole);
  UnaryOp(StringOfNum, Hole);
  UnaryOp(NumOfString, Hole);
  UnaryOp(Strlen, Hole);
  BinaryOp(Add, Hole, Hole);
  BinaryOp(Sub, Hole, Hole);
  BinaryOp(Mul, Hole, Hole);
  BinaryOp(Div, Hole, Hole);
  BinaryOp(SHead, Hole, Hole);
  BinaryOp(STail, Hole, Hole);
  BinaryOp(CharAt, Hole, Hole);
  BinaryOp(Concat, Hole, Hole);
  BinaryOp(Pair, Hole, Hole);
  UnaryOp(PairLeft, Hole);
  UnaryOp(PairRight, Hole);
]

let rec substituteFTV index substitute = function
  | FTV i -> if i = index then substitute else FTV i
  | TArray t -> TArray (substituteFTV index substitute t)
  | TPair (t1, t2) -> TPair (substituteFTV index substitute t1,
                             substituteFTV index substitute t2)
  | t -> t

let rec occurs index = function
  | TString
  | TNumber -> false
  | TArray t -> occurs index t
  | TPair (t1, t2) -> occurs index t1 || occurs index t2
  | FTV i -> i = index

let rec applySubstitutions substitutions = function
  (* The substitution map should have everything consistent *)
  (* Focus on should *)
  | FTV n -> Option.default (FTV n) (findSubstitution n substitutions)
  | TArray t -> TArray(applySubstitutions substitutions t)
  | TPair (t1, t2) -> TPair(applySubstitutions substitutions t1,
                            applySubstitutions substitutions t2)
  | t -> t

let rec unifyInternal subtitutions a b =
  let a = match a with
    | FTV i -> findSubstitution i subtitutions |> Option.default (FTV i)
    | x -> x in
  let b = match b with
    | FTV i -> findSubstitution i subtitutions |> Option.default (FTV i)
    | x -> x in
  match a, b with
    | FTV ai, FTV bi when ai = bi -> Some(subtitutions)
    | FTV ai, _ ->
      let b = applySubstitutions subtitutions b in
        if occurs ai b then None else (
          let subtitutions2 = mapSubstitutions (substituteFTV ai b) subtitutions in
          let subtitutions3 = addSubstitution ai b subtitutions2 in
          Some(subtitutions3)
        )
    | _, FTV bi -> unifyInternal subtitutions (FTV bi) a
    | TString, TString
    | TNumber, TNumber -> Some(subtitutions)
    | TArray a, TArray b -> unifyInternal subtitutions a b
    | TPair (a1, a2), TPair (b1, b2) ->(match unifyInternal subtitutions a1 b1 with
      | Some(substitutions2) -> unifyInternal substitutions2 a2 b2
      | None -> None
      )
    | _ -> None

let unify substitutions a b = match unifyInternal substitutions a b with
  | Some substitutions -> Some(substitutions, applySubstitutions substitutions a)
  | None -> None

let unifySugar b (substitutions, a) = unify substitutions a b

let rec literalConstraints substitutions = function
  | Number _ -> substitutions, TNumber
  | String _ -> substitutions, TString
  | Array a -> if Array.length a = 0 then 
      let i, substitutions_ = newFreeVariable substitutions in
      substitutions_, FTV(i)
    else
      literalConstraints substitutions (Array.get a 0)
  | Pair (v1, v2) ->
      let substitutions2, t1 = literalConstraints substitutions v1 in
      let substitutions3, t2 = literalConstraints substitutions2 v2 in
      (substitutions3, TPair(t1, t2))

let inferTypeValue v = let _, t = literalConstraints emptySubstitutionList v in t

let inferTypeConstant = function
  | Pi -> TNumber

(* Result: state, result, operand *)
let unaryOpConstratints substitutions = function
  | Ln
  | Floor -> substitutions, TNumber, TNumber
  | StringOfNum -> substitutions, TString, TNumber
  | NumOfString -> substitutions, TNumber, TString
  | Strlen -> substitutions, TNumber, TString
  | PairLeft ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      substitutions3, FTV alpha, TPair(FTV alpha, FTV beta)
  | PairRight ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      substitutions3, FTV beta, TPair(FTV alpha, FTV beta)

(* Result: state, result, operand1, operand2 *)
let binaryOpConstratints substitutions = function
  | Add
  | Sub
  | Mul
  | Div -> substitutions, TNumber, TNumber, TNumber
  | Concat -> substitutions, TString, TString, TString
  | SHead
  | STail
  | CharAt -> substitutions, TString, TString, TNumber
  | Pair ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      substitutions3, TPair(FTV alpha, FTV beta), FTV alpha, FTV beta

let rec inferTypeInternal substitutions = function
  | Literal v -> Some (literalConstraints substitutions v)
  | Constant(c) -> Some (substitutions, inferTypeConstant c)
  | UnaryOp(o, e1) -> let substitutions, r, t1 = unaryOpConstratints substitutions o in (
      match inferTypeInternal substitutions e1 >>= unifySugar t1 with
        | Some(substitutions, _) -> Some(substitutions, r)
        | None -> None
      )
  | BinaryOp(o, e1, e2) -> let substitutions, r, t1, t2 = binaryOpConstratints substitutions o in (
      match inferTypeInternal substitutions e1 >>= unifySugar t1 with
        | Some(substitutions, _) -> (
          match inferTypeInternal substitutions e2 >>= unifySugar t2 with
            | Some(substitutions, _) -> Some (substitutions, r)
            | None -> None
          )
        | None -> None
      )
  | Hole -> 
    let index, substitutions = newFreeVariable substitutions in Some(substitutions, FTV(index))

let inferType e = inferTypeInternal emptySubstitutionList e >>=
      (fun (substitutions, t) -> Some (applySubstitutions substitutions t))

(* TODO: we can do better *)
let fitsHole expression position subExpression =
  replaceSubtree expression position subExpression
  |> inferType
  |> Option.is_some

let whatFits expression position = List.filter (fitsHole expression position) insertableExpressions
