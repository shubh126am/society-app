import { take, call, put, all } from "redux-saga/effects";
import { actionTypes, asyncActionCreators } from "./action";
import { authService } from "./services";
import { notification } from "antd";
import { history } from "../../App/App";
import { Storage } from "../../utils";

function* Authorize({ username, password, options }: any) {
  try {
    const response = yield call(authService.login, username, password);

    Storage.remember = options.remember;
    Storage.user = JSON.stringify(response);

    return response;
  } catch (error) {
    throw new Error(`There is error:${error}`);
  }
}

function* authSaga() {
  while (true) {
    try {
      let token;
      if (Storage.user) {
        yield put(asyncActionCreators.loginSuccess(Storage.user));
        yield take(actionTypes.LOGOUT_REQUEST);
        yield put(asyncActionCreators.logout());

        Storage.clear();
        history.push("/login");
      } else {
        const data = yield take(actionTypes.LOGIN_REQUEST);

        yield put(asyncActionCreators.loginLoad());

        token = yield call(Authorize, data);
        if (token) {
          yield put(asyncActionCreators.loginSuccess(token));
          history.replace(data.options.redirectTo);

          yield take(actionTypes.LOGOUT_REQUEST);
          yield put(asyncActionCreators.logout());

          Storage.clear();
          history.push("/login");
        }
      }
    } catch (error) {
      yield put(asyncActionCreators.loginError(error));

      notification.error({
        message: "Unable to login",
        description:
          (error.response && error.response.data.detail) || error.message,
        style: {
          background: "#ebccd1"
        }
      });
    }
  }
}

export default all([authSaga()]);
