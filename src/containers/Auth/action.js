import * as ActionType from "./constants";

export const authRequest = data => {
  console.log(data);
  return {
    type: ActionType.AUTH_REQUEST,
    payload: data
  };
};

export const authSuccess = data => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data
  };
};

export const authError = error => {
  return {
    type: ActionType.AUTH_ERROR,
    payload: error
  };
};
