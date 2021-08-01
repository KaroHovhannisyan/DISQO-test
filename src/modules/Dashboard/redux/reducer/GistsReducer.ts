import { PayloadAction } from "@reduxjs/toolkit";
import { GET_PUBLIC_GISTS_SUCCES } from "../actions";
// import { LOG_IN, LOG_OUT } from '../actions/Profile';
// import { IEmployer } from '../../../Register/interfaces';

export interface IProfileReducerState {
  filesPerGist: any;
  gistCreated: any;
  page: number;
}

const initialState: IProfileReducerState = {
  filesPerGist: [],
  gistCreated: [],
  page: 1,
};

const gistsReducer = (
  state = initialState,
  action: PayloadAction<{ gistCreated: any, filesPerGist: any } >
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PUBLIC_GISTS_SUCCES:
      return {
        ...state,
        gistCreated: [...payload.gistCreated, ...state.gistCreated],
        filesPerGist: [...payload.filesPerGist, ...state.filesPerGist],
        page: state.page + 1,
      };

    default:
      return state;
  }
};

export default gistsReducer;
