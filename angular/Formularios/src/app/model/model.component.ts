import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      edad: new FormControl('', [
        Validators.required,
        this.edadValidator
      ]),
      dni: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)
      ]),
      password: new FormControl(''),
      repite_password: new FormControl('')
    });
  }

  ngOnInit() {
    this.formulario.controls['email'].valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    });
  }

  enviarFormulario() {
    console.log(this.formulario.value);
  }

  validarCampo(controlName) {
    return this.formulario.controls[controlName].errors && this.formulario.controls[controlName].touched;
  }

  edadValidator(control) {
    const value = control.value;
    const edadmax = 65;
    const edadmin = 18;

    if (value === '') {
      return null;
    }

    if (value >= edadmin && value <= edadmax) {
      return null;
    } else {
      return { edadvalidator: { edadmax, edadmin } };
    }
  }

}
