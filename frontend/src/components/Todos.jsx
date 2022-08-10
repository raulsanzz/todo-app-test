import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos, updateTodo } from "../actions/todoActions";

const Todos = () => {
  const [open, setOpen] = React.useState(false);
  const [todoName, setTodoName] = React.useState("");
  const [todoId, setTodoId] = React.useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const TodoTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: "pre",
    "& small": {
      height: 15,
      width: 50,
      borderRadius: 500,
      boxShadow:
        "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
    },
    "& td": {
      borderBottom: "none",
    },
    "& td:first-of-type": {
      paddingLeft: "16px !important",
    },
  }));

  const handleClose = () => {
    setOpen(false);
  };

  const handleTodo = (event) => {
    setTodoName(event.target.value);
  };

  const handleUpdate = () => {
    dispatch(updateTodo(todoId, todoName));
    window.location.reload();
    dispatch(fetchTodos());
    setOpen(false);
  };

  return (
    <>
      <Card elevation={3} sx={{ pt: "20px", mx: 5 }}>
        <Box overflow="auto">
          <TodoTable>
            <TableHead>
              <TableRow>
                <TableCell sx={{ px: 3 }} align="left" colSpan={4}>
                  Id
                </TableCell>
                <TableCell sx={{ px: 3 }} align="center" colSpan={4}>
                  Name
                </TableCell>
                <TableCell sx={{ px: 0 }} align="center" colSpan={4}>
                  Edit
                </TableCell>
                <TableCell sx={{ px: 0 }} align="center" colSpan={4}>
                  Delete
                </TableCell>
              </TableRow>
              {todos.map((todo) => {
                return (
                  <TableRow key={todo.id} hover>
                    <TableCell
                      colSpan={4}
                      align="left"
                      sx={{ px: 0, textTransform: "capitalize" }}
                    >
                      <Box sx={{ m: 0, ml: 3 }}>{todo.id}</Box>
                    </TableCell>
                    <TableCell sx={{ px: 0 }} align="center" colSpan={4}>
                      <Box sx={{ m: 0, ml: 1 }}>{todo.text}</Box>
                    </TableCell>
                    <TableCell sx={{ px: 0 }} align="center" colSpan={4}>
                      <Button
                        onClick={() => {
                          setOpen(true);
                          setTodoName(todo.text);
                          setTodoId(todo.id);
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                    <TableCell sx={{ px: 0 }} align="center" colSpan={4}>
                      <Button
                        onClick={() => {
                          dispatch(deleteTodo(todo.id));
                          window.location.reload();
                          dispatch(fetchTodos());
                        }}
                      >
                        <DeleteIcon color="error" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableHead>
          </TodoTable>
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Todo"}</DialogTitle>
        <DialogContent style={{ marginTop: "15px" }}>
          <TextField
            id="todoname"
            label="Todo Name"
            variant="outlined"
            size="small"
            value={todoName}
            onChange={handleTodo}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Todos;
