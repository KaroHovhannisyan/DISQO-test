import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put } from "redux-saga/effects";
import GithubApiClient from "../../../../common/service/GithubApiClient";
import { adaptNotepads } from "../../dataAdapter/dataAdapter";
import { INote, INotepad, INotepadFile } from "../../Interfaces";
import {
  addNotepadSuccess,
  ADD_NOTEPAD,
  EDIT_NOTEPAD,
  getNotepadByIdSuccess,
  getNotepadsSuccess,
  GET_NOTEPADS,
  GET_NOTEPAD_BY_ID,
  removeNoteByIdSuccess,
  removeNotepadByIdSucess,
  REMOVE_NOTEPAD_BY_ID,
  REMOVE_NOTE_BY_ID,
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
    yield put(removeNotepadByIdSucess(id));
  } catch (e) {
    console.error(e);
  }
}

export function* editNotepadById(
  action: PayloadAction<{
    data: { notepadName?: string; title?: string; description?: string };
    id: string;
  }>
) {
  const {
    payload: { data, id },
  } = action;
  try {
    const { notepadName, title, description } = data;
    if (notepadName) {
      yield call(GithubApi.notepads.update, {
        id,
        description: data.notepadName,
      });
    } else {
      yield call(GithubApi.notepads.update, {
        id,
        files: {
          [`${title}`]: {
            content: description,
          },
        },
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export function* addNotepad(
  action: PayloadAction<{ notepad: INotepad; cb: () => void }>
) {
  const {
    payload: { notepad, cb },
  } = action;

  const files: INotepadFile = {};

  notepad.notes.forEach((note) => {
    files[note.title] = {
      content: note.description,
    };
  });
  try {
    //@ts-ignore
    const data: INotepad = yield call(GithubApi.notepads.create, {
      description: notepad.title,
      files,
    });
    yield put(addNotepadSuccess(data));

    cb();
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
    yield put(getNotepadByIdSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export function* removeNoteById(action: PayloadAction<{ data: INote, id: string }>) {
  const {
    payload: { id, data }, 
  } = action;
  try {
    yield call(GithubApi.notepads.update, {
      id,
      files: {
        [`${data.title}`]: {
          content: "",
        },
      },
    });
    yield put(removeNoteByIdSuccess(id, data.id))
  } catch (e) {
    console.error(e);
  }
}

export default function* fetchDataWatcher() {
  yield takeLatest(ADD_NOTEPAD, addNotepad);
  yield takeLatest(GET_NOTEPADS, getNotepads);
  yield takeLatest(REMOVE_NOTEPAD_BY_ID, removeNotepadById);
  yield takeLatest(EDIT_NOTEPAD, editNotepadById);
  yield takeLatest(GET_NOTEPAD_BY_ID, getNotepadById);
  yield takeLatest(REMOVE_NOTE_BY_ID, removeNoteById);

}

