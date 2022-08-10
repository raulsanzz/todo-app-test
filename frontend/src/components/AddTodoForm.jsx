import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { useDispatch } from "react-redux";
import { createTodo, fetchTodos } from "../actions/todoActions";

const AddTodoForm = () => {
  const [todoName, setTodoName] = React.useState("");

  const dispatch = useDispatch();

  const handleTodo = (event) => {
    setTodoName(event.target.value);
  };

  return (
    <Box
      sx={{ marginBottom: "15px", display: "flex", justifyContent: "center" }}
    >
      <TextField
        sx={{ width: "30rem" }}
        id="todoname"
        label="Todo Name"
        variant="outlined"
        size="small"
        value={todoName}
        onChange={handleTodo}
      />
      <Button
        sx={{ width: "10rem", marginLeft: "15px" }}
        onClick={() => {
          dispatch(createTodo(todoName));
          setTodoName("");
          window.location.reload();
          dispatch(fetchTodos());
        }}
        variant="contained"
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTodoForm;
