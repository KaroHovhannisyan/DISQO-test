import { PayloadAction } from "@reduxjs/toolkit";
import { deepClone, generateId } from "../../../../utils/helperFunctions";
import { INotepad } from "../../Interfaces";
import { ADD_NOTEPAD_SUCCESS, GET_NOTEPADS_SUCCESS, GET_NOTEPAD_BY_ID, GET_NOTEPAD_BY_ID_SUCCESS, REMOVE_NOTEPAD_BY_ID_SUCCESS } from "../actions";
// import { LOG_IN, LOG_OUT } from '../actions/Profile';
// import { IEmployer } from '../../../Register/interfaces';

export interface IProfileReducerState {
  data: INotepad[];
  idMap: any;
  // profile?: IEmployer;
}

const initialState: IProfileReducerState = {
  data: [],
  idMap: {},
};

const notepadReducer = (
  state = initialState,
  action: PayloadAction<{ data: any } >
) => {
  const { type, payload: { data } = { data: [] } } = action;
  switch (type) {
    case GET_NOTEPADS_SUCCESS:
      return {
        ...state,
        data
      };
    case GET_NOTEPAD_BY_ID_SUCCESS:
       const idMapClone = deepClone(state.idMap);
       idMapClone[data.id] = {
         id: data.id,
         title: data.description,
         notes: Object.keys(data.files).map(key => ({
            title: key,
            description: data.files[key].content,
            id: generateId(),
         }))
         
       }

        return {
          ...state,
          idMap: idMapClone
          
    };
    case ADD_NOTEPAD_SUCCESS:
      const stateClone: IProfileReducerState = deepClone(state);
      stateClone.data.push(data);
      stateClone.idMap[data.id] = data;
      return stateClone;

    case REMOVE_NOTEPAD_BY_ID_SUCCESS:

      return {
        ...state,
        data: state.data.filter(notepad => notepad.id !== action.payload.data)
      }

    default:
      return state;
  }
};

export default notepadReducer;
