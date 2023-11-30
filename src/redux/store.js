import { configureStore } from "@reduxjs/toolkit";
import { courseIdReducer } from "./reducers/courseId";
import { coursesReducer } from "./reducers/coursesReducer";
import { userCoursesReducer } from "./reducers/userCoursesReducer";
import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: { coursesReducer, courseIdReducer, userCoursesReducer, userReducer },
});
