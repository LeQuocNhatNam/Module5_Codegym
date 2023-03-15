import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacilityType} from "../../model/facility/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  URL_FACILITY_TYPES = "http://localhost:3000/facilityTypes";
  constructor(private httpClient: HttpClient) { }

  getAllFacilityTypes(): Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(this.URL_FACILITY_TYPES);
  }

}
