import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHightlightDirective {
    @HostBinding('class.random') random: boolean;
    constructor(
        private elem: ElementRef,
        private renderer: Renderer2) {
            // this.renderer.setStyle(elem.nativeElement, 'background-color', 'yellow');
            this.renderer.addClass(elem.nativeElement, 'paragraph-modified');
            this.random = false;
    }

    @HostListener('mouseenter') onMouseHover() {
        // this.renderer.setStyle(this.elem.nativeElement, 'font-style', 'italic');
        // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'yellow');
        this.renderer.addClass(this.elem.nativeElement, 'highlight');
        this.random = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        // this.renderer.setStyle(this.elem.nativeElement, 'font-style', 'normal');
        // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'transparent');
        this.renderer.removeClass(this.elem.nativeElement, 'highlight');
        this.random = false;
    }
}
