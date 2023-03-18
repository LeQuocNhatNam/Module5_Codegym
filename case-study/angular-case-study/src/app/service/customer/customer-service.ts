import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from "../../model/customer/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_CUSTOMER = "http://localhost:3000/customers";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL_CUSTOMER, {...customer});
  }

  editCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(this.URL_CUSTOMER + "/" + id, customer);
  }

  findCustomerById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_CUSTOMER + "/" + id);
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.URL_CUSTOMER + "/" + id);
  }

  findCustomerByName(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER + "?name_like=" + name);
  }

  sortById(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER + "?_sort=id&_order=desc")
  }

  sortByIdAsc(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER + "?_sort=id")
  }
}
