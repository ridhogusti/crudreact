import { combineReducers } from "redux";

import exampleReducer from "./containers/Example/reducer";
import authReducer from "./containers/Auth/reducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer
});

export default rootReducer;
