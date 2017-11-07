open DomManipulation

let jquery = Jquery.jquery

let init () = begin
  jquery "#templatepanel_button" |> doSimpleBind "click" (showPanel "templatepanel")
end
