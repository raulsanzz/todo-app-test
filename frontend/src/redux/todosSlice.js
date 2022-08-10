import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    deleteTodos: (state, action) => {
      console.log(action.payload.id);
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { getTodos, updateTodos, addTodo, deleteTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
