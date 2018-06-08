import { TestBed, async } from '@angular/core/testing';
import { CarComponent } from './car.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { EState } from '../common/common.model';
import { By } from '@angular/platform-browser';

describe('CarComponent', () => {
  let fixture = null;
  let comp = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarComponent, TimelineComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CarComponent);
      comp = fixture.componentInstance;
      comp.carName = 'Model X';
      comp.inputData = {
        start_date: new Date('2017-01-01'),
        end_date: new Date('2017-01-20'),
        timelineInput: [
          {
            start_date: new Date('2017-05-01'), end_date: new Date('2017-05-03'), state: EState.PAST
          },
          {
            start_date: new Date('2017-05-03'), end_date: new Date('2017-05-07'), prices: ['WSP net: 20.000 €'], state: EState.PAST
          },
          {
            start_date: new Date('2017-05-07'), end_date: new Date('2017-05-20'), prices: ['WSP net: 25.000 €'], state: EState.PRESENT
          },
          {
            start_date: new Date('2017-05-15'), end_date: new Date('2017-05-30'), prices: ['RRPGross: 30.000',
              'RRP net: 29000', 'WSP net: 25.000 €'], state: EState.IN_APPROVAL
          }
        ]
      };
    });
  }));
  it('should create the car component', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*it('should call buttonClick on button click', async(() => {
    spyOn(comp, 'buttonClick');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(comp.buttonClick).toHaveBeenCalled();
    });
  }));*/
});
