import { PayloadAction } from "@reduxjs/toolkit";
import { url } from "inspector";
import { takeLatest, call, put, select } from "redux-saga/effects";
import GithubApiClient from "../../../../common/service/GithubApiClient";
import { CREATE_ROUTE_FOR_NOTEPAD } from "../../../../configs/constants";
// import {
//   GET_CITIES_BY_COUNTRY,
//   getCitiesByCountrySuccess,
//   setLoading
// } from '../actions/GetCities';
// import CitiesService from '../../service/CitiesService';
import { RootState } from "../../../../redux/reducers";
import { adaptNotepads } from "../../dataAdapter/dataAdapter";
import { INotepad } from "../../Interfaces";
import {
  addNotepadSuccess,
  ADD_NOTEPAD,
  EDIT_NOTEPAD,
  getNotepadByIdSuccess,
  getNotepadsSuccess,
  GET_NOTEPADS,
  GET_NOTEPAD_BY_ID,
  REMOVE_NOTEPAD_BY_ID,
} from "../actions";

const GithubApi = new GithubApiClient();

export function* getNotepads() {
  try {
    const data: Promise<Response> = yield call(GithubApi.notepads.get);    
    yield put(getNotepadsSuccess(adaptNotepads(data)));
  } catch (e) {
    console.error(e);
  }
}

export function* removeNotepadById(action: PayloadAction<{ id: string }>) {
  const {
    payload: { id },
  } = action;
  try {
    yield call(GithubApi.notepads.delete, id);

    // todo udpdate store
    // yield put(getNotepadsSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export function* editNotePadById(action: PayloadAction<{ id: string }>) {
  const {
    payload: { id },
  } = action;
  try {

    console.log(action);
    // yield call(GithubApi.notepads.delete, id);

    // todo udpdate store
    // yield put(getNotepadsSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export function* addNotepad(
  action: PayloadAction<{ notepad: INotepad; cb: (id: number) => void }>
) {
  const {
    payload: { notepad, cb },
  } = action;
  console.log(notepad.notes);

  const files: any = {};

  notepad.notes.forEach((note) => {
    files[note.title] = {
      content: note.description,
    };
  });
  try {
    const data: Promise<any> = yield call(GithubApi.notepads.create, {
      description: notepad.title,
      files,
    });
    // @ts-ignore
    yield put(addNotepadSuccess(data));

    // @ts-ignore
    cb(data.id);

    // todo udpdate store
  } catch (e) {
    console.error(e);
  }
}

export function* getNotepadById(action: PayloadAction<{ id: string }>) {
  const {
    payload: { id },
  } = action;
  try {

    const data: Promise<any> = yield call(GithubApi.notepads.getById, id);
    // todo udpdate store
    yield put(getNotepadByIdSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* fetchDataWatcher() {
  yield takeLatest(ADD_NOTEPAD, addNotepad);
  yield takeLatest(GET_NOTEPADS, getNotepads);
  yield takeLatest(REMOVE_NOTEPAD_BY_ID, removeNotepadById);
  yield takeLatest(EDIT_NOTEPAD, editNotePadById);
  yield takeLatest(GET_NOTEPAD_BY_ID, getNotepadById);

}
