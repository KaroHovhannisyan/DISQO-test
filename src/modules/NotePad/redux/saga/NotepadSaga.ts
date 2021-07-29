import { AxiosResponse } from "axios";
import { takeLatest, call, put, select } from "redux-saga/effects";
// import {
//   GET_CITIES_BY_COUNTRY,
//   getCitiesByCountrySuccess,
//   setLoading
// } from '../actions/GetCities';
// import CitiesService from '../../service/CitiesService';
import { RootState } from "../../../../redux/reducers";

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
    // const { data }: AxiosResponse<{ data: string[] }> = yield call(
    //   CitiesService.getCitiesByCountry,
    //   action.payload.country
    // );
    // yield put(getCitiesByCountrySuccess(action.payload.country, data.data));
  } catch (e) {
    console.error(e);
  }
}

export default function* fetchDataWatcher() {
  yield takeLatest("GET_CITIES_BY_COUNTRY", getNotepads);
}
