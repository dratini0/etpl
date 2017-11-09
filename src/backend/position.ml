open BatDeque

type position = int BatDeque.t

let emptyPosition = empty

let posPush = snoc

let posPop = front

let pos_of_list = of_list

let list_of_pos = to_list
