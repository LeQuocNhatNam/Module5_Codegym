import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Departure} from '../model/departure';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {
  URL_DEPARTURE = 'http://localhost:8080/api/departure';

  constructor(private httpClient: HttpClient) {
  }

  getAllDepartures(): Observable<Departure[]> {
    return this.httpClient.get<Departure[]>(this.URL_DEPARTURE);
  }
}
