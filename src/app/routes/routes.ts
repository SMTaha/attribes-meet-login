import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from 'app/pages/login/login.component';
import {SignupComponent} from 'app/pages/signup/signup.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}
