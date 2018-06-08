import { Component } from '@angular/core';
import { ITimelineData, EState } from './cars/common/common.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Unit Testing';
  /*carName = '220d';
  initialData: ITimelineData = {
    // start_date: new Date('2017-01-01'),
    // end_date: new Date('2017-12-31'),
    timelineInput: [
      {
        start_date: new Date('2017-01-01'), end_date: new Date('2017-02-07'), state: EState.PAST
      },
      {
        start_date: new Date('2017-02-07'), end_date: new Date('2017-05-07'), state: EState.PAST
      },
      {
        start_date: new Date('2017-05-07'), end_date: new Date('2017-08-03'), state: EState.PAST
      },
      {
        start_date: new Date('2017-08-03'), end_date: new Date('2017-12-03'), state: EState.PAST
      },
      {
        start_date: new Date('2017-12-03'), end_date: new Date('2018-05-07'), prices: ['WSP net: 20.000 €'], state: EState.PRESENT
      },
      {
        start_date: new Date('2018-05-07'), end_date: new Date('2020-01-07'), prices: ['WSP net: 25.000 €'], state: EState.FUTURE
      }/*,
      {
        start_date: new Date('2017-05-15'), end_date: new Date('2017-05-30'), prices: ['RRPGross: 30.000',
          'RRP net: 29000', 'WSP net: 25.000 €'], state: EState.IN_APPROVAL
      }
    ]
  };*/
}
