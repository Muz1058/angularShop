// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class Highlight {


//   constructor() { }

// }
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  /** optional inputs */
  @Input('appHighlightColor') color: string = 'rgba(238, 15, 15, 0.12)'; // shadow color
  @Input('appHighlightScale') scale: number = 1.02;
  @Input('appHighlightDuration') duration: string = '220ms';

  private originalTransform!: string | null;
  private originalTransition!: string | null;
  private originalBoxShadow!: string | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // ensure element has a smooth transition
    this.originalTransition = this.el.nativeElement.style.transition || null;
    this.renderer.setStyle(this.el.nativeElement, 'transition', `transform ${this.duration} ease, box-shadow ${this.duration} ease`);
  }

  @HostListener('mouseenter')
  onEnter() {
    // save originals
    this.originalTransform = this.el.nativeElement.style.transform || null;
    this.originalBoxShadow = this.el.nativeElement.style.boxShadow || null;

    // apply highlight styles
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', `0 8px 28px ${this.color}`);
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.scale})`);
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '5');
  }

  @HostListener('mouseleave')
  onLeave() {
    // restore originals
    if (this.originalBoxShadow !== null) {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.originalBoxShadow);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    }

    if (this.originalTransform !== null) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
    }

    this.renderer.removeStyle(this.el.nativeElement, 'z-index');
  }
}
