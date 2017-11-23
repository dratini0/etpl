open DomManipulation

open JquerySafe

let init () = begin
  jquery "#templatepanel_button" |> doSimpleBind "click" (showPanel "templatepanel")
end
