import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KonvaModule } from 'ng2-konva';

import { AppComponent } from './app.component';
import { TimelineComponent } from './cars/timeline/timeline.component';
import { CarComponent } from './cars/car/car.component';
import { JQ_TOKEN } from './common/jQuery.service';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarService } from './cars/services/car.service';
import { DraggableDivsComponent } from './cars/draggable/draggable-divs.component';
import { DraggableMoverComponent } from './cars/draggable/draggable-canvas/draggable-mover.component';
import { WINDOW_PROVIDERS } from './common/window-ref.service';
import { DraggableDirective } from './cars/drectives/draggable.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DropComponent } from './cars/drop/drop/drop.component';
import { DropDirective } from './cars/drop/directives/drop.directive';

const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    CarComponent,
    CarListComponent,
    DraggableDivsComponent,
    DraggableMoverComponent,
    DraggableDirective,
    DropComponent,
    DropDirective
  ],
  imports: [
    BrowserModule,
    KonvaModule,
    AngularFontAwesomeModule
  ],
  providers: [
    CarService,
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
