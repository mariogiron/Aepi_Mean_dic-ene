import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.textDecoration = 'underline';
  }

}
