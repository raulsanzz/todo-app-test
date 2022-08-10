import * as express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/TodoController";

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/create", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
