import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import * as actionsTodo from 'src/app/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.filterTypes = 'all';
  filters: actions.filterTypes[] = ['all', 'completed', 'pending'];

  pendingItems: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    /*this.store
      .select('filter')
      .subscribe((filter) => (this.currentFilter = filter));*/
      this.store.subscribe(state => {
        this.currentFilter = state.filter;
        this.pendingItems = state.todos.filter(todo => !todo.completed).length
      })
  }

  onChangeFilter(filter: actions.filterTypes) {
    this.store.dispatch(actions.setFilter({ filter }));
  }

  onRemoveCompleted() {
    this.store.dispatch(actionsTodo.removeCompleted())
  }
}
