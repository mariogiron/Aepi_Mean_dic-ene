import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: any[];

  constructor() {
    this.arrTareas = [];
  }

  handleTareaEnviada($event) {
    this.arrTareas.push({ ...$event });
    console.log(this.arrTareas);
  }

}
