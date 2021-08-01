/**
 *  FILE: REDUX ROOT REDUCER
 **/

import { combineReducers } from "redux";

// All Reducers - '../../containers/*/reducers'
import notePadsReducer from "../../modules/Notepad/redux/reducer/NotepadsReducer";
import gistsReducer from "../../modules/Dashboard/redux/reducer/GistsReducer";

const rootReducer = combineReducers({
  notepads: notePadsReducer,
  publicGists: gistsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
