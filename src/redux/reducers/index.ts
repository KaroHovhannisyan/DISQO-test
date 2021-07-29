/**
 *  FILE: REDUX ROOT REDUCER
 **/

import { combineReducers } from "redux";

// All Reducers - '../../containers/*/reducers'
import notePadsReducer from "../../modules/Notepad/redux/reducer/NotepadsReducer";
//  import suggestionsReducer from '../../modules/Register/redux/reducers/SuggestionsReducer';
//  import profileReducer from '../../modules/Profile/redux/reducers/ProfileReducer';

const rootReducer = combineReducers({
  notepads: notePadsReducer,
  //  suggestions: suggestionsReducer,
  //  profile: profileReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
