import moment from "moment";
import { takeLatest, call, put, select} from "redux-saga/effects";
import GithubApiClient from "../../../../common/service/GithubApiClient";
import { RootState } from "../../../../redux/reducers";
import { groupByDate } from "../../../../utils/helperFunctions";
import {
  getPublicGistsSuccess,
  GET_PUBLIC_GISTS,
} from "../actions";

const GithubApi = new GithubApiClient();

export function* getPublicGists() {
  try {

    const gistCreatedPage: number = yield select(
      (store: RootState) => store.publicGists.gistCreatedPage
    );

    const data: Promise<any[]> = yield call(GithubApi.gists.getPublicGists, gistCreatedPage);
    //@ts-ignore
    yield put(getPublicGistsSuccess(groupByDate(data.reverse(), 5)));
  } catch (e) {
    console.error(e);
  }
}


export default function* fetchDataWatcher() {
  yield takeLatest(GET_PUBLIC_GISTS, getPublicGists);

}
