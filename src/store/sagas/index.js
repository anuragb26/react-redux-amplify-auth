import { takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import { userLoginSaga } from "./user";

export function* watchAuthenticationSaga() {
  yield takeEvery(actions.USER_LOGIN_INITIATE, userLoginSaga);
}

const actionWatchers = sagaMiddleware => {
  sagaMiddleware.run(watchAuthenticationSaga);
};

export default actionWatchers;
