import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "./createReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middleWare = [
    sagaMiddleware,
    createLogger({
      collapsed: true
    })
  ];
  const enhancers = [applyMiddleware(...middleWare)];

  //  If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  // Extensions
  sagaMiddleware.run(rootSaga);

  return store;
}
