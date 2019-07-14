import * as ActionType from "./constants";

const initExample = {
  isLoading: false,
  error: false,
  errorMessage: null,
  todo: null
};

export const authRequest = (state, payload) => {
  return {
    ...state,
    isLoading: true
  };
};

export const authSuccess = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    todo: payload.data
  };
};

export const authError = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: payload.error
  };
};

const authReducer = (state = initExample, action) => {
  switch (action.type) {
    case ActionType.AUTH_REQUEST:
      return authRequest(state, action.payload);
    case ActionType.AUTH_SUCCESS:
      return authSuccess(state, action.payload);
    case ActionType.AUTH_ERROR:
      return authError(state, action.payload);
    default:
      return state;
  }
};

export default authReducer;
