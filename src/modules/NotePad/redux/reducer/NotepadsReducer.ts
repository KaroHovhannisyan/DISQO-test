import { PayloadAction } from '@reduxjs/toolkit';
// import { LOG_IN, LOG_OUT } from '../actions/Profile';
// import { IEmployer } from '../../../Register/interfaces';

export interface IProfileReducerState {
  isLoggedIn: boolean;
  // profile?: IEmployer;
}

const initialState: IProfileReducerState = {
  isLoggedIn: false,
};

const notepadReducer = (
  state = initialState,
  action: PayloadAction<{ employer: any }>
) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, isLoggedIn: false, profile: {} };
    case "LOG_IN":
      return { ...state, isLoggedIn: true, profile: payload.employer };
    default:
      return state;
  }
};

export default notepadReducer;