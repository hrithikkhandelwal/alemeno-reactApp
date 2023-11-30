import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "coursedata",
  initialState: initialState,
  reducers: {
    get: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const coursesReducer = coursesSlice.reducer;

export const coursesActions = coursesSlice.actions;

export const coursesSelector = (state) => state.coursesReducer.courses;
