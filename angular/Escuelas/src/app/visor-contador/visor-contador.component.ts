import { IAppState } from './../store';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor-contador',
  templateUrl: './visor-contador.component.html',
  styleUrls: ['./visor-contador.component.css']
})
export class VisorContadorComponent implements OnInit {

  counter: number;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.counter = this.ngRedux.getState().contador;

    this.ngRedux.subscribe(() => {
      const state = this.ngRedux.getState();
      this.counter = state.contador;
    });
  }

}
