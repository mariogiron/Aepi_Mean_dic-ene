import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MiPrimeraApp';
  identificador: string;
  campoTexto: string;

  persona: any;

  constructor() {
    this.campoTexto = 'valor inicial';
    this.identificador = 'valorIdentificador';
    setTimeout(() => this.title = 'otro valor', 3000);

    this.persona = {};
  }

  mostrarSaludo(): string {
    return 'Saludo desde el método';
  }

  pulsaBoton($event: any, pNum: number): void {
    console.log('El botón se ha pulsado!');
    $event.target.style.color = 'red';
  }

  eligeColor($event) {
    this.title = $event.target.value;
  }

  cronoFinaliza($event) {
    console.log($event);
  }

}
