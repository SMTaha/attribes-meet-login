import {environment} from './../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(body : {
    email: string,
    password: string
  }) {
    return this
      .http
      .post(`${environment.baseURL}/api/signin`, body);
  }
}
