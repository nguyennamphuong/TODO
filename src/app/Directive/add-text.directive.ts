import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAddText]'
})
export class AddTextDirective {

  El: any = null;

  @Input()
  backgroundColor!: string;
  
  constructor(Element: ElementRef) {
    this.El = Element;
    Element.nativeElement.innerText = "Text is added by appAddText Directive.";
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.El.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.El.nativeElement.style.backgroundColor = "";
  }
}
