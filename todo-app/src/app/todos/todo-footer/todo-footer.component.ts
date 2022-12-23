import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.filterTypes = 'all';
  filters: actions.filterTypes[] = ['all', 'completed', 'pending'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('filter')
      .subscribe((filter) => (this.currentFilter = filter));
  }

  onChangeFilter(filter: actions.filterTypes) {
    this.store.dispatch(actions.setFilter({ filter }));
  }
}
