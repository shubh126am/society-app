import { Record } from "immutable";
import { asyncActionTypes } from "./action";

const flatRecord = Record({
  flatsData: [] as any[],
  loading: false,
  error: null,
  page: 1,
  hasMore: false,
  loadingData: false,
  addingLoader: false
});

const initialState = flatRecord();

const flatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case asyncActionTypes.LOAD_REQUEST:
      return state.merge({
        loading: true
      });
    case asyncActionTypes.ADD_LOAD:
      return state.merge({
        addingLoader: true
      });
    case asyncActionTypes.DATA_LOAD:
      return state.merge({
        loadingData: true
      });
    case asyncActionTypes.DATA_DELETE_SUCCESS:
      return state.merge({
        loadingData: false,
        flatsData: action.data
      });
    case asyncActionTypes.LOAD_SUCCESS:
      return state.merge({
        loadingData: false,
        loading: false,
        flatsData: [...action.data],
        hasMore: action.data.length === 10,
        page: action.page
      });
    case asyncActionTypes.ADD_SUCCESS:
      return state.merge({
        addingLoader: false
      });
    case asyncActionTypes.PAGE_LOAD_SUCCESS:
      const data = [...state.flatsData, ...action.data];
      return state.merge({
        loadingData: false,
        loading: false,
        flatsData: data,
        hasMore: action.data.length === 10,
        page: action.page
      });
    case asyncActionTypes.ERROR:
      return state.merge({
        loadingData: false,
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default flatReducer;
