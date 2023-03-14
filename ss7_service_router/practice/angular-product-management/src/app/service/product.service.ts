import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_URL, product);
  }

  updateById(id: number, product: Product): Observable<Product> {
    return this.httpClient.put(this.API_URL + "/" + id, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + "/" + id);
  }

  deleteProduct(idDelete: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + "/" + idDelete);
  }
}
