import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight], input'
})

export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'powderblue';
    console.log( `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
