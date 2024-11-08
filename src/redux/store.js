import { applyMiddleware, createStore } from "redux";
// import counterReducer from "./reducers/counterReducer";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

// Use Redux DevTools extension if available, otherwise use a no-op function
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ((f) => f);
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
