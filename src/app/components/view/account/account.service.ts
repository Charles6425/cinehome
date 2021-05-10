import { Observable } from 'rxjs';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  baseUrl: String = environment.baseURL
  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${this.baseUrl}/login`, user).toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }

    return false;
  }



  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }


}
