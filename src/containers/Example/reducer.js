import * as ActionType from "./constants";

const initExample = {
  isLoading: {
    stock: false,
    todo: false
  },
  error: false,
  errorMessage: null,
  todo: null,
  stock: []
};

export const exampleRequest = (state, payload) => {
  return {
    ...state,
    isLoading: true
  };
};

export const exampleSuccess = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    todo: payload.data
  };
};

export const exampleError = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: payload.error
  };
};

export const getStockRequest = (state, payload) => {
  return {
    ...state,
    isLoading: {
      ...state.isLoading,
      stock: true
    }
  };
};
export const getStockSuccess = (state, payload) => {
  console.log(payload);
  return {
    ...state,
    isLoading: {
      ...state.isLoading,
      stock: false
    },
    stock: [...state.stock, ...payload]
  };
};
export const getStockError = (state, payload) => {
  return {
    ...state,
    isLoading: {
      ...state.isLoading,
      stock: false
    },
    error: true,
    errorMessage: payload.error
  };
};

export const saveStockRequest = (state, payload) => {
  return {
    ...state,
    isLoading: {
      ...state.isLoading,
      stock: true
    }
  };
};
export const saveStockSuccess = (state, payload) => {
  return {
    ...state,
    isLoading: {
      ...state.isLoading,
      stock: false
    },
    stock: [...state.stock, payload]
  };
};
export const saveStockError = (state, payload) => {
  return {
    ...state,
    isLoading: {
      ...state.isLoading,
      stock: false
    },
    error: true,
    errorMessage: payload.error
  };
};

const exampleReducer = (state = initExample, action) => {
  switch (action.type) {
    case ActionType.EXAMPLE_REQUEST:
      return exampleRequest(state, action.payload);
    case ActionType.EXAMPLE_SUCCESS:
      return exampleSuccess(state, action.payload);
    case ActionType.EXAMPLE_ERROR:
      return exampleError(state, action.payload);

    case ActionType.GET_STOCK_REQUEST:
      return getStockRequest(state, action.payload);
    case ActionType.GET_STOCK_SUCCESS:
      return getStockSuccess(state, action.payload);
    case ActionType.GET_STOCK_ERROR:
      return getStockError(state, action.payload);

    case ActionType.SAVE_STOCK_REQUEST:
      return saveStockRequest(state, action.payload);
    case ActionType.SAVE_STOCK_SUCCESS:
      return saveStockSuccess(state, action.payload);
    case ActionType.SAVE_STOCK_ERROR:
      return saveStockError(state, action.payload);

    default:
      return state;
  }
};

export default exampleReducer;
