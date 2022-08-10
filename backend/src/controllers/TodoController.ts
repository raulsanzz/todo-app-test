import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Todo } from "../entity/Todo";

const todoRepository = AppDataSource.getRepository(Todo);

export const getAllTodos = async (req: Request, res: Response) => {
  const todos = await todoRepository.find();
  res.json(todos);
};

export const getTodoById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const todo = await todoRepository.findOneBy({ id });
  res.json(todo);
};

export const createTodo = async (req: Request, res: Response) => {
  const createdTodo = todoRepository.create(req.body);
  const savedUser = await todoRepository.save(createdTodo);
  res.json(savedUser);
};

export const updateTodo = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const todo = await todoRepository.findOneBy({ id });
  const updatedTodo = todoRepository.merge(todo, req.body);
  const savedTodo = await todoRepository.save(updatedTodo);
  res.json(savedTodo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deletedTodo = await todoRepository.delete({ id });
  res.json(deletedTodo);
};
