import axios from "axios";
import {
  addTodo,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../redux/todosSlice";

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/api/todos`, {
      method: "GET",
    });

    const todos = await response.json();

    dispatch({ type: getTodos, payload: todos });
  } catch (error) {
    console.log(error);
  }
};
export const updateTodo = (id, text) => async (dispatch) => {
  console.log("Running updateTodo");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `http://localhost:5000/api/todos/${id}`,
      { text: text },
      config
    );
    console.log(data);

    dispatch({ type: updateTodos, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (text, checked) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/todos/create`,
      { text: text, isCompleted: checked },
      config
    );

    dispatch({ type: addTodo, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `http://localhost:5000/api/todos/${id}`,
      config
    );

    console.log(data);

    dispatch({ type: deleteTodos, payload: data });
  } catch (error) {
    console.log(error);
  }
};
