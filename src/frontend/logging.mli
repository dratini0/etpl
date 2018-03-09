(*
 * logging.mli
 * Copyright 2017-2018 Balint Kovacs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *)

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
type pageChangeRecord = {next: bool; newStart: int}
type arrayAddRecord = {first: bool; position: position}
type arrayDeleteRecord = {index: int; position: position}
type renameVariableRecord = {position: position; index: int; newName: string}
type loadProgramRecord = {expression: expression; wellTyped: bool}
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
  | EPageChange of pageChangeRecord
  | EArrayAdd of arrayAddRecord
  | EArrayDelete of arrayDeleteRecord
  | ERenameVariable of renameVariableRecord
  | ELoadProgram of loadProgramRecord

val enque: logEvent -> unit
val logState: unit -> unit
val init: unit -> unit
