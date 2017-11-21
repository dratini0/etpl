open Language
open Position

type signinRecord
type stateRecord = {program: expression; hole: position option; clipboard: expression list}
type buttonPressRecord = {buttonNumber: int; expression: expression; hole: position}
type replaceCurrentHoleRecord = {expression: expression; hole: position; newHole: position option}
type holeSelectRecord = {oldHole: position option; newHole: position}
type clipboardCutCopyRecord = {copy: bool; expression: expression; position: position; oldHole: position option; newHole: position option}
type clipboardPasteRecord = {number: int; expression: expression; hole: position option}
type clipboardDeleteRecord = {number: int; expression: expression}
type successfulExecutionRecord = {result: expression}
type runtimeExceptionRecord = {messsage: string; location: position}
type logEvent =
  | Signin of signinRecord
  | State of stateRecord
  | ButtonPress of buttonPressRecord
  | ReplaceCurrentHole of replaceCurrentHoleRecord
  | HoleSelect of holeSelectRecord
  | ClipboardCutCopy of clipboardCutCopyRecord
  | ClipboardPaste of clipboardPasteRecord
  | ClipboardDelete of clipboardDeleteRecord
  | SuccessfulExecution of successfulExecutionRecord
  | RuntimeException of runtimeExceptionRecord

val enque: logEvent -> unit
val init: unit -> unit
