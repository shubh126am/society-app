import { all } from "redux-saga/effects";
import authSaga from "../container/LoginPage/saga";
import flatSaga from "../container/FlatPage/saga";
export default function*() {
  yield all([authSaga, flatSaga]);
}
