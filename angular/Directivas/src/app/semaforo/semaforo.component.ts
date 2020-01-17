import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  colorSeleccionado: string;

  constructor() {
    this.colorSeleccionado = 'ambar';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.colorSeleccionado === 'rojo') {
        this.colorSeleccionado = 'ambar';
      } else if (this.colorSeleccionado === 'ambar') {
        this.colorSeleccionado = 'verde';
      } else if (this.colorSeleccionado === 'verde') {
        this.colorSeleccionado = 'rojo';
      }
    }, 1000);
  }

}
