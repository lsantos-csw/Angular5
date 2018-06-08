import { Component, ElementRef, Inject, Output, EventEmitter, AfterViewInit, HostListener, Renderer2, Input } from '@angular/core';
import { JQ_TOKEN } from '../../common/jQuery.service';
import { throttle } from '../../shared/common.service';

@Component({
  selector: 'app-draggable-divs',
  templateUrl: './draggable-divs.component.html',
  styleUrls: ['./draggable-divs.component.scss']
})
export class DraggableDivsComponent {

  @Input() sidebarWidth: number;
  @Input() bodyWidth: number;
  @Output() scrollEmitter: EventEmitter<any>  = new EventEmitter<any>();

  constructor(@Inject(JQ_TOKEN) private $: any, private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    // TODO must keep % size of divs
  }

  /**
   * Emits event on scroll of both divs to be dealed with by the parent
   * @param  'scroll'
   * @param  ['$event']
   * @return  void
   */
  @HostListener('scroll', ['$event'])
  onScroll($event: Event, id: string): void {
    throttle(this.scrollEmitter.emit({event, id}), 10);
  }
}
