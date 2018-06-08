import { TestBed, async } from '@angular/core/testing';
import { TimelineComponent } from '../timeline/timeline.component';
import { By } from '@angular/platform-browser';
import { datesOverlap, addMonthsToDate } from './common.service';

describe('CommonServices', () => {
  it('datesOverlap should have expected behaviour', async(() => {
    const start1 = new Date('2017-01-01');
    let end1 = new Date('2017-12-31');
    const start2 = new Date('2018-01-01');
    const end2 = new Date('2018-01-31');
    let overlap = datesOverlap(start1, end1, start2, end2);
    // dates do not cross
    expect(overlap).toBeFalsy();
    // dates cross
    end1 = new Date('2018-01-01');
    overlap = datesOverlap(start1, end1, start2, end2);
    expect(overlap).toBeTruthy();
    // dates 1 are containing dates2
    end1 = new Date('2018-05-01');
    overlap = datesOverlap(start1, end1, start2, end2);
    expect(overlap).toBeTruthy();
  }));
  it('datesOverlap should return false on null inputs', async(() => {
    const start1 = null;
    const end1 = null;
    const start2 = null;
    const end2 = null;
    const overlap = datesOverlap(start1, end1, start2, end2);
    expect(overlap).toBeFalsy();
  }));
  it('datesOverlap should return false on undefined inputs', async(() => {
    const start1 = undefined;
    const end1 = undefined;
    const start2 = undefined;
    const end2 = undefined;
    const overlap = datesOverlap(start1, end1, start2, end2);
    expect(overlap).toBeFalsy();
  }));
  it('datesOverlap should return false on endDates minor than startDates', async(() => {
    const start1 = new Date('2017-10-01');
    const end1 = new Date('2016-12-31');
    const start2 = new Date('2017-01-01');
    const end2 = new Date('2015-01-31');
    const overlap = datesOverlap(start1, end1, start2, end2);
    expect(overlap).toBeFalsy();
  }));
  it('addMonthsToDate should return null on nullable inputs', async(() => {
    const date2 = addMonthsToDate(null, 2);
    expect(date2).toBeFalsy();
  }));
  it('addMonthsToDate should add n month to date', async(() => {
    const n = 2;
    const date1 = new Date('2017-10-01');
    const date2 = addMonthsToDate(date1, n);
    expect(date2.getMonth()).toBe(date1.getMonth() + n);
  }));
  /*it('should add one month to dates', async(() => {
    const startDate = new Date(comp.inputData.start_date);
    const endDate = new Date(comp.inputData.end_date);
    startDate.setMonth(startDate.getMonth() + 1);
    endDate.setMonth(endDate.getMonth() + 1);
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(comp.inputData.start_date.getTime()).toBe(startDate.getTime());
    expect(comp.inputData.end_date.getTime()).toBe(endDate.getTime());
  }));*/
});
