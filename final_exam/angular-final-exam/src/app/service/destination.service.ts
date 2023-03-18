import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destination} from '../model/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  URL_DESTINATION = 'http://localhost:8080/api/departure';

  constructor(private httpClient: HttpClient) {
  }

  getAllDestinations(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>(this.URL_DESTINATION);
  }
}

