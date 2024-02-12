import { test_student } from "./testData";
import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "studentSlice",
  initialState: {
    students: test_student ? test_student : [],
    fixed_students: test_student ? test_student : [],
  },
  reducers: {
    setStudents(state, action) {
      state.students = action.payload;
    },
    resetStudents(state) {
      state.students = [];
    },
    setFixedStudents(state, action) {
      state.students = action.payload;
    },
    resetFixedStudents(state) {
      state.students = [];
    },
  },
});

export const {
  setFixedStudents,
  setStudents,
  resetFixedStudents,
  resetStudents,
} = studentSlice.actions;

export default studentSlice.reducer;
