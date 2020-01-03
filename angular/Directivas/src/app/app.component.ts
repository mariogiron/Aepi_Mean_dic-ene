import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  estilosParrafo: any;

  constructor() {
    this.estilosParrafo = {
      color: 'red',
      fontSize: '32px',
      backgroundColor: 'indigo'
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.estilosParrafo.backgroundColor = 'palegoldenrod';
    }, 3000);
  }

}
