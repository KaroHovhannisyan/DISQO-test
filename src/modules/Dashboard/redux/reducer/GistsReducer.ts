import { PayloadAction } from "@reduxjs/toolkit";
import { GET_PUBLIC_GISTS_SUCCES } from "../actions";
// import { LOG_IN, LOG_OUT } from '../actions/Profile';
// import { IEmployer } from '../../../Register/interfaces';

export interface IProfileReducerState {
  data: any[];
  gistCreatedPage: number;
  idMap: any;
}

const initialState: IProfileReducerState = {
  data: [],
  idMap: {},
  gistCreatedPage: 1,
};

const gistsReducer = (
  state = initialState,
  action: PayloadAction<{ data: any } >
) => {
  const { type, payload: { data } = { data: [] } } = action;
  console.log(data, "dasdas", type);
  switch (type) {
    case GET_PUBLIC_GISTS_SUCCES:
      return {
        ...state,
        data: [...data, ...state.data],
        gistCreatedPage: state.gistCreatedPage + 1,
      };

    default:
      return state;
  }
};

export default gistsReducer;
