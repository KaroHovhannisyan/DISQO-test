import { PayloadAction } from "@reduxjs/toolkit";
import { deepClone, generateId } from "../../../../utils/helperFunctions";
import { INote, INotepad } from "../../Interfaces";
import {
  ADD_NOTEPAD_SUCCESS,
  GET_NOTEPADS_SUCCESS,
  GET_NOTEPAD_BY_ID_SUCCESS,
  REMOVE_NOTEPAD_BY_ID_SUCCESS,
  REMOVE_NOTE_BY_ID_SUCCESS,
} from "../actions";

export interface IProfileReducerState {
  data: INotepad[];
  idMap: { [key: string]: INote };
}

const initialState: IProfileReducerState = {
  data: [],
  idMap: {},
};

const notepadReducer = (
  state = initialState,
  action: PayloadAction<{ data?: any, notepadId?: string, noteId: string }>
) => {
  const { type, payload: { data, notepadId = "", noteId } = { data: [] } } = action;
  const idMapClone = deepClone(state.idMap);
  switch (type) {
    case GET_NOTEPADS_SUCCESS:
      return {
        ...state,
        data,
      };
    case GET_NOTEPAD_BY_ID_SUCCESS:
      idMapClone[data.id] = {
        id: data.id,
        title: data.description,
        notes: Object.keys(data.files).map((key) => ({
          title: key,
          description: data.files[key].content,
          id: generateId(),
        })),
      };

      return {
        ...state,
        idMap: idMapClone,
      };
    case ADD_NOTEPAD_SUCCESS:
      const stateClone: IProfileReducerState = deepClone(state);
      stateClone.data.push(data);
      stateClone.idMap[data.id] = data;
      return stateClone;

    case REMOVE_NOTEPAD_BY_ID_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (notepad) => notepad.id !== action.payload.data
        ),
      };

    case REMOVE_NOTE_BY_ID_SUCCESS: 

    idMapClone[notepadId].notes = idMapClone[notepadId].notes.filter((note: INote) => note.id !== noteId)

    return {
      ...state,
      idMap: idMapClone,
    }
      

    default:
      return state;
  }
};

export default notepadReducer;
