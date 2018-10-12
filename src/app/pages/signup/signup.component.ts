import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';

import {PasswordComparator} from '@validators/password-comparator';
import { SignupService } from './signup.service';

@Component({selector: 'app-signup', templateUrl: './signup.component.html', styleUrls: ['./signup.component.css']})
export class SignupComponent implements OnInit {
  errMsg = '';
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private signupService: SignupService) {}

  ngOnInit() {
    this.form = this
      .formBuilder
      .group({
        first_name: this.createFormControl([Validators.required]),
        last_name: this.createFormControl([Validators.required]),
        email: this.createFormControl([Validators.required, Validators.email]),
        password: this.createFormControl([Validators.required]),
        confirm_password: this.createFormControl([Validators.required])
      });

    // this
    //   .form
    //   .setValidators(PasswordComparator.comparePassword);
  }

  handleSubmit() {
    this.markAllAsTouched();
    this.errMsg = '';
    if (this.isValid) {
      const { first_name, last_name, email, password } = this.form.value;
      this.signupService.signup({ first_name, last_name, email, password }).subscribe(res => {
        if (!res['error'])  {
          this.router.navigate(['/login']);
        } else {
          this.errMsg = res['message'] as string;
          console.log(this.errMsg);
        }
      });
    }
  }

  createFormControl(validators: ValidatorFn[]) {
    return this
      .formBuilder
      .control('', validators);
  }

  markAllAsTouched() {
    for (const field in this.form.controls) {
      if (this.form.controls.hasOwnProperty(field)) {
        const element = this.form.controls[field];
        element.markAsTouched();
      }
    }
  }

  get isValid() {
    return this.first_name.valid && this.last_name.valid && this.email.valid && this.password.valid && this.confirm_password.valid;
  }

  get first_name() {
    return this
      .form
      .get('first_name');
  }

  get last_name() {
    return this
      .form
      .get('last_name');
  }

  get email() {
    return this
      .form
      .get('first_name');
  }

  get password() {
    return this
      .form
      .get('password');
  }

  get confirm_password() {
    return this
      .form
      .get('confirm_password');
  }
}
