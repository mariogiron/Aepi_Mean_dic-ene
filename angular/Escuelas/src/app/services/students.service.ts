import { Student } from '../models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://aepiescuela.ngrok.io/api/students';
  }

  getAll(): Promise<Student[]> {
    return this.http.get<Student[]>(this.baseUrl, this.createHttpOptions()).toPromise();
  }

  create(pValue): Promise<Student> {
    return this.http.post<Student>(this.baseUrl, pValue, this.createHttpOptions()).toPromise();
  }

  createHttpOptions() {
    const token = localStorage.getItem('user-token');
    return {
      headers: new HttpHeaders({
        'user-token': token
      })
    };
  }

}
