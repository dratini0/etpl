open Language

module IntMap = Map.Make(struct type t = int let compare: int -> int -> int = compare end)

type t = int * etplType IntMap.t

let emptySubstitutionList = (0, IntMap.empty)
let newFreeVariable (index, map) = (index, (index + 1, map))
let addSubstitution index substitution (i, map) = (i, IntMap.add index substitution map)
let findSubstitution index (_, map) = if IntMap.mem index map
                                        then (Some (IntMap.find index map))
                                        else None
let mapSubstitutions mapping (i, map) = (i, IntMap.map mapping map)
