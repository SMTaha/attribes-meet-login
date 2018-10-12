import {environment} from './../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SignupService {

  constructor(private http : HttpClient) {}

  signup(body: { first_name: string, last_name: string, email: string, password: string }) {
    return this
      .http
      .post(`${environment.baseURL}/api/signup`, body);
  }
}
