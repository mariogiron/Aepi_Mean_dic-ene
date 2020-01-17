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

  constructor() {
    this.precio = 2908891.139889172;
    this.fechaActual = new Date();
    this.randomNum = Math.random();
  }


  ngOnInit() {
  }

}
