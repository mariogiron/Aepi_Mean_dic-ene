import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() texto: string;

  constructor() {
    console.log(this.texto);
  }

  ngOnInit() {
    console.log(this.texto);
  }

}
