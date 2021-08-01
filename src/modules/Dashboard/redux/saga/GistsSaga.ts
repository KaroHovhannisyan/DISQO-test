import { takeLatest, call } from "redux-saga/effects";
import GithubApiClient from "../../../../common/service/GithubApiClient";
import { RootState } from "../../../../redux/reducers";
import {
  GET_PUBLIC_GISTS,
} from "../actions";

const GithubApi = new GithubApiClient();

export function* getPublicGists() {
  try {
    const data: Promise<Response> = yield call(GithubApi.gists.getPublicGists);
    console.log(data, "gists");
    // yield put(getNotepadsSuccess(adaptNotepads(data)));
  } catch (e) {
    console.error(e);
  }
}


export default function* fetchDataWatcher() {
  yield takeLatest(GET_PUBLIC_GISTS, getPublicGists);

}
