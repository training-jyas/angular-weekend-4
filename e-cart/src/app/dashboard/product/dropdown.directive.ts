import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {
    @HostBinding('class.open') toggleOpen: boolean;

    @HostListener('click') onClick() {
        this.toggleOpen = !this.toggleOpen;
    }
}
