import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://aepiescuela.ngrok.io/api/users';
  }

  register(pValues) {
    return this.http.post(`${this.baseUrl}/register`, pValues).toPromise();
  }

  login(pValues) {
    return this.http.post(`${this.baseUrl}/login`, pValues).toPromise();
  }

}
