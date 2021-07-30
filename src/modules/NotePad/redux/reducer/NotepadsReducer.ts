import { PayloadAction } from "@reduxjs/toolkit";
import { GET_NOTEPADS_SUCCESS } from "../actions";
// import { LOG_IN, LOG_OUT } from '../actions/Profile';
// import { IEmployer } from '../../../Register/interfaces';

export interface IProfileReducerState {
  data: any;
  idMap: any;
  // profile?: IEmployer;
}

const initialState: IProfileReducerState = {
  data: [],
  idMap: {},
};

const notepadReducer = (
  state = initialState,
  action: PayloadAction<{ data: any }>
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTEPADS_SUCCESS:
      return {
        ...state,
        data: payload.data,
        idMap: payload.data.reduce(function (result: any, currentObject: any) {
          result[currentObject.id] = currentObject;
          return result;
        }, {}),
      };
    case "LOG_IN":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default notepadReducer;
