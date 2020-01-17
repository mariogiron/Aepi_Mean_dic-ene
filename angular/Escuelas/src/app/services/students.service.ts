import { Student } from '../models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://aepiescuela.ngrok.io/api/students';
  }

  getAll(): Promise<Student[]> {
    return this.http.get<Student[]>(this.baseUrl).toPromise();
  }
}
