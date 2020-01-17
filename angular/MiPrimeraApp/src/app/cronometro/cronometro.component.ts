import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: string;
  @Output() finalizado: EventEmitter<string>;

  constructor() {
    this.finalizado = new EventEmitter();
  }

  ngOnInit() {

  }

  startCrono() {
    let interval = setInterval(() => {
      let inicioInt = parseInt(this.inicio);
      this.inicio = String(inicioInt - 1);
      if (parseInt(this.inicio) === 0) {
        clearInterval(interval);
        this.finalizado.emit('Termina el cronómetro!');
      }
    }, 1000);
  }

}