import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const userCoursesSlice = createSlice({
  name: "usercoursedata",
  initialState: initialState,
  reducers: {
    get: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const userCoursesReducer = userCoursesSlice.reducer;

export const userCoursesActions = userCoursesSlice.actions;

export const userCoursesSelector = (state) => state.userCoursesReducer.courses;
