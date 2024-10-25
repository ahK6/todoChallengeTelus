import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { todoSlice } from "./todo.store";

export const store = configureStore({
  reducer: {
    todoTasks: tasksReducer,
  },
});
