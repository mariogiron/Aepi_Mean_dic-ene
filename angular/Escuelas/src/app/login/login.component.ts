import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    let arr = [1, 2, 3, 4, 5];
    localStorage.setItem('arrayNumeros', JSON.stringify(arr));

    let nuevoArr = JSON.parse(localStorage.getItem('arrayNumeros'));
    console.log(nuevoArr[0]);
  }

  onSubmit(pValue) {
    this.usersService.login(pValue)
      .then(response => {
        console.log(response);
        localStorage.setItem('user-token', response['success']);
      })
      .catch(err => console.log(err));
  }

}
