import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @ViewChild('inputText') txtInputHTML!: ElementRef;

  checkCompleted!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputHTML.nativeElement.select();
    }, 1);
  }

  editingEnd() {
    this.editing = false;
    if (this.txtInput.invalid) {
      return;
    } if (this.txtInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.edit({ id: this.todo.id, text: this.txtInput.value })
    );
  }

  remove() {
    this.store.dispatch(actions.remove({id: this.todo.id}))
  }
}
