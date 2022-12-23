import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, edit, remove, toggle } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Laundry'),
  new Todo('Lunch'),
  new Todo('Clean the house'),
  new Todo('Feed the cats'),
];

export const todosReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(remove, (state, { id }) => state.filter((todo) => todo.id !== id))
);
