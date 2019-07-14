import { put, takeLatest, all, call } from "redux-saga/effects";

import * as action from "./action";
import * as ActionType from "./constants";
import API from "../../utils/xhr";
import { users } from "../../utils/data";
import { USER_AUTH } from "../../utils/constants";

function* auth(data) {
  try {
    const user = users.find(
      x =>
        x.username === data.payload.username &&
        x.password === data.payload.password
    );
    localStorage.setItem(USER_AUTH, JSON.stringify(user));
    if (user !== undefined) {
      data.payload.history.push("/data-entry");
    }
    // const res = yield call(API.get, "/posts");
    yield put(action.authSuccess(user));
  } catch (error) {
    yield put(action.authError(error));
  }
}

export default function* watchExample() {
  yield all([takeLatest(ActionType.AUTH_REQUEST, auth)]);
}
