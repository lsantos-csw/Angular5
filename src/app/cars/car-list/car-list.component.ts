import { Component, Input, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { ICar, IModel } from '../common/common.model';
import { CarService } from '../services/car.service';
import { addMonthsToDate } from '../../shared/common.service';
import { JQ_TOKEN } from '../../common/jQuery.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  @Input() start_date = new Date('2017-01-01');
  @Input() end_date = new Date('2017-12-31');
  cars: IModel[];
  sidebarWidth = 10; // %
  bodyWidth = 88; // %
  show: Map<number, boolean> = new Map<number, boolean>();

  constructor(private carService: CarService, private el: ElementRef, private renderer: Renderer2
    , @Inject(DOCUMENT) private document: Document, @Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
    this.cars.forEach((car) => {
      this.show.set(car.id, true);
    });
  }

  /**
   * Receives event from toggler
   * @param  event [description]
   * @return       [description]
   */
  onToggle(event) {
    this.show.set(event.id, event.hidden);
  }

  /**
   * On scroll of child component do something
   * @param  any
   * @return       void
   */
  /*onScroll(event: any) {
    const scrollTime = 100;
    const scrolledSidebar = this.document.querySelector('.sidebar > div').scrollTop;
    const scrolledBody = this.document.querySelector('.body').scrollTop;
    const scrolled = this.document.querySelector(`#${event.id}`).scrollTop;
    // if (scrolled !== scrolledBody) {
      this.$('.body').animate({ scrollTop: scrolled }, 0);
    // }
    // if (scrolled !== scrolledSidebar) {
      this.$('.sidebar > div').animate({ scrollTop: scrolled }, 0);
    // }
  }*/

  /**
   * Add one month to start and end dates
   * The change triggers changes in the timeline
   * @return void
   */
  buttonUp() {
    this.start_date = addMonthsToDate(this.start_date, 1);
    this.end_date = addMonthsToDate(this.end_date, 1);
  }

  buttonDown() {
    this.start_date = addMonthsToDate(this.start_date, -1);
    this.end_date = addMonthsToDate(this.end_date, -1);
  }
}
