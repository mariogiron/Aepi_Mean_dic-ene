import { PlanetasService } from './../planetas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {

  arrPlanetas: any[];
  numPaginas: number;
  currentPage: number;

  constructor(private planetasService: PlanetasService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    this.recuperarPlanetas();
  }

  recuperarPlanetas() {
    this.planetasService.getPlanetas(this.currentPage)
      .then(response => {
        this.arrPlanetas = response['results'];
        this.numPaginas = Math.ceil(response['count'] / 10);
      })
      .catch(error => {
        console.log(error);
      });
  }

  cambioPagina(asc: boolean) {
    this.currentPage = asc ? this.currentPage + 1 : this.currentPage - 1;
    this.recuperarPlanetas();
  }

}
