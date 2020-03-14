import { all, take, takeEvery, put, call, delay } from "redux-saga/effects";
import { actionTypes, asyncActionCreators } from "./action";
import { dataFetch, deleteFlat, addFlat } from "./services";
import { notification } from "antd";
import { history } from "../../App/App";

export interface notificationConfigProps {
  message: string;
  description: string;
  configStyle: string;
}

export const notificationConfig = ({
  message,
  description,
  configStyle
}: notificationConfigProps) => {
  let style = {};

  if (configStyle === "Success") {
    style = {
      background: "#f6ffed",
      border: "1px solid #b7eb8f"
    };
  } else {
    style = {
      background: "#fff1f0",
      border: "1px solid #ffa39e"
    };
  }
  return {
    message,
    description,
    style: style
  };
};

function* pageFetch() {
  while (true) {
    const { page, query } = yield take(actionTypes.DATA_REQUEST);
    yield put(asyncActionCreators.loadRequest());
    yield put(asyncActionCreators.dataLoad());
    try {
      const data = yield call(dataFetch, page, query);
      yield delay(1000);
      if (page <= 1) {
        yield put(asyncActionCreators.loadSuccess(data, page));
      } else {
        yield put(asyncActionCreators.pageLoadSuccess(data, page));
      }
    } catch (error) {
      yield put(asyncActionCreators.error(error));
      notification.error(
        notificationConfig({
          message: "Unable to fetch",
          description: `Network Failure!!`,
          configStyle: "Error"
        })
      );
    }
  }
}

function* deleteFlatRequest() {
  while (true) {
    const { id, data, index } = yield take(actionTypes.DELETE_REQUEST);
    yield put(asyncActionCreators.dataLoad());
    try {
      const response = yield call(deleteFlat, id);
      yield delay(1000);

      const deletedFlat = yield data.splice(index, 1)[0];
      yield put(asyncActionCreators.deleteDataSuccess(data));

      notification.success(
        notificationConfig({
          message: "Delete Flat Successfull",
          description: `FlatNumber : ${deletedFlat.flatNo} Floor : ${deletedFlat.floor} RoomType :  ${deletedFlat.roomType}`,
          configStyle: "Success"
        })
      );
    } catch (error) {
      notification.error(
        notificationConfig({
          message: "Delete Flat UnSuccessfull",
          description: `Unable to Delete!!`,
          configStyle: "Success"
        })
      );
    }
  }
}

function* addFlatRequest() {
  while (true) {
    const { data } = yield take(actionTypes.ADD_REQUEST);
    yield put(asyncActionCreators.addLoad());
    try {
      yield call(addFlat, data);
      yield notification.success(
        notificationConfig({
          message: "Adding Successfull",
          description: `Added Flat Number:${data.flatNo} Room Type : ${data.roomType}`,
          configStyle: "Success"
        })
      );
      yield history.push("/home/flat");
      yield put(asyncActionCreators.addSuccess());
    } catch (error) {
      yield notification.error(
        notificationConfig({
          message: "Unable to add Flat",
          description: "Network Error",
          configStyle: "Error"
        })
      );
      yield put(asyncActionCreators.error(error));
    }
  }
}

export default all([pageFetch(), deleteFlatRequest(), addFlatRequest()]);
