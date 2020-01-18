import { INCREMENTAR } from './../actions';
import { IAppState } from './../store';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificador-contador',
  templateUrl: './modificador-contador.component.html',
  styleUrls: ['./modificador-contador.component.css']
})
export class ModificadorContadorComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onClick() {
    this.ngRedux.dispatch({
      type: INCREMENTAR
    });
  }

}
