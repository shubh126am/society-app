//feature
export const APP = "[App]";

// action types
export const actionTypes = {
  LOGIN_REQUEST: `${APP} LOGIN_REQUEST`,
  LOGOUT_REQUEST: `${APP} LOGOUT_REQUEST`
};

// async action types
export const asyncActionTypes = {
  LOGIN_LOAD: `${APP} LOGIN_LOAD`,
  LOGIN_SUCCESS: `${APP} LOGIN_SUCCESS`,
  LOGIN_ERROR: `${APP} LOGIN_ERROR`,
  LOGOUT: `${APP} LOGOUT`
};

export interface RequestParams {
  username: string;
  password: string;
  options: {
    remember: boolean;
    redirectTo: string;
  };
}
//action creators
export const actionCreator = {
  loginRequest: ({ username, password, options }: RequestParams) => {
    return {
      type: actionTypes.LOGIN_REQUEST,
      username,
      password,
      options
    };
  },
  logoutRequest: () => {
    return {
      type: actionTypes.LOGOUT_REQUEST
    };
  }
};

// async action creators
export const asyncActionCreators = {
  loginLoad: () => {
    return {
      type: asyncActionTypes.LOGIN_LOAD
    };
  },
  loginSuccess: (token: any) => {
    return {
      type: asyncActionTypes.LOGIN_SUCCESS,
      token
    };
  },
  loginError: (error: Error) => {
    return {
      type: asyncActionTypes.LOGIN_ERROR,
      error
    };
  },
  logout: () => {
    return {
      type: asyncActionTypes.LOGOUT
    };
  }
};
