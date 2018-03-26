import { createStore, applyMiddleware, compose } from "redux";
import isReducer from "../reducers/reducer.js";
import { logger } from "redux-logger";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const store = createStore(isReducer, enhancer);

export default store;
