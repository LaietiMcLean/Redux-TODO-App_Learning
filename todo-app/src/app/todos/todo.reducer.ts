import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { create } from "./todo.actions";

export const initialState: Todo[] = [
  new Todo('Laundry'),
  new Todo('Lunch'),
  new Todo('Clean the house'),
  new Todo('Feed the cats')
];

export const todosReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)])
);
