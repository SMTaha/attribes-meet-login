import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {SignupComponent} from './signup.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [SignupComponent],
  exports: [SignupComponent]
})
export class SignupModule {}
