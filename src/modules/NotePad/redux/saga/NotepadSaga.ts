import { AxiosResponse } from "axios";
import { takeLatest, call, put, select } from "redux-saga/effects";
// import {
//   GET_CITIES_BY_COUNTRY,
//   getCitiesByCountrySuccess,
//   setLoading
// } from '../actions/GetCities';
// import CitiesService from '../../service/CitiesService';
import { RootState } from "../../../../redux/reducers";
import NotepadService from "../../service/NotepadService";
import { getNotepadsSuccess, GET_NOTEPADS } from "../actions";

export function* getNotepads(action: any) {
  const { payload } = action;
  try {
    // const cities: { [country: string]: string[] } = yield select(
    //   (store: RootState) => store.cities
    // );
    // if (cities[payload.country]) {
    //   return;
    // }
    // yield put(setLoading(action.payload.country));
    const data: Promise<Response> = yield call(NotepadService.getNotepads);

    yield put(getNotepadsSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* fetchDataWatcher() {
  yield takeLatest(GET_NOTEPADS, getNotepads);
}
