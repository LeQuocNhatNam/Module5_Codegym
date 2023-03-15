import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type-service";
import {CustomerService} from "../../../service/customer/customer-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer = {};
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  nameDelete: string;
  private id: string;

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    })
    this.customerTypeService.getAll().subscribe(data => {
      this.customerTypes = data;
    })
  }

  deleteCustomer(id: string, name: string) {
    this.id = id;
    this.nameDelete = name;
  }

  onDelete() {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
    });
  }


}
