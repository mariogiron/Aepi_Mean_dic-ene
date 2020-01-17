import { Escritor } from './models/escritor.model';
import { Injectable } from '@angular/core';

import { ESCRITORES } from './db/escritores.db';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  // Devuelve el array directamente
  getAll(): Escritor[] {
    return ESCRITORES;
  }

  // Devuelve una promesa
  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getAllPromise_v2(): Promise<Escritor[]> {
    return Promise.resolve(ESCRITORES);
  }

  getByPais(pais): Promise<Escritor[]> {
    return Promise.resolve(ESCRITORES.filter(item => item.pais === pais));
  }

  getById(escritorId): Promise<Escritor> {
    return Promise.resolve(ESCRITORES.find(item => item.id == escritorId));
  }

}
