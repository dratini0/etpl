(*
 * types.ml
 * Copyright 2017-2018 Balint Kovacs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *)

open Language
open Position
open TreeManipulation
open SubstitutionList

module PosMap = Map.Make(Position.Proper)
module StringMap = Map.Make(String)
module IntHelper = struct type t = int let compare: int -> int -> int = compare end
module IntMap = Map.Make(IntHelper)
module IntSet = Set.Make(IntHelper)

(* TODO: add some way of grouping these, because they will not always fit the screen *)
let insertableExpressions = [
  Literal(Number(0.)), "Number";
  Literal(String ""), "String";
  Literal(Bool false), "False";
  Literal(Bool true), "True";
  Let("var", Hole, Hole), "Declare local";
  If(Hole, Hole, Hole), "Conditional";
  BinaryOp(Seq, Hole, Hole), "Sequence";
  While(Hole, Hole), "While loop";
  Function(None, "arg", None, Hole), "Function definition";
  BinaryOp(Apply, Hole, Hole), "Function application";
  BinaryOp(ArrayIndex, Hole, Hole), "Index array";
  NAryOp(ArrayForm, [Hole], 0, []), "Form array";
  BinaryOp(Repeat, Hole, Function(None, "i", None, Hole)), "Repeat";
  BinaryOp(For, Hole, Function(None, "index", None, Function(None, "item", None, Hole))), "Repeat";
  BinaryOp(Add, Hole, Hole), "Add";
  BinaryOp(Sub, Hole, Hole), "Subtract";
  BinaryOp(Mul, Hole, Hole), "Multiply";
  BinaryOp(Div, Hole, Hole), "Divide";
  Constant(Pi), {js|\u03C0|js};
  UnaryOp(Ln, Hole), "Ln";
  UnaryOp(Floor, Hole), "Floor";
  UnaryOp(StringOfNum, Hole), "Number to string";
  UnaryOp(NumOfString, Hole), "String to number";
  UnaryOp(Strlen, Hole), "Strlen";
  BinaryOp(SHead, Hole, Hole), "String head";
  BinaryOp(STail, Hole, Hole), "String tail";
  BinaryOp(CharAt, Hole, Hole), "Char at";
  BinaryOp(Concat, Hole, Hole), "Concatenate";
  BinaryOp(Pair, Hole, Hole), "Form pair";
  UnaryOp(PairLeft, Hole), "Project left";
  UnaryOp(PairRight, Hole), "Project right";
  BinaryOp(EQ, Hole, Hole), "Equal";
  BinaryOp(GT, Hole, Hole), "Greater than";
  BinaryOp(GTEQ, Hole, Hole), "Greater than or equal to";
  UnaryOp(Not, Hole), "Not";
  BinaryOp(And, Hole, Hole), "And";
  BinaryOp(Or, Hole, Hole), "Or";
  BinaryOp(ArrayMake, Hole, Hole), "Make array";
  TernaryOp(ArraySet, Hole, Hole, Hole), "Set element of array";
  TernaryOp(ArraySlice, Hole, Hole, Hole), "Slice array";
  UnaryOp(ArrayClone, Hole), "Array clone";
  UnaryOp(ArrayLen, Hole), "Array length";
  Function(Some "_", "arg", None, Hole), "Recursive function definition";
  Literal Unit, "Unit";
]

let rec substituteFTV index substitute = function
  | FTV i -> if i = index then substitute else FTV i
  | TArray t -> TArray (substituteFTV index substitute t)
  | TPair (t1, t2) -> TPair (substituteFTV index substitute t1,
                             substituteFTV index substitute t2)
  | TFun (t1, t2) -> TFun (substituteFTV index substitute t1,
                           substituteFTV index substitute t2)
  | t -> t

let rec occurs index = function
  | TUnit
  | TString
  | TNumber
  | TBool
  | GTV _ -> false
  | TArray t -> occurs index t
  | TPair (t1, t2) 
  | TFun (t1, t2) -> occurs index t1 || occurs index t2
  | FTV i -> i = index

let rec instantiateGTVs map substitutions gtvs = function
  | (TUnit | TString | TNumber | TBool | FTV _) as t -> t, map, substitutions
  | TArray t ->
      let t_, map_,  substitutions_ = instantiateGTVs map substitutions gtvs t in
      TArray t_, map_, substitutions_
  | TPair(t1, t2) ->
      let t1_, map_, substitutions_ = instantiateGTVs map substitutions gtvs t1 in
      let t2_, map__, substitutions__ = instantiateGTVs map_ substitutions_ gtvs t2 in
      TPair(t1_, t2_), map__, substitutions__
  | TFun(t1, t2) ->
      let t1_, map_, substitutions_ = instantiateGTVs map substitutions gtvs t1 in
      let t2_, map__, substitutions__ = instantiateGTVs map_ substitutions_ gtvs t2 in
      TFun(t1_, t2_), map__, substitutions__
  | GTV x ->
      if IntSet.mem x gtvs then
        GTV x, map, substitutions
      else if IntMap.mem x map then
        FTV(IntMap.find x map), map, substitutions
      else
        let alpha, substitutions_ = newFreeVariable substitutions in
        FTV alpha, IntMap.add x alpha map, substitutions_

let rec addGTVs set = function
  | TUnit
  | TString
  | TNumber
  | TBool
  | FTV _ -> set
  | TArray t -> addGTVs set t
  | TPair(t1, t2)
  | TFun(t1, t2) ->
      let set_ = addGTVs set t1 in
      addGTVs set_ t2
  | GTV x -> IntSet.add x set

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
    | TUnit, TUnit
    | TString, TString
    | TNumber, TNumber
    | TBool, TBool -> Some(subtitutions)
    | GTV a, GTV b when a = b -> Some(subtitutions)
    | TArray a, TArray b -> unifyInternal subtitutions a b
    | TPair (a1, a2), TPair (b1, b2) 
    | TFun (a1, a2), TFun (b1, b2) ->(match unifyInternal subtitutions a1 b1 with
      | Some(substitutions2) -> unifyInternal substitutions2 a2 b2
      | None -> None
      )
    | _ -> None

let unify substitutions a b = match unifyInternal substitutions a b with
  | Some substitutions -> Some(substitutions, applySubstitutions substitutions a)
  | None -> None

let rec literalConstraints substitutions = function
  | Unit -> substitutions, TUnit
  | Number _ -> substitutions, TNumber
  | String _ -> substitutions, TString
  | Bool _ -> substitutions, TBool
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
  | Function _ ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      substitutions3, TFun(FTV alpha, FTV beta)
      (* Should not happen in normal operation, so this is going to be enough *)

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
  | ArrayClone ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TArray(FTV alpha), TArray(FTV alpha)
  | ArrayLen ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TNumber, TArray(FTV alpha)
  | Not -> substitutions, TBool, TBool

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
  | Apply ->
      (* This looks a bit off *)
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      substitutions3, FTV beta, TFun(FTV alpha, FTV beta), FTV alpha
  | GTEQ -> substitutions, TBool, TNumber, TNumber
  | ArrayIndex ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, FTV alpha, TArray(FTV alpha), TNumber
  | Seq ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, FTV alpha, TUnit, FTV alpha
  | ArrayMake ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TArray (FTV alpha), TNumber, FTV alpha
  | Repeat ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TArray (FTV alpha), TNumber, TFun(TNumber, FTV alpha)
  | For ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      substitutions3, TArray(FTV beta), TArray(FTV alpha), TFun(TNumber, TFun(FTV alpha, FTV beta))
  | EQ 
  | GT -> substitutions, TBool, TNumber, TNumber
  | And
  | Or -> substitutions, TBool, TBool, TBool

(* Result: state, result, operand1, operand2, operand3 *)
let ternaryOpConstraints substitutions = function
  | ArraySet ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TUnit, TArray(FTV alpha), TNumber, FTV alpha
  | ArraySlice ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TArray(FTV alpha), TArray(FTV alpha), TNumber, TNumber

let nAryOpConstraints substitutions n = function
  | ArrayForm ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      substitutions2, TArray(FTV alpha), BatList.make n (FTV alpha)

let pairFormIfSome second = function
  | Some first -> Some(first, second)
  | None -> None

let rec inferTypeInternal substitutions tExpected position holeMap variableMap gtvs = function
  | Literal v ->
      let substitutions2, tReturn = literalConstraints substitutions v in
      unifyInternal substitutions2 tExpected tReturn |> pairFormIfSome holeMap
  | Constant c ->
      let substitutions2, tReturn = inferTypeConstant substitutions c in
      unifyInternal substitutions2 tExpected tReturn |> pairFormIfSome holeMap
  | UnaryOp(o, e1) ->
      let substitutions2, tReturn, t1 = unaryOpConstraints substitutions o in
      (match unifyInternal substitutions2 tExpected tReturn with
        | Some substitutions3 -> inferTypeInternal substitutions3 t1 (posPush position 0) holeMap variableMap gtvs e1
        | None -> None)
  | BinaryOp(o, e1, e2) ->
      let substitutions2, tReturn, t1, t2 = binaryOpConstraints substitutions o in
      (match unifyInternal substitutions2 tExpected tReturn with
        | Some substitutions3 -> (match inferTypeInternal substitutions3 t1 (posPush position 0) holeMap variableMap gtvs e1 with
          | Some(substitutions4, holeMap2) -> inferTypeInternal substitutions4 t2 (posPush position 1) holeMap2 variableMap gtvs e2
          | None -> None)
        | None -> None)
  | TernaryOp(o, e1, e2, e3) ->
      let substitutions2, tReturn, t1, t2, t3 = ternaryOpConstraints substitutions o in
      (match unifyInternal substitutions2 tExpected tReturn with
        | Some substitutions3 -> (match inferTypeInternal substitutions3 t1 (posPush position 0) holeMap variableMap gtvs e1 with
          | Some(substitutions4, holeMap2) -> (match inferTypeInternal substitutions4 t2 (posPush position 1) holeMap2 variableMap gtvs e2 with
            | Some(substitutions5, holeMap3) -> inferTypeInternal substitutions5 t3 (posPush position 2) holeMap3 variableMap gtvs e3
            | None -> None)
          | None -> None)
        | None -> None)
  | NAryOp(o, es, 0, []) -> 
      let rec helper state ts es n = match state, ts, es with
        | _, [], [] -> state
        | None, _, _ -> None
        | Some (substitutions, holeMap), tHead::tRest, eHead::eRest ->
            helper (inferTypeInternal substitutions tHead (posPush position n) holeMap variableMap gtvs eHead) tRest eRest (n+1)
        | _ -> raise (Invalid_argument "fold_left2_option_map")
      in
      let substitutions2, tReturn, ts = nAryOpConstraints substitutions (List.length es) o in
      let substitutions3 = unifyInternal substitutions2 tExpected tReturn in
        helper (substitutions3 |> pairFormIfSome holeMap) ts es 0
  | NAryOp _ -> raise IntermediateStateError
  | Let(v, eValue, eEvaluated) ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      (match inferTypeInternal substitutions2 (FTV alpha) (posPush position 0) holeMap variableMap gtvs eValue with
        | Some(substitutions3, holeMap2) -> inferTypeInternal substitutions3 tExpected (posPush position 1) holeMap2 (StringMap.add v (FTV alpha) variableMap) gtvs eEvaluated
        | None -> None)
  | Variable v ->
      (try (
        let t = StringMap.find v variableMap |> applySubstitutions substitutions in
        let t_, _, substitutions_ = instantiateGTVs IntMap.empty substitutions gtvs t in
        unifyInternal substitutions_ tExpected t_
        |> pairFormIfSome holeMap
      ) with Not_found -> None)
  | Function (recursiveName, argumentName, None, e1) ->
      let alpha, substitutions2 = newFreeVariable substitutions in
      let beta, substitutions3 = newFreeVariable substitutions2 in
      let variableMap2 = (match recursiveName with
        | Some name -> StringMap.add name (TFun(FTV alpha, FTV beta)) variableMap
        | None -> variableMap) in
      let variableMap3 = StringMap.add argumentName (FTV alpha) variableMap2 in
      (match unifyInternal substitutions3 tExpected (TFun(FTV alpha, FTV beta)) with
        | Some substitutions4 -> inferTypeInternal substitutions4 (FTV beta) (posPush position 0) holeMap variableMap3 gtvs e1
        | None -> None)
  | Function (recursiveName, argumentName, Some alpha, e1) ->
      let beta, substitutions2 = newFreeVariable substitutions in
      let variableMap2 = (match recursiveName with
        | Some name -> StringMap.add name (TFun(alpha, FTV beta)) variableMap
        | None -> variableMap) in
      let variableMap3 = StringMap.add argumentName alpha variableMap2 in
      (match unifyInternal substitutions2 tExpected (TFun(alpha, FTV beta)) with
        | Some substitutions3 -> inferTypeInternal substitutions3 (FTV beta) (posPush position 0) holeMap variableMap3 (addGTVs gtvs alpha) e1
        | None -> None)
  | If(condition, then_, else_) ->
      (match inferTypeInternal substitutions TBool (posPush position 0) holeMap variableMap gtvs condition with
        | None -> None
        | Some(substitutions2, holeMap2) ->
            (match inferTypeInternal substitutions2 tExpected (posPush position 1) holeMap2 variableMap gtvs then_ with
              | None -> None
              | Some(substitutions3, holeMap3) -> inferTypeInternal substitutions3 tExpected (posPush position 2) holeMap3 variableMap gtvs else_))
  | While(condition, body) ->
      (match unifyInternal substitutions tExpected TUnit with
        | Some substitutions2 -> (match inferTypeInternal substitutions2 TBool (posPush position 0) holeMap variableMap gtvs condition with
          | Some(substitutions3, holeMap2) -> inferTypeInternal substitutions3 TUnit (posPush position 1) holeMap2 variableMap gtvs body
          | None -> None)
        | None -> None)
  | Hole -> Some (substitutions, PosMap.add position (tExpected, variableMap, gtvs) holeMap)

let inferTypeValue v = let _, t = literalConstraints emptySubstitutionList v in t

let inferTypeContinuable ?vars:(variables=StringMap.empty) e =
  let alpha, substitutions = newFreeVariable emptySubstitutionList in
  match inferTypeInternal substitutions (FTV alpha) emptyPosition PosMap.empty variables IntSet.empty e with
    | Some (substitutions2, holeMap) -> Some (applySubstitutions substitutions2 (FTV alpha), substitutions2, holeMap)
    | None -> None

let inferType ?vars:(variables=StringMap.empty) e =
  match inferTypeContinuable ~vars:variables e with
    | Some(t, _, _) -> Some t
    | None -> None

let fitsHole ?vars:(variables=StringMap.empty) expression position subExpression =
  replaceSubtree expression position subExpression
  |> inferType ~vars:variables
  |> Option.is_some

let whatFits ?vars:(variables=StringMap.empty) expression position =
  match inferTypeContinuable ~vars:variables expression with 
    | Some(_, substitutions, holeMap) ->
        let tExpected, variableMap, gtvs = PosMap.find position holeMap in
        let variableCandidates = StringMap.bindings variableMap |> List.map (fun (name, _) -> (Variable name, name)) in
        let candidates = insertableExpressions @ variableCandidates in
        List.filter (fun (expression, _) -> inferTypeInternal substitutions tExpected position holeMap variableMap gtvs expression |> Option.is_some) candidates
    | None -> []
