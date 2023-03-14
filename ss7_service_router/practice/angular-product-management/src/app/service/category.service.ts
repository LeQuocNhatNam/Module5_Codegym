import {Injectable} from '@angular/core';
import {Category} from "../model/category/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.API_URL);
  }
}
