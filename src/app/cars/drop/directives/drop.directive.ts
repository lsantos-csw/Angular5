import { Directive, OnInit, Inject, ElementRef, Input, Renderer2 } from '@angular/core';
import { JQ_TOKEN } from '../../../common/jQuery.service';


/**
 * This directive manages the dragging of a div over other div
 * @return          void
 */
@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @Input('appDrop') id: any;
  @Input('myOptions') data;

  private el: HTMLElement;

  // pass the ref of the element binded to the directive
  //  (button in the case of NavBarComponent) and get the actual DOM element through ref.nativeElement
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any, private renderer: Renderer2) {
    this.el = ref.nativeElement;
  }


}
