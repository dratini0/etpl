open BatDeque

type position = int BatDeque.t

let emptyPosition = empty

let posPush = snoc

let posPop = front

let pos_of_list = of_list

let list_of_pos = to_list

let rec isInside a b = match front a, front b with
  | _, None -> true
  | None, _ -> false
  | Some(head1, tail1), Some(head2, tail2) -> head1 = head2 && isInside tail1 tail2

let isEmpty = is_empty

let posEqual a b = BatDeque.eq a b

(* Type annotations are meant o ensure that the compare function is specialized *)
let rec posCompare (a:position) (b:position) =
  match posPop a, posPop b with
    | None, None -> 0
    | None, Some _ -> -1
    | Some _, None -> 1
    | Some(aHead, aRest), Some (bHead, bRest) ->
      match compare aHead bHead with
        | 0 -> posCompare aRest bRest
        | x -> x

module Proper = struct
  type t = position
  let compare = posCompare
end
