open DomManipulation
open JquerySafe

let currentGetLineCallback = ref (fun (string:string) -> Js.log string)

let getLine title current callback = begin
  jquery "#lineinput_title" |> Jquery.text title |> ignore;
  jquery "#lineinput_field" |> Jquery.val_ (`str current) |> ignore;
  currentGetLineCallback := callback; 
  showModal "lineinput_modal" ();
end

let handleLine () = begin
  hideModals ();
  !currentGetLineCallback (jquery "#lineinput_field" |> Jquery.val_get);
end

let init () = begin
  jquery "#lineinput_ok" |> doSimpleBind "click" handleLine;
  jquery "#lineinput_cancel" |> doSimpleBind "click" hideModals;
end
