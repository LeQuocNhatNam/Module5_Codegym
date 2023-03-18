import {Injectable} from '@angular/core';
import {BusType} from '../model/busType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusTypeService {
  URL_BUS_TYPES = 'http://localhost:8080/api/bus-type';
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BusType[]> {
    return this.httpClient.get<BusType[]>(this.URL_BUS_TYPES);
  }
}
