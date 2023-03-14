import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from "../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  URL_CUSTOMER_TYPE="http://localhost:8080/api/customer-type";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(this.URL_CUSTOMER_TYPE);
  }
}
