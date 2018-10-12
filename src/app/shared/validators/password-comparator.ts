import {FormGroup, ValidatorFn, Validator, ValidationErrors} from '@angular/forms';

export class PasswordComparator {
  static comparePassword : ValidatorFn = (form : FormGroup) : ValidationErrors | null => {
    const password = form.get('password');
    const confirm_password = form.get('confirm_password');

    return password.value !== confirm_password.value
      ? {
        notMatched: true
      }
      : null;
  }
}
