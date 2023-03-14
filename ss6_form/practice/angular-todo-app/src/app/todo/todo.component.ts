import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  todo: Todo;

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllTodoList();
  }

  change() {
    this.todoService.saveTodo({content: this.content.value, complete: false}).subscribe(item => {
      this.getAllTodoList();
      this.content.reset();
    });
  }

  getAllTodoList() {
    this.todoService.getTodoList().subscribe(item => {
      this.todos = item;
    });
  }

  // toggle(i: number) {
  //   this.todos[i].complete = !this.todos[i].complete;
  // }
}
