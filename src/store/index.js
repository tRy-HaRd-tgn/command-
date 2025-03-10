import { createStore } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { userReducer } from "./reducers/userReducer";
import { projectReducer } from "./reducers/projectReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  projects: projectReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // для использования Redux DevTools
);
