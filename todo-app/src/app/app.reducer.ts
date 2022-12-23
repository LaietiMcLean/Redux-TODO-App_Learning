import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { filterTypes } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { todosReducer } from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[],
  filter: filterTypes
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filter: filterReducer
}
