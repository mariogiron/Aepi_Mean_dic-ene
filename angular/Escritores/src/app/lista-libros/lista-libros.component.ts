import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaImagenes: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
  ) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params => {
      this.librosService.getByEscritorId(params.escritorId)
        .then(this.mapImagenes)
        .then(imagenes => this.listaImagenes = imagenes)
        .catch(error => console.log(error));
    });
  }

  mapImagenes(libros) {
    return libros.map(item => item.imagen);
  }

}
