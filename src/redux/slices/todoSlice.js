// store/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find(todo => todo.id === id);
      if (task) task.title = title;
    },
    toggleTask: (state, action) => {
      const task = state.find(todo => todo.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    removeTask: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTask, editTask, toggleTask, removeTask } = todosSlice.actions;
export default todosSlice.reducer;
