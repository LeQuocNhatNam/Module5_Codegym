import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeService} from "../../../service/customer/customer-type-service";
import {CustomerService} from "../../../service/customer/customer-service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomerType} from "../../../model/customer/customer-type";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: string;
  customerForm: FormGroup;
  customerTypes: CustomerType[];

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCustomerTypes();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id");
    })
    this.customerService.findCustomerById(this.id).subscribe(item => {
      this.customerForm = new FormGroup({
        name: new FormControl(item.name, [Validators.required]),
        dateOfBirth: new FormControl(item.dateOfBirth, Validators.required),
        gender: new FormControl(item.gender),
        idCard: new FormControl(item.idCard, [Validators.pattern('^\\d{9}$|^\\d{12}$')]),
        phoneNumber: new FormControl(item.phoneNumber, [Validators.required, Validators.pattern('^09[01]\\d{7}$|^\\(84\\)\\+9[01]\\d{7}$')]),
        email: new FormControl(item.email, Validators.email),
        address: new FormControl(item.address, Validators.required),
        customerType: new FormControl(this.customerTypes.find(c => c.id === item.customerType.id))
      })
    });

  }

  getCustomerTypes() {
    this.customerTypeService.getAll().subscribe(item => {
      this.customerTypes = item;
    })
  }

  editCustomer() {
    this.customerService.editCustomer(this.id, this.customerForm.value);
  }
}
