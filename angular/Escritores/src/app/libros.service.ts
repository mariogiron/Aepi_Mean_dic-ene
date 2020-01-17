import { Libro } from './models/libro.model';
import { Injectable } from '@angular/core';

import { LIBROS } from './db/libros.db';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritorId(escritorId): Promise<Libro[]> {
    return Promise.resolve(LIBROS.filter(item => item.escritor == escritorId));
  }

}
