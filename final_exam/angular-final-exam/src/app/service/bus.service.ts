import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  URL_BUSES = 'http://localhost:8080/api/buses';
  URL_DELETE_BUS = 'http://localhost:8080/api/delete-bus';
  URL_UPDATE_BUS = 'http://localhost:8080/api/update-bus';
  URL_FIND_BUS_BY_ID = 'http://localhost:8080/api/find-bus';
  URL_SAVE_BUS = 'http://localhost:8080/api/save-bus';

  constructor(private httpClient: HttpClient) {
  }

  getAllBuses(page: number): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(this.URL_BUSES + '/' + page);
  }

  findBusById(id: number): Observable<Bus> {
    return this.httpClient.get<Bus>(this.URL_FIND_BUS_BY_ID + '/' + id);
  }

  editBus(id: number, bus: Bus): Observable<Bus> {
    return this.httpClient.patch<Bus>(this.URL_UPDATE_BUS + '/' + id, bus);
  }

  deleteBus(id: number): Observable<Bus> {
    return this.httpClient.delete<Bus>(this.URL_DELETE_BUS + '/' + id);
  }

  saveBus(bus: Bus): Observable<Bus> {
    return this.httpClient.post<Bus>(this.URL_SAVE_BUS, bus);
  }

  // sortByDepartureTimeAsc(): Observable<Bus[]> {
  //   return this.httpClient.get<Bus[]>(this.URL_BUSES + '?_sort=departureTime');
  // }
  //
  // sortByDepartureTimeDesc(): Observable<Bus[]> {
  //   return this.httpClient.get<Bus[]>(this.URL_BUSES + '?_sort=departureTime&_order=desc');
  // }
}
