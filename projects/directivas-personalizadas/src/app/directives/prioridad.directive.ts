import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrioridad]'
})
export class PrioridadDirective {
  @Input() set appPrioridad(prioridad: string) {
    switch (prioridad.toLowerCase()) {
      case 'bajo':
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        break;
      case 'medio':
        this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
        break;
      case 'alto':
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        break;
      default:
        this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
