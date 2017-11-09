open Language
open Position

type t = Language.expression

exception UnknownPositionError of position

let rec replaceSubtree_ tree position replacement positionBackup =
  match posPop position with
    | None -> replacement
    | Some(head, rest) -> (
      match head, tree with
        | 0, UnaryOp(o, e0) -> UnaryOp(o, replaceSubtree_ e0 rest replacement positionBackup)
        | 0, BinaryOp(o, e0, e1) -> BinaryOp(o, replaceSubtree_ e0 rest replacement positionBackup, e1)
        | 1, BinaryOp(o, e0, e1) -> BinaryOp(o, e0, replaceSubtree_ e1 rest replacement positionBackup)
        | _, _ -> raise (UnknownPositionError positionBackup)
    )

let replaceSubtree tree position replacement =
  replaceSubtree_ tree position replacement position

let rec getSubtree_ tree position positionBackup =
  match posPop position with
  | None -> tree
  | Some(head, rest) -> (
    match head, tree with
      | 0, UnaryOp(_, e0) -> getSubtree_ e0 rest positionBackup
      | 0, BinaryOp(_, e0, _) -> getSubtree_ e0 rest positionBackup
      | 1, BinaryOp(_, _, e1) -> getSubtree_ e1 rest positionBackup
      | _, _ -> raise (UnknownPositionError positionBackup)
  )

let getSubtree tree position = getSubtree_ tree position position

let rec firstHole_ tree accumulator = match tree with
  | Literal _
  | Constant _ -> None
  | UnaryOp(_, e0) -> firstHole_ e0 (posPush accumulator 0)
  | BinaryOp(_, e0, e1) -> (match firstHole_ e0 (posPush accumulator 0) with
    | Some result -> Some result
    | None -> firstHole_ e1 (posPush accumulator 0))
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
      | 0, UnaryOp(_, e0) -> nextHole_ e0 rest (posPush accumulator 0) positionBackup
      | 0, BinaryOp(_, e0, e1) -> (
        match nextHole_ e0 rest (posPush accumulator 0) positionBackup with
          | Some result -> Some result
          | None -> firstHole_ e1 (posPush accumulator 1)
      )
      | 1, BinaryOp(_, _, e1) -> nextHole_ e1 rest (posPush accumulator 1) positionBackup
      | _, _ -> raise (UnknownPositionError positionBackup)
  )

let nextHole tree position = nextHole_ tree position emptyPosition position
