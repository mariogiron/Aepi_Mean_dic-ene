import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {

  precio: number;
  fechaActual: Date;
  randomNum: number;

  prom: Promise<string>;

  textoLargo: string;

  constructor() {
    this.precio = 2908891.139889172;
    this.fechaActual = new Date();
    this.randomNum = Math.random();
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Ha terminado la promesa'), 3000);
    });
    this.textoLargo = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda impedit porro dignissimos ipsa optio, deserunt nobis dicta velit fuga quasi fugiat a minima maiores atque vitae unde magnam. Beatae, vitae!';
  }


  ngOnInit() {
  }

}
