import { createAction, props } from '@ngrx/store';
import { filterTypes } from '../filter/filter.actions';

export const create = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number, text: string }>()
);

export const remove = createAction(
  '[TODO] Remove Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completed: boolean }>()
);

export const removeCompleted = createAction(
  '[TODO] removeCompleted Todo'
)
