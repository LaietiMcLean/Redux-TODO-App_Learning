import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input()
  todo!: Todo;
  @ViewChild('inputText') txtInputHTML!: ElementRef;

  checkCompleted!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputHTML.nativeElement.select();
    }, 1)
  }

  editingEnd() {
    this.editing = false;
  }

}
