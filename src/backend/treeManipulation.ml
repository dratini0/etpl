open Language
open Position

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
