import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from "../model/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_CUSTOMER = "http://localhost:8080/api/customer";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }
}
