open Language
open Position

module Private = struct
  let currentProgram = ref Hole
  let currentHole = ref (Some emptyPosition)
  let clipboard = ref []
end

let getCurrentProgram () = !Private.currentProgram
let getCurrentHole () = !Private.currentHole
let getClipboard () = !Private.clipboard
