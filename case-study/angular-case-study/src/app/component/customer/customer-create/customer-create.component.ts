import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerService} from "../../../service/customer/customer-service";
import {CustomerTypeService} from "../../../service/customer/customer-type-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerType();
    this.customerForm = new FormGroup({
      id: new FormControl('', [Validators.required,Validators.pattern('^KH[-]\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl(),
      idCard: new FormControl('', [Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^09[01]\\d{7}$|^\\(84\\)\\+9[01]\\d{7}$')]),
      email: new FormControl('', Validators.email),
      address: new FormControl('', Validators.required),
      customerType: new FormControl()
    });
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe(item => {
      this.customerTypes = item;
    })
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.customerForm.value).subscribe(item => {
      this.router.navigateByUrl("/customer");
    });
  }
}
