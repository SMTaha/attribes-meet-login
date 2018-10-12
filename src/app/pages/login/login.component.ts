import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {LoginService} from './login.service';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css'], providers: [LoginService]})
export class LoginComponent implements OnInit {

  errMsg: string;
  form: FormGroup;
  invalidCredentials = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private location: Location private loginService : LoginService) {}

  ngOnInit() {
    this.form = this
      .formBuilder
      .group({
        email: this
          .formBuilder
          .control('', [Validators.required, Validators.email]),
        password: this
          .formBuilder
          .control('', [Validators.required])
      });
  }

  handleSubmit() {
    this.errMsg = '';
    this.loginService.login(this.form.value).subscribe(res => {
      if (res['error'] !== 'Login success') {
        this.errMsg = res['error'] as string;
      } else {
        window.location.href = ('www.google.com');
      }
    });
  }

  get email() {
    return this
      .form
      .get('email');
  }

  get password() {
    return this
      .form
      .get('password');
  }
}
