import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    console.log('PASA POR EL GUARD');
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.6) {
      this.router.navigate(['about']);
      return false;
    } else {
      return true;
    }
  }
}
