import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer-service";
import {FacilityService} from "../../../service/facility/facility.service";
import {Customer} from "../../../model/customer/customer";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm?: FormGroup;
  customers: Customer[] = [];
  facilities: Facility[] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customerList => {
      this.customers = customerList;
      this.facilityService.getAllFacilities().subscribe(facilityList => {
        this.facilities = facilityList;
        this.contractForm = new FormGroup({
          deposit: new FormControl("", [Validators.required,Validators.min(1)]),
          startDate: new FormControl("", Validators.required),
          endDate: new FormControl("", Validators.required),
          customer: new FormControl("",Validators.required),
          facility: new FormControl("",Validators.required)
        })
      })
    })
  }

}
