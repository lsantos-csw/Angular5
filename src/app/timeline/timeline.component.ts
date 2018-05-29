import { Component, OnInit } from '@angular/core';
import { ITimeline } from './timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  start_date: Date = new Date('2017-05-01');
  end_date: Date = new Date('2017-05-20');
  fullTime: number;
  timelineData: ITimeline[];
  toApprove: ITimeline[];
  today: Date = new Date();

  ngOnInit() {
    this.fullTime = this.end_date.getTime() - this.start_date.getTime();
    this.mapData();
  }

  mapData() {
    this.timelineData = [
      {isFirstElement: true, isLastElement: false, width: 25, prices: ['WSP net: 25.000 €'], state: 'PAST'},
      {isFirstElement: false, isLastElement: false, width: 35, prices: ['WSP net: 25.000 €'], state: 'CURRENT'},
      {isFirstElement: false, isLastElement: true, width: 40, prices: ['RRPGross: 30.000'], state: 'FUTURE'},
    ];

    this.toApprove = [
      {isFirstElement: false, isLastElement: true, width: 25, prices: ['RRPGross: 30.000',
        'RRP net: 29000', 'WSP net: 25.000 €'], state: 'PAST'}
    ];
  }
}


const DATA = {
  data : [
    {
      start_date: new Date('2017-05-01'), end_date: new Date('2017-05-07'), state: 'ACTUAL'
    },
    {
      start_date: new Date('2017-05-07'), end_date: new Date('2017-05-12'), STATE: 'IN_APPROVAL'
    },
    {
      start_date: new Date('2017-05-12'), end_date: new Date('2017-05-25'), STATE: 'APPROVED'
    }
  ]
};
