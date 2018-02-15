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

let inferTypeValue = function
  | Number _ -> TNumber
  | String _ -> TString

let inferTypeConstant = function
  | Pi -> TNumber

let unaryOpConstratints = function
  | Ln
  | Floor -> TNumber, TNumber
  | StringOfNum -> TString, TNumber
  | NumOfString -> TNumber, TString
  | Strlen -> TNumber, TString

let binaryOpConstratints = function
  | Add
  | Sub
  | Mul
  | Div -> TNumber, TNumber, TNumber
  | Concat -> TString, TString, TString
  | SHead
  | STail
  | CharAt -> TString, TString, TNumber

let rec inferTypeInternal substitutions = function
  | Literal v -> Some (substitutions, inferTypeValue v)
  | Constant(c) -> Some (substitutions, inferTypeConstant c)
  | UnaryOp(o, e1) -> let r, t1 = unaryOpConstratints o in (
      match inferTypeInternal substitutions e1 >>= unifySugar t1 with
        | Some(substitutions, _) -> Some(substitutions, r)
        | None -> None
      )
  | BinaryOp(o, e1, e2) -> let r, t1, t2 = binaryOpConstratints o in (
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

let inferType e = inferTypeInternal emptySubstitutionList e >>= (fun (_, t) -> Some t)

(* TODO: we can do better *)
let fitsHole expression position subExpression =
  replaceSubtree expression position subExpression
  |> inferType
  |> Option.is_some

let whatFits expression position = List.filter (fitsHole expression position) insertableExpressions
