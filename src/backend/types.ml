open Language
open Position
open TreeManipulation
open SubstitutionList

module PosMap = Map.Make(Position.Proper)

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
  NAryOp(ArrayForm, [Hole], 0, []);
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

let rec literalConstraints substitutions = function
  | Number _ -> substitutions, TNumber
  | String _ -> substitutions, TString
  | Array a -> if Array.length a = 0 then 
      let i, substitutions_ = newFreeVariable substitutions in
      substitutions_, TArray (FTV i)
    else
      let substitutions_, t = literalConstraints substitutions (Array.get a 0) in
      (substitutions_, TArray t)
  | Pair (v1, v2) ->
      let substitutions2, t1 = literalConstraints substitutions v1 in
      let substitutions3, t2 = literalConstraints substitutions2 v2 in
      (substitutions3, TPair(t1, t2))

let inferTypeValue v = let _, t = literalConstraints emptySubstitutionList v in t

let inferTypeConstant substitutions = function
  | Pi -> substitutions, TNumber

(* Result: state, result, operand *)
let unaryOpConstraints substitutions = function
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
let binaryOpConstraints substitutions = function
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

let nAryOpConstraints substitutions n = function
  | ArrayForm ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TArray(FTV alpha), BatList.make n (FTV alpha)

let pairFormIfSome second = function
  | Some first -> Some(first, second)
  | None -> None

let rec inferTypeInternal substitutions tExpected position holeMap = function
  | Literal v ->
      let substitutions2, tReturn = literalConstraints substitutions v in
      unifyInternal substitutions2 tExpected tReturn |> pairFormIfSome holeMap
  | Constant c ->
      let substitutions2, tReturn = inferTypeConstant substitutions c in
      unifyInternal substitutions2 tExpected tReturn |> pairFormIfSome holeMap
  | UnaryOp(o, e1) ->
      let substitutions2, tReturn, t1 = unaryOpConstraints substitutions o in
      (match unifyInternal substitutions2 tExpected tReturn with
        | Some substitutions3 -> inferTypeInternal substitutions3 t1 (posPush position 0) holeMap e1
        | None -> None)
  | BinaryOp(o, e1, e2) ->
      let substitutions2, tReturn, t1, t2 = binaryOpConstraints substitutions o in
      (match unifyInternal substitutions2 tExpected tReturn with
        | Some substitutions3 -> (match inferTypeInternal substitutions3 t1 (posPush position 0) holeMap e1 with
          | Some(substitutions4, holeMap2) -> inferTypeInternal substitutions4 t2 (posPush position 1) holeMap2 e2
          | None -> None)
        | None -> None)
  | NAryOp(o, es, 0, []) -> 
      let rec helper state ts es n = match state, ts, es with
        | _, [], [] -> state
        | None, _, _ -> None
        | Some (substitutions, holeMap), tHead::tRest, eHead::eRest ->
            helper (inferTypeInternal substitutions tHead (posPush position n) holeMap eHead) tRest eRest (n+1)
        | _ -> raise (Invalid_argument "fold_left2_option_map")
      in
      let substitutions2, tReturn, ts = nAryOpConstraints substitutions (List.length es) o in
      let substitutions3 = unifyInternal substitutions2 tExpected tReturn in
        helper (substitutions3 |> pairFormIfSome holeMap) ts es 0
  | NAryOp _ -> raise IntermediateStateError
  | Hole -> Some (substitutions, PosMap.add position tExpected holeMap)

let inferTypeContinuable e =
  let alpha, substitutions = newFreeVariable emptySubstitutionList in
  match inferTypeInternal substitutions (FTV alpha) emptyPosition PosMap.empty e with
    | Some (substitutions2, holeMap) -> Some (applySubstitutions substitutions2 (FTV alpha), substitutions2, holeMap)
    | None -> None

let inferType e =
  match inferTypeContinuable e with
    | Some(t, _, _) -> Some t
    | None -> None

let fitsHole expression position subExpression =
  replaceSubtree expression position subExpression
  |> inferType
  |> Option.is_some

let whatFits expression position =
  match inferTypeContinuable expression with 
    | Some(_, substitutions, holeMap) ->
        let tExpected = PosMap.find position holeMap in
        List.filter (fun expression -> inferTypeInternal substitutions tExpected position holeMap expression |> Option.is_some) insertableExpressions
    | None -> []
