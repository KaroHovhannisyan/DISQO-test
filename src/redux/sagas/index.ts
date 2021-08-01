import { all, fork } from "redux-saga/effects";

import notepadSaga from "./../../modules/Notepad/redux/saga/NotepadSaga";
import gistsSaga from "./../../modules/Dashboard/redux/saga/GistsSaga";

function* rootSaga() {
  yield all([fork(notepadSaga), fork(gistsSaga)]);
}

export default rootSaga;
