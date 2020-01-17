import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      dni: new FormControl(''),
      age: new FormControl('')
    });
  }

  ngOnInit() {
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const result = await this.usersService.register(this.formulario.value);
    console.log(result);
  }

}
