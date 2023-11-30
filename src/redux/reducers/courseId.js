import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: [],
};

const coursesIdSlice = createSlice({
  name: "courseIddata",
  initialState: initialState,
  reducers: {
    get: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const courseIdReducer = coursesIdSlice.reducer;

export const courseIdActions = coursesIdSlice.actions;

export const courseIdSelector = (state) => state.courseIdReducer.id;
