import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MiPrimeraApp';
  identificador: string;

  constructor() {
    this.identificador = 'valorIdentificador';
    setTimeout(() => this.title = 'otro valor', 3000);
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

}
