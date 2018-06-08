import { TestBed, async } from '@angular/core/testing';
import { TimelineComponent } from './timeline.component';
import { EState } from './timeline.model';
import { By } from '@angular/platform-browser';

describe('TimelineComponent', () => {
  let fixture = null;
  let comp = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimelineComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TimelineComponent);
      comp = fixture.componentInstance;
      comp.start_date = new Date('2017-05-01');
      comp.end_date = new Date('2017-05-20');
      comp.inputData = [
        {
          start_date: new Date('2018-05-01'), end_date: new Date('2018-05-07'), prices: ['RRPGross: 30.000',
            'RRP net: 29000', 'WSP net: 25.000 €'], state: EState.PAST
        },
        {
          start_date: new Date('2017-05-01'), end_date: new Date('2017-05-07'), prices: ['RRPGross: 30.000',
            'RRP net: 29000', 'WSP net: 25.000 €'], state: EState.PAST
        },
        {
          start_date: new Date('2017-05-07'), end_date: new Date('2017-05-12'), prices: ['TEST'], state: EState.PRESENT
        },
        {
          start_date: new Date('2017-05-12'), end_date: new Date('2017-05-30'), prices: ['TEST'], state: EState.FUTURE
        },
        {
          start_date: new Date('2017-05-17'), end_date: new Date('2017-05-30'), prices: ['TEST'], state: EState.IN_APPROVAL
        }
      ];
    });
  }));
  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(TimelineComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have elements after mapData', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(comp.timelineData.length).toBe(3);
      expect(comp.toApprove.length).toBe(2);
    });
  }));
  it('onlyElements between start-endDate should be rendered', async(() => {
    comp.inputData.push({
      start_date: new Date('2018-05-01'), end_date: new Date('2018-05-07'), prices: ['RRPGross: 30.000',
        'RRP net: 29000', 'WSP net: 25.000 €'], state: EState.PAST
    });
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(comp.timelineData.length).toBe(3);
      expect(comp.toApprove.length).toBe(2);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('ul li:nth-child(2) div div:nth-child(3)').textContent).toBe(' TEST ');
    });
  }));
});
