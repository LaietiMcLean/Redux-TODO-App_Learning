import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, toggle } from './todo.actions';

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
  })
);
