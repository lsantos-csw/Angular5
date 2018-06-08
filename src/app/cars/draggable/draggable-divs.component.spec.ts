import { TestBed, async } from '@angular/core/testing';
import { DraggableDivsComponent } from './draggable-divs.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { EState } from '../common/common.model';
import { By } from '@angular/platform-browser';
import { CarService } from '../services/car.service';
import { CARS } from '../services/car.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { JQ_TOKEN } from '../../common/jQuery.service';
import { DraggableMoverComponent } from './draggable-canvas/draggable-mover.component';


describe('DraggableDivsComponent', () => {
  let fixture = null;
  let comp = null;
  const $ = window['$'];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimelineComponent, DraggableDivsComponent, DraggableMoverComponent
      ],
      providers: [
        CarService,
        {
          provide: JQ_TOKEN,
          useValue: $
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(DraggableDivsComponent);
      comp = fixture.componentInstance;
      comp.start_date = new Date('2017-01-01');
      comp.end_date = new Date('2017-12-31');
    });
  }));
  it('should create the component', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should call onScroll when scrolling in sidebar', async(() => {
    /*spyOn(comp, 'onScroll');
    // const div = fixture.debugElement.query(By.css('#part1 > div')).nativeElement;
    $('#part1 > div').animate({ scrollTop: 20 }, 50);
    fixture.whenStable().then(() => {
      expect(comp.onScroll).toHaveBeenCalled();
    });*/
  }));
});
