import { TestBed, async } from '@angular/core/testing';
import { CarListComponent } from './car-list.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { EState } from '../common/common.model';
import { By } from '@angular/platform-browser';
import { CarService } from '../services/car.service';
import { DraggableDivsComponent } from '../draggable/draggable-divs.component';
import { DraggableMoverComponent } from '../draggable/draggable-canvas/draggable-mover.component';
import { CARS } from '../services/car.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { JQ_TOKEN } from '../../common/jQuery.service';

describe('CarListComponent', () => {
  let fixture = null;
  let comp = null;
  let carService: CarService;
  const $ = window['$'];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarListComponent, TimelineComponent, DraggableDivsComponent
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
      fixture = TestBed.createComponent(CarListComponent);
      comp = fixture.componentInstance;
      comp.start_date = new Date('2017-01-01');
      comp.end_date = new Date('2017-12-31');
      comp.sidebarWidth = 10; // %
      comp.bodyWidth = 88; // %
    });
  }));
  it('should create the car-list component', async(() => {
    carService = TestBed.get(CarService);
    spyOn(carService, 'getCars').and.returnValue(CARS);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have same size in both sides after ngAfterViewInit', async(() => {
    fixture.detectChanges();
    // comp.ngAfterViewInit();
    const part1height = $('.car-names:nth-child(1)').height();
    const part2height = $('#part2 > div > div:nth-child(1)').height();
    expect(part1height).toEqual(part2height);
  }));
  it('should call buttonClick on buttonUp click', async(() => {
    spyOn(comp, 'buttonUp');
    const button = fixture.debugElement.query(By.css('#buttonUp')).nativeElement;
    button.click();
    fixture.whenStable().then(() => {
      expect(comp.buttonUp).toHaveBeenCalled();
    });
  }));
  it('should call buttonClick on buttonDown click', async(() => {
    spyOn(comp, 'buttonDown');
    const button = fixture.debugElement.query(By.css('#buttonDown')).nativeElement;
    button.click();
    fixture.whenStable().then(() => {
      expect(comp.buttonDown).toHaveBeenCalled();
    });
  }));
  it('should call onScroll when scrolling in sidebar', async(() => {
    /*fixture.detectChanges();
    spyOn(comp, 'onScroll');
    comp.ngOnInit();
    fixture.detectChanges();
    // const div = fixture.debugElement.query(By.css('#part1 > div')).nativeElement;
    $('#part1 > div').animate({ scrollTop: 20 }, 0);
    $('#part2').animate({ scrollTop: 20 }, 0);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(comp.onScroll).toHaveBeenCalled();
    });*/
  }));
});
