import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ITimeline } from './timeline.model';
import { EState, ITimelineData, ITimelinePiece } from '../common/common.model';
import { datesOverlap } from '../../shared/common.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  @Input() start_date: Date;
  @Input() end_date: Date;
  @Input() inputData: ITimelinePiece[];
  timelineData: ITimeline[] = [];
  toApprove: ITimeline[] = [];
  today: Date = new Date();
  pricesSizes = 3;

  /**
   * ON @Input Changes we want to recalculate the timeline parameters
   * @return void
   */
  ngOnChanges() {
    console.log(this.start_date);
    console.log(this.end_date);
    console.log(this.inputData);
    this.timelineData = [];
    this.toApprove = [];
    this.mapData();
  }

  /**
   * Builds new array
   * @param  i number of elements in the array
   * @return   Array
   */
  counter(i: number) {
    return new Array(i);
  }

  /**
   * Maps EState to colors
   * @param  state EState
   * @return       void
   */
  getColor(state: EState) {
    switch (state) {
      case EState.PRESENT: return 'blue';
      case EState.PAST: return 'grey';
      case EState.FUTURE: return 'green';
      case EState.NULL: return 'opaque';
      default: return 'yellow';
    }
  }

  /**
   * If the sum of array "toApprove" widths is different than 100(%) then adds a null elements to the start of the array
   * @return void
   */
  arrangeElementsInToApprove() {
    const originalWidth = this.toApprove.map(x => {
      return x.width;
    }).reduce((x, y) => x + y);

    if (originalWidth !== 100) {
      this.toApprove.unshift({ width: 100 - originalWidth, color: this.getColor(EState.NULL) });
    }
  }

  /**
   * Adds data to given array of ITimeline
   * @param  outputArray array where data is to be added
   * @param  inputArray  array to add
   * @return             void
   */
  addInputDataToArray(outputArray: ITimeline[], inputArray: ITimelinePiece[]) {
    const fullTime = this.end_date.getTime() - this.start_date.getTime();
    let startDate: Date;
    let endDate: Date;
    let width: number;
    inputArray.forEach(item => {
      startDate = item.start_date > this.start_date ? item.start_date : this.start_date;
      endDate = item.end_date > this.end_date ? this.end_date : item.end_date;
      width = Math.round(100 * (endDate.getTime() - startDate.getTime()) / fullTime);
      outputArray.push({ width: width, prices: item.prices, color: this.getColor(item.state) });
    });
  }

  /**
   * With input data constructs the arrays to be used in the html, namely "timelineData" and "toApprove"
   * @return void
   */
  mapData() {
    // Timeline data
    const dataToTimelineData = this.inputData.filter(item => {
      // where start_date/end_date is within bounds and IS NOT an IN_APPROVAL price
      return datesOverlap(item.start_date, item.end_date, this.start_date, this.end_date) && item.state !== EState.IN_APPROVAL;
    });

    // add it to array "timelineData"
    this.addInputDataToArray(this.timelineData, dataToTimelineData);
    // ToApprove Data
    const toApproveData = this.inputData.filter(item => {
      // where start_date/end_date is within bounds and IS an IN_APPROVAL price
      return datesOverlap(item.start_date, item.end_date, this.start_date, this.end_date) && item.state === EState.IN_APPROVAL;
    });

    if (toApproveData.length > 0) {
      // add "toApproveData" to array "toApprove"
      this.addInputDataToArray(this.toApprove, toApproveData);

      // Put fake element behind toApprove data
      this.arrangeElementsInToApprove();
    }
  }
}
