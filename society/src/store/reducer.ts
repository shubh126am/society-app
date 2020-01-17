import { combineReducers } from "redux-immutable";
import authReducer from "../container/LoginPage/reducer";
import flatReducer from "../container/FlatPage/reducer";

export default combineReducers({
  authentication: authReducer,
  flats: flatReducer
});
