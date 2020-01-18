import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('verde', style({
        backgroundColor: 'green'
      })),
      state('rojo', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      state('amarillo', style({
        backgroundColor: 'yellow'
      })),
      transition('rojo => amarillo', animate(500)),
      transition('amarillo => verde', [
        style({
          opacity: 0.2
        }),
        animate('1s ease-in')
      ]),
      transition('verde => rojo', animate('.5s')),
      transition('void => *', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate(1000)
      ])
    ])
  ]
})
export class SemaforoComponent implements OnInit {

  color: string;

  constructor() {
    this.color = 'rojo';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    }, 2000);
  }

}
