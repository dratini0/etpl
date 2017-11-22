open Language
open Position

type signinRecord
type stateRecord = {program: expression; hole: position option; clipboard: expression list}
type buttonPressRecord = {buttonNumber: int; expression: expression; hole: position option}
type replaceSubtreeRecord = {expression: expression; position: position; newHole: position option}
type holeSelectRecord = {oldHole: position option; newHole: position}
type clipboardCutCopyRecord = {copy: bool; expression: expression; position: position; oldHole: position option; newHole: position option}
type clipboardPasteRecord = {number: int; expression: expression; hole: position option}
type clipboardDeleteRecord = {number: int; expression: expression}
type successfulExecutionRecord = {result: expression}
type runtimeExceptionRecord = {message: string; expression: expression; location: position}
type logEvent =
  | ESignin of signinRecord
  | EState of stateRecord
  | EButtonPress of buttonPressRecord
  | EReplaceSubtree of replaceSubtreeRecord
  | EHoleSelect of holeSelectRecord
  | EClipboardCutCopy of clipboardCutCopyRecord
  | EClipboardPaste of clipboardPasteRecord
  | EClipboardDelete of clipboardDeleteRecord
  | ESuccessfulExecution of successfulExecutionRecord
  | ERuntimeException of runtimeExceptionRecord

val enque: logEvent -> unit
val logState: unit -> unit
val init: unit -> unit
