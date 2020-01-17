import { Escritor } from './../models/escritor.model';
import { EscritoresService } from './../escritores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.escritoresService.getById(params.escritorId).then(escritor => {
        this.detalle = escritor;
      }).catch((err) => {
        console.log(err);
      });
    });
  }

}
