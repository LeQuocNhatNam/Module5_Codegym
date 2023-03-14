import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {
  }

  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.API_URL, {...todo});
  }

  deleteTodo(id): Observable<Todo> {
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

  editTodo(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.patch(this.API_URL + '/' + id, todo);
  }
}
