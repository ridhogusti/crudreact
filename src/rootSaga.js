import { all } from "redux-saga/effects";
import watchExample from "./containers/Example/saga";
import watchAuth from "./containers/Auth/saga";

export default function* rootSaga() {
  yield all([watchExample(), watchAuth()]);
}
