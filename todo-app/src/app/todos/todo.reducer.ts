import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { create } from "./todo.actions";

export const initialState: Todo[] = [
  new Todo('First Todo')
];

export const todosReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)])
);
