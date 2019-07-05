import { put, delay } from "redux-saga/effects";
import * as actions from "../actions";

export function* userLoginSaga(action) {
  const {
    payload: {
      userCredentials: { username, password }
    }
  } = yield action;
  console.log("user name", username);
  yield put(actions.userLoginStart());
  yield delay(2000); // api simulation
  const user = { info: { userName: "anurag" } };
  yield put(actions.userLoginSuccess(user));
}
