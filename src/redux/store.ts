import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

// This is the root state of the app
export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
  