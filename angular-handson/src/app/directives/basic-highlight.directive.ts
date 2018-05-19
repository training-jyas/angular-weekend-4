import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlightDirective]'
})
export class BasicHighlightDirective {
    constructor(private elem: ElementRef) {
        console.log('elem in the directive', this.elem);
        this.elem.nativeElement.style.background = 'red';
        this.elem.nativeElement.className += ' paragraph-modified';
    }
}
