import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  URL_CONTRACT = "http://localhost:3000/contracts";
  constructor(private httpClient: HttpClient) {
  }

  getContractList(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.URL_CONTRACT);
  }
}
