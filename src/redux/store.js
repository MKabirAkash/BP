import { combineReducers } from "redux";
import authentication from "./auth/auth.js";
import template from "./common/template.js";
import studentSlice from "./student/studentSlice.js";
import courseSlice from "./course/courseSlice.js";

const rootReducer = combineReducers({
  template,
  authentication,
  studentSlice,
  courseSlice,
});

export default rootReducer;
