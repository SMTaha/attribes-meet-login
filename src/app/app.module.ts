import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {RoutesModule} from './routes/routes';

import {LoginModule} from './pages/login/login.module';
import {SignupModule} from './pages/signup/signup.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RoutesModule,
    LoginModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
