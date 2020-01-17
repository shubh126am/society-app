export const FLAT = "[Flat]";

//action types
export const actionTypes = {
  DATA_REQUEST: `${FLAT} Data Request`,
  DELETE_REQUEST: `${FLAT} Delete Flat`,
  EDIT_REQUEST: `${FLAT} Edit Flat Request`,
  REFRESH_REQUEST: `${FLAT} Refresh Request`,
  ADD_REQUEST: `${FLAT} Add Request`
};

//async action types
export const asyncActionTypes = {
  LOAD_REQUEST: `${FLAT} Load Request`,
  LOAD_SUCCESS: `${FLAT} Load Success`,
  PAGE_LOAD_SUCCESS: `${FLAT} Page Load Success`,
  DATA_DELETE_SUCCESS: `${FLAT} Data Delete Success`,
  ERROR: `${FLAT} Error`,
  DATA_LOAD: `${FLAT} Data Loading`,
  ADD_LOAD: `${FLAT} ADD Loader`,
  ADD_SUCCESS: `${FLAT} Adding Success`
};

//action creator
export const actionCreators = {
  dataRequest: (page: Number, query: String) => ({
    type: actionTypes.DATA_REQUEST,
    page,
    query
  }),
  deleteRequest: (id: Number, data: any, index: number) => ({
    type: actionTypes.DELETE_REQUEST,
    id,
    data,
    index
  }),
  addRequest: (data: any) => ({
    //FIXME:  add the interface here
    type: actionTypes.ADD_REQUEST,
    data
  }),
  editRequest: (data: any) => ({
    type: actionTypes.EDIT_REQUEST,
    data
  }),
  refreshRequest: () => ({
    type: actionTypes.REFRESH_REQUEST
  })
};

//action creators for async
export const asyncActionCreators = {
  loadRequest: () => ({
    type: asyncActionTypes.LOAD_REQUEST
  }),
  loadSuccess: (data: any, page: number) => ({
    type: asyncActionTypes.LOAD_SUCCESS,
    data,
    page
  }),
  pageLoadSuccess: (data: any, page: Number) => ({
    type: asyncActionTypes.PAGE_LOAD_SUCCESS,
    page,
    data
  }),
  dataLoad: () => ({
    type: asyncActionTypes.DATA_LOAD
  }),
  error: (error: any) => ({
    type: asyncActionTypes.ERROR,
    error
  }),
  deleteDataSuccess: (data: any) => ({
    type: asyncActionTypes.DATA_DELETE_SUCCESS,
    data
  }),
  addLoad: () => ({
    type: asyncActionTypes.ADD_LOAD
  }),
  addSuccess: () => ({
    type: asyncActionTypes.ADD_SUCCESS
  })
};
