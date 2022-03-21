import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

// using generator function
function* ageUpAsync() {
    // yelied is the same as return
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}