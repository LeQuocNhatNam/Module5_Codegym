// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
