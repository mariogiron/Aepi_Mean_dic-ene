import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.split(' ').map(item => item[0].toUpperCase() + item.substring(1, item.length)).join(' ');
  }

  // transform(value: any, ...args: any[]): any {
  //   const arrPalabras = value.split(' ');
  //   const arrPalabrasNuevas = [];
  //   for (let i = 0; i < arrPalabras.length; i++) {
  //     const nuevaPalabra = arrPalabras[i][0].toUpperCase() + arrPalabras[i].substring(1, arrPalabras[i].length);
  //     arrPalabrasNuevas.push(nuevaPalabra);
  //   }
  //   return arrPalabrasNuevas.join(' ');
  // }

}
