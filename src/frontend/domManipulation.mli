val getCurrentPanel: unit -> string option
val hidePanels: unit -> unit
val showPanelWithReturn: string -> bool
val showPanel: string -> unit -> unit
val hideModals: unit -> unit
val showModal: string -> unit -> unit
val doSimpleBind: string -> (unit -> unit) -> Jquery.jquery -> unit
val doSimpleFalseBind: string -> (unit -> unit) -> Jquery.jquery -> unit
val hideThrobber: unit -> unit
val init: unit -> unit
