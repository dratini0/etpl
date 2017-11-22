let jquery = Jquery.jquery

let log message =
  let logbox = (jquery "#logbox") in
  let current = (logbox |> Jquery.val_get) in
  ignore (logbox |> Jquery.val_ (`str(current ^ message ^ "\n")))
