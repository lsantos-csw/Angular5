import { Injectable } from '@angular/core';
import { ICar, EState, IModel } from '../common/common.model';

@Injectable()
export class CarService {

  getCars(): IModel[] {
    return CARS;
  }
}

export const CARS = [
  {
    model: 'ADIDAS',
    id : 1,
    sub_models: [{
      name: 'stan smith',
      price_info: [
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
        }
        /*,
        {
          start_date: new Date('2017-05-15'), end_date: new Date('2017-05-30'), prices: ['RRPGross: 30.000',
            'RRP net: 29000', 'WSP net: 25.000 €'], state: EState.IN_APPROVAL
        }
        */
      ]
    }]
  }
];
