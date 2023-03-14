import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValueConverter} from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countryList = [{
    id: 1,
    name: 'Vietnam'
  },
    {
      id: 2,
      name: 'US'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern('^\\\\+84\\\\d{9,10}$')])
    });
  }

  getEmail() {
    return this.registerForm.get('email');
  }

}
