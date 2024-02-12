import { test_courses } from "../student/testData";
import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: {
    courses: test_courses ? test_courses : [],
    fixed_students: test_courses ? test_courses : [],
  },
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    resetCourses(state) {
      state.courses = [];
    },
  },
});

export const { setCourses, resetCourses } = courseSlice.actions;

export default courseSlice.reducer;
