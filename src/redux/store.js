import { combineReducers } from "redux";
import authentication from "./auth/auth.js";
import template from "./common/template.js";

const rootReducer = combineReducers({
  template,
  authentication,
});

export default rootReducer;
