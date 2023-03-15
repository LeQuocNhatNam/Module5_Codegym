import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../../model/facility/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  URL_RENT_TYPES = "http://localhost:3000/rentTypes";

  constructor(private httpClient: HttpClient) {
  }

  getAllRentTypes(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.URL_RENT_TYPES);
  }

}
