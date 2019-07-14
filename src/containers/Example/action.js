import * as ActionType from "./constants";
import axios from "axios";

export const exampleRequest = data => {
  return {
    type: ActionType.EXAMPLE_REQUEST,
    payload: data
  };
};

export const exampleSuccess = data => {
  return {
    type: ActionType.EXAMPLE_SUCCESS,
    payload: data
  };
};

export const exampleError = error => {
  return {
    type: ActionType.EXAMPLE_ERROR,
    payload: error
  };
};

export const getStockRequest = data => {
  return {
    type: ActionType.GET_STOCK_REQUEST,
    payload: data
  };
};
export const getStockSuccess = data => {
  return {
    type: ActionType.GET_STOCK_SUCCESS,
    payload: data
  };
};
export const getStockError = error => {
  return {
    type: ActionType.GET_STOCK_ERROR,
    payload: error
  };
};
export const saveStockRequest = data => {
  return {
    type: ActionType.SAVE_STOCK_REQUEST,
    payload: data
  };
};
export const saveStockSuccess = data => {
  return {
    type: ActionType.SAVE_STOCK_SUCCESS,
    payload: data
  };
};
export const saveStockError = error => {
  return {
    type: ActionType.SAVE_STOCK_ERROR,
    payload: error
  };
};
