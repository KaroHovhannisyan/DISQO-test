import { PayloadAction } from "@reduxjs/toolkit";
import { IGist } from "../../interfaces";
import { GET_PUBLIC_GISTS_SUCCES } from "../actions";

export interface IProfileReducerState {
  filesPerGist: IGist[];
  gistCreated: IGist[];
  page: number;
}

const initialState: IProfileReducerState = {
  filesPerGist: [],
  gistCreated: [],
  page: 1,
};

const gistsReducer = (
  state = initialState,
  action: PayloadAction<{ gistCreated: any; filesPerGist: any }>
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
