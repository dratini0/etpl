open Language
open Position

type t = Language.expression

exception UnknownPositionError of position

let rec split_list n l acc positionBackup =
  match l with
    | x::xs -> 
        if n = 0 then
          acc, x, xs
        else
          split_list (n - 1) xs (x::acc) positionBackup
    | [] -> raise (UnknownPositionError positionBackup)

let rec replaceSubtree_ tree position replacement positionBackup =
  match posPop position with
    | None -> replacement
    | Some(head, rest) -> (
      match head, tree with
        | 0, UnaryOp(o, e0) -> UnaryOp(o, replaceSubtree_ e0 rest replacement positionBackup)
        | 0, BinaryOp(o, e0, e1) -> BinaryOp(o, replaceSubtree_ e0 rest replacement positionBackup, e1)
        | 1, BinaryOp(o, e0, e1) -> BinaryOp(o, e0, replaceSubtree_ e1 rest replacement positionBackup)
        | _, NAryOp(o, es, 0, []) ->
          let taken, element, dropped = split_list head es [] positionBackup in
          let element_ = replaceSubtree_ element rest replacement positionBackup in
          NAryOp(o, BatList.rev_append taken (element_::dropped), 0, [])
        | _, NAryOp _ -> raise IntermediateStateError
        | 0, Let(name, e0, e1) -> Let(name, replaceSubtree_ e0 rest replacement positionBackup, e1)
        | 1, Let(name, e0, e1) -> Let(name, e0, replaceSubtree_ e1 rest replacement positionBackup)
        | 0, Function(recursiveName, argumentName, t_, e) -> Function(recursiveName, argumentName, t_, replaceSubtree_ e rest replacement positionBackup)
        | 0, If(condition, then_, else_) -> If(replaceSubtree_ condition rest replacement positionBackup, then_, else_)
        | 1, If(condition, then_, else_) -> If(condition, replaceSubtree_ then_ rest replacement positionBackup, else_)
        | 2, If(condition, then_, else_) -> If(condition, then_, replaceSubtree_ else_ rest replacement positionBackup)
        | _, _ -> raise (UnknownPositionError positionBackup)
    )

let replaceSubtree tree position replacement =
  replaceSubtree_ tree position replacement position

let rec getSubtree_ tree position positionBackup =
  match posPop position with
  | None -> tree
  | Some(head, rest) -> (
    match head, tree with
      | 0, UnaryOp(_, e0)
      | 0, Function(_, _, _, e0)
      | 0, Let(_, e0, _)
      | 0, BinaryOp(_, e0, _)
      | 0, If(e0, _, _) -> getSubtree_ e0 rest positionBackup
      | 1, Let(_, _, e1)
      | 1, BinaryOp(_, _, e1)
      | 1, If(_, e1, _) -> getSubtree_ e1 rest positionBackup
      | 2, If(_, _, e2) -> getSubtree_ e2 rest positionBackup
      | _, NAryOp(_, es, 0, []) ->
        (try getSubtree_ (List.nth es head) rest positionBackup with
        | Invalid_argument "List.nth" -> raise (UnknownPositionError positionBackup))
      | _, NAryOp _ -> raise IntermediateStateError
      | _, _ -> raise (UnknownPositionError positionBackup)
  )

let getSubtree tree position = getSubtree_ tree position position

let rec firstHoleNAry es accumulator count =
  match es with
    | e::rest -> (match firstHole_ e (posPush accumulator count) with
      | Some pos -> Some pos
      | None -> firstHoleNAry rest accumulator (count + 1)
    )
    | [] -> None

and firstHole_ tree accumulator = match tree with
  | Literal _
  | Constant _
  | Variable _ -> None
  | UnaryOp(_, e0)
  | Function(_, _, _, e0) -> firstHole_ e0 (posPush accumulator 0)
  | Let(_, e0, e1)
  | BinaryOp(_, e0, e1) -> (match firstHole_ e0 (posPush accumulator 0) with
    | Some result -> Some result
    | None -> firstHole_ e1 (posPush accumulator 1))
  | NAryOp(_, es, 0, []) -> firstHoleNAry es accumulator 0
  | NAryOp _ -> raise IntermediateStateError
  | If(condition, then_, else_) ->
    let candidate1 = firstHole_ condition (posPush accumulator 0) in
    let candidate2 =
      if Option.is_some candidate1 then
        candidate1
      else
        firstHole_ then_ (posPush accumulator 1) in
    if Option.is_some candidate2 then
      candidate2
    else
      firstHole_ else_ (posPush accumulator 2)
  | Hole -> Some(accumulator)

let firstHole tree = firstHole_ tree emptyPosition

let rec nextHole_ tree position accumulator positionBackup =
  match posPop position with
  | None ->
    if tree = Hole then
      None
    else
      firstHole_ tree accumulator
  | Some(head, rest) -> (
    match head, tree with
      | 0, UnaryOp(_, e0)
      | 0, Function(_, _, _, e0) -> nextHole_ e0 rest (posPush accumulator 0) positionBackup
      | 0, Let(_, e0, e1)
      | 0, BinaryOp(_, e0, e1) -> (
        match nextHole_ e0 rest (posPush accumulator 0) positionBackup with
          | Some result -> Some result
          | None -> firstHole_ e1 (posPush accumulator 1)
      )
      | 1, Let(_, _, e1)
      | 1, BinaryOp(_, _, e1) -> nextHole_ e1 rest (posPush accumulator 1) positionBackup
      | _, NAryOp(_, es, 0, []) ->
        let _, element, ess = split_list head es [] positionBackup in
        (match nextHole_ element rest (posPush accumulator head) positionBackup with
          | Some position -> Some position
          | None -> firstHoleNAry ess accumulator (head + 1))
      | 0, If(condition, then_, else_) ->
        let candidate1 = nextHole_ condition rest (posPush accumulator 0) positionBackup in
        let candidate2 = if Option.is_some candidate1 then candidate1 else firstHole_ then_ (posPush accumulator 1) in
        if Option.is_some candidate2 then candidate2 else firstHole_ else_ (posPush accumulator 2)
      | 1, If(_, then_, else_) ->
        let candidate1 = nextHole_ then_ rest (posPush accumulator 1) positionBackup in
        if Option.is_some candidate1 then candidate1 else firstHole_ else_ (posPush accumulator 2)
      | 2, If(_, _, else_) -> nextHole_ else_ rest (posPush accumulator 2) positionBackup
      | _, NAryOp _ -> raise IntermediateStateError
      | _, _ -> raise (UnknownPositionError positionBackup)
  )

let nextHole tree position = nextHole_ tree position emptyPosition position
