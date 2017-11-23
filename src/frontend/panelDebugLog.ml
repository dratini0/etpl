let jquery = Jquery.jquery (* This can't use the JquerySafe because it would be circular *)

let log message = begin
  Js.log message;
  let logbox = (jquery "#logbox") in
  let current = (logbox |> Jquery.val_get) in
  ignore (logbox |> Jquery.val_ (`str(current ^ message ^ "\n")))
end
