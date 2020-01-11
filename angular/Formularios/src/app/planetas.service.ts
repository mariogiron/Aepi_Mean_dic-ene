import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http: HttpClient) { }

  getPlanetas(page) {
    return this.http.get(`https://swapi.co/api/planets/?format=json&page=${page}`).toPromise();
  }

}
