open DomManipulation

let jquery = Jquery.jquery

let currentGetTextCallback = ref (fun (string:string) -> Js.log string)

let getText current callback = begin
  jquery "#textinput_field" |> Jquery.val_ (`str current) |> ignore;
  currentGetTextCallback := callback; 
  showModal "textinput_modal" ();
end

let handleText () = begin
  hideModals ();
  !currentGetTextCallback (jquery "#textinput_field" |> Jquery.val_get);
end

let init () = begin
  jquery "#textinput_ok" |> doSimpleBind "click" handleText;
  jquery "#textinput_cancel" |> doSimpleBind "click" hideModals;
end
