import { createStore } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // для использования Redux DevTools
);
