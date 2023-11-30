import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: "userdata",
  initialState: initialState,
  reducers: {
    get: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;

export const userSelector = (state) => state.userReducer.user;
