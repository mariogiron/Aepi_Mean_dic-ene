import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('labelNombre', { static: true }) lblNombre: ElementRef;

  constructor() { }

  ngOnInit() {
    this.lblNombre.nativeElement.style.color = 'indigo';
  }

  onSubmit(values) {
    console.log(values);
  }

}
