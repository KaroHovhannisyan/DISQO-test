import { INotepad } from "../../Interfaces";

export const GET_NOTEPADS: string = "GET_NOTEPADS";
export const GET_NOTEPADS_SUCCESS: string = "GET_NOTEPADS_SUCCESS";
export const GET_NOTEPADS_FAILED: string = "GET_NOTEPADS_FAILED"; // todo implement functionallity

export const REMOVE_NOTEPAD_BY_ID: string = "REMOVE_NOTEPAD_BY_ID";
export const REMOVE_NOTEPAD_BY_ID_SUCCESS: string =
  "REMOVE_NOTEPAD_BY_ID_SUCCESS";

export const ADD_NOTEPAD: string = "ADD_NOTEPAD";
export const ADD_NOTEPAD_SUCCESS: string = "ADD_NOTEPAD_SUCCESS";

export const EDIT_NOTEPAD: string = "EDIT_NOTEPAD";
export const EDIT_NOTEPAD_SUCCESS: string = "EDIT_NOTEPAD_SUCCESS";

export const GET_NOTEPAD_BY_ID: string = "GET_NOTEPAD_BY_ID";
export const GET_NOTEPAD_BY_ID_SUCCESS: string = "GET_NOTEPAD_BY_ID_SUCCESS";

export const getNotepads = () => ({ type: GET_NOTEPADS });
export const getNotepadsSuccess = (data: any) => ({
  type: GET_NOTEPADS_SUCCESS,
  payload: { data },
});

export const removeNotepadById = (id: string) => ({
  type: REMOVE_NOTEPAD_BY_ID,
  payload: { id },
});

export const removeNotepadByIdSucess = (data: string) => ({
  type: REMOVE_NOTEPAD_BY_ID_SUCCESS,
  payload: { data },
});

export const addNotepad = (notepad: INotepad, cb: () => void) => ({
  type: ADD_NOTEPAD,
  payload: { notepad, cb },
});

export const addNotepadSuccess = (data: INotepad) => ({
  type: ADD_NOTEPAD_SUCCESS,
  payload: { data },
});

export const editNotepad = (data: INotepad, id: string) => ({
  type: EDIT_NOTEPAD,
  payload: { data, id },
});

export const editNotepadSuccess = (data: INotepad) => ({
  type: EDIT_NOTEPAD_SUCCESS,
  payload: { data },
});

export const getNotepadById = (id: string) => ({
  type: GET_NOTEPAD_BY_ID,
  payload: { id },
});

export const getNotepadByIdSuccess = (data: any) => ({
  type: GET_NOTEPAD_BY_ID_SUCCESS,
  payload: { data },
});
