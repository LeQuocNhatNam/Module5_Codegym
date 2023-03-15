import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private URL_FACILITY = "http://localhost:3000/facilities";

  constructor(private httpClient: HttpClient) {
  }


  getAllFacilities(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.URL_FACILITY);
  }

  findFacilityById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.URL_FACILITY + "/" + id);
  }

}
