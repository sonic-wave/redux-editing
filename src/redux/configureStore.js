import {
    combineReducers,
    compose,
    legacy_createStore
  } from "redux";
  
import valueReducer from "./valueReducer";
  
  const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
  function configureStore() {
    return legacy_createStore(
      combineReducers({
        value: valueReducer,
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
  }
  
  export default configureStore;