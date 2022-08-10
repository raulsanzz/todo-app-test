import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
