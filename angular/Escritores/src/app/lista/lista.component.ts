import { Escritor } from './../models/escritor.model';
import { EscritoresService } from './../escritores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    // const escritores = this.escritoresService.getAll();
    // console.log(escritores);

    // this.escritoresService.getAllPromise()
    //   .then((arrEscritores) => {
    //     this.listaEscritores = arrEscritores;
    //   }).catch(err => {
    //     console.log(err);
    //   });

    this.listaEscritores = await this.escritoresService.getAllPromise_v2();
  }

  async cambioPais($event) {
    this.listaEscritores = await this.escritoresService.getByPais($event.target.value);
  }

}
