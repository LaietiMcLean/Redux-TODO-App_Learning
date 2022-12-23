import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, filterTypes } from './filter.actions';

export const initialState: filterTypes = 'all';

export const filterReducer = createReducer<filterTypes, Action>(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);
