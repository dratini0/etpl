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
