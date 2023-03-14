import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  private id: number;
  content: FormControl;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.content = new FormControl('', Validators.required);
  }
}
