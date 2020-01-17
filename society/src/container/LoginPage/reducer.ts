import { asyncActionTypes } from "./action";
import { Record } from "immutable";

const authRecord = Record({
  loggedIn: false,
  loggingIn: false,
  user: undefined,
  error: undefined
});

const initialState = authRecord();

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case asyncActionTypes.LOGIN_LOAD:
      return state.merge({
        loggingIn: true,
        loggedIn: false
      });
    case asyncActionTypes.LOGIN_SUCCESS:
      return state.merge({
        loggingIn: false,
        loggedIn: true,
        user: action.token
      });
    case asyncActionTypes.LOGIN_ERROR:
      return state.merge({
        loggedIn: false,
        loggingIn: false,
        error: action.error
      });
    case asyncActionTypes.LOGOUT:
      return authRecord();
    default:
      return state;
  }
}
