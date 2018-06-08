import { Directive, OnInit, Inject, ElementRef, Input, Renderer2 } from '@angular/core';
import { JQ_TOKEN } from '../../common/jQuery.service';


/**
 * This directive manages the dragging of a div over other div
 * @return          void
 */
@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {

  private el: HTMLElement;

  // pass the ref of the element binded to the directive
  //  (button in the case of NavBarComponent) and get the actual DOM element through ref.nativeElement
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any, private renderer: Renderer2) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    const dividerEl = this.el.querySelector('.divider');
    const part2El = this.el.querySelector('#part2');
    const part1El = this.el.querySelector('#part1');
    const moverEl = this.el.querySelector('.mover-container');
    const fullWidth = this.el.clientWidth;
    const sidebarWidth = this.el.querySelector('#part1').clientWidth;
    const fsheight = this.el.querySelector('#full-scrollable').clientHeight;
    const halfHeightDivider = fsheight / 2 - moverEl.clientHeight / 2;
    this.renderer.setStyle(dividerEl, 'left', sidebarWidth);
    this.renderer.setStyle(part2El, 'left', sidebarWidth);
    this.renderer.setStyle(moverEl, 'margin-top', halfHeightDivider + 'px');
    const divider = this.$(dividerEl);
    divider.draggable({
      axis: 'x',
      containment: 'parent',
      scroll: false,
      drag: () => {
        const a = parseInt(getComputedStyle(dividerEl).left, 10); // parseInt(this.$(divider).css('left'), 10);
        // TODO on more than maximum width stop
        this.renderer.setStyle(part1El, 'width', (a - 2) + 'px');
        this.renderer.setStyle(part2El, 'width', (fullWidth - a) + 'px');
      }
    });
  }
}
