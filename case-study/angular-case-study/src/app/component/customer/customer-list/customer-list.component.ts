import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {CustomerTypeService} from "../../../service/customer-type-service";
import {CustomerService} from "../../../service/customer-service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer = {};
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
  }


  ngOnInit(): void {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    })
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypes = data;
    })
  }

}
