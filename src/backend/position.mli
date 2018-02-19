type position

val emptyPosition: position
val posPush: position -> int -> position
val posPop: position -> (int * position) option
val pos_of_list: int list -> position
val list_of_pos: position -> int list
val isInside: position -> position -> bool
val isEmpty: position -> bool
val posEqual: position -> position -> bool
val posCompare: position -> position -> int
module Proper: sig
  type t = position
  val compare: position -> position -> int
end
