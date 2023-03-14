import {Component, OnInit} from '@angular/core';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.deleteTask();
    });
  }

  deleteTask() {
    this.todoService.deleteTodo(this.id).subscribe(item => {
      this.router.navigateByUrl('/todo/list');
    });
  }
}
