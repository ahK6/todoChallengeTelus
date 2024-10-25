import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const oldTask = [...state.todoList];

      const newTasks = oldTask;

      newTasks.push(action.payload);
      state.todoList = newTasks;
    },
    deleteTask: (state, action) => {
      const currentTask = [...state.todoList];

      const newTasks = currentTask.filter(
        (element) => element.id !== action.payload
      );

      state.todoList = newTasks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = todoSlice.actions;

const tasksReducer = todoSlice.reducer;

export default tasksReducer;
