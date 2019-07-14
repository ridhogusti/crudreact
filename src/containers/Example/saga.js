import { put, takeLatest, all, call } from "redux-saga/effects";

import * as action from "./action";
import * as ActionType from "./constants";
import API from "../../utils/xhr";
import { stock } from "../../utils/data";

function* example() {
  try {
    const res = yield call(API.get, "/posts");
    yield put(action.exampleSuccess(res));
  } catch (error) {
    yield put(action.exampleError);
  }
}
function* getStock() {
  try {
    // const res = yield call(API.get, "/users");
    yield put(action.getStockSuccess(stock));
  } catch (error) {
    yield put(action.getStockError(error));
  }
}
function* saveStock(data) {
  try {
    const res = yield call(API.post, "/users", data.payload);
    yield put(action.saveStockSuccess(res));
  } catch (error) {
    yield put(action.saveStockError(error));
  }
}
function* editStock(data) {
  try {
    // const res = yield call(API.put, `/users/${data.payload.id}`, data.payload);
    yield put(action.editStockSuccess(data.payload));
  } catch (error) {
    yield put(action.editStockError(error));
  }
}

export default function* watchExample() {
  yield all([
    takeLatest(ActionType.EXAMPLE_REQUEST, example),
    takeLatest(ActionType.GET_STOCK_REQUEST, getStock),
    takeLatest(ActionType.SAVE_STOCK_REQUEST, saveStock),
    takeLatest(ActionType.EDIT_STOCK_REQUEST, editStock)
  ]);
}
