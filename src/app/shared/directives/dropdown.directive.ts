import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appDropDown]',
    exportAs: 'appDropDown'
})
export class DropdownDirective {
    /**
     * This class adds a certain css class to an element when this element is clicked and removes the class
     * once the element is clicked again.
     */

    @HostBinding('class.open') isOpen = false; //bind variable to css class open

    @HostListener('document:click', ['$event']) toggleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen: false;
    }

    constructor(private elRef: ElementRef){}

}