import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: any;

  constructor() { }

  ngOnInit() {
  }

  mostrarTareas() {
    let resultado = '<ul>';
    for (const tarea of this.tareas) {
      resultado += `<li>${tarea.titulo}: ${tarea.texto}</li>`;
    }
    resultado += '</ul>';
    return resultado;
  }

}
