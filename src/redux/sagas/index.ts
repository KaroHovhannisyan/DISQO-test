import { all, fork } from "redux-saga/effects";

import notepadSaga from "./../../modules/Notepad/redux/saga/NotepadSaga";

function* rootSaga() {
  yield all([fork(notepadSaga)]);
}

export default rootSaga;
