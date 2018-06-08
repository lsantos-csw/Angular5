import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-mover',
  template: `
    <ko-stage [config]="configStage">
      <ko-layer>
        <ko-rect [config]="configCircle"></ko-rect>
        <ko-line [config]="c"></ko-line>
        <ko-line [config]="d"></ko-line>
        <ko-line [config]="e"></ko-line>
      </ko-layer>
    </ko-stage>
  `
})
export class DraggableMoverComponent {

  x = 2;
  y = 2;
  strokeWidthRect = 2;
  widthRect = 5;
  heightRect = 20;
  strokeWidthLine = 0.5;

  public configStage = of({
    width: 9,
    height: 24
  });

  public c = of({
      points: [this.x + 1, this.y + this.strokeWidthRect, this.x + 1, this.y + this.heightRect - this.strokeWidthRect],
      stroke: 'white',
      strokeWidth: this.strokeWidthLine,
      lineJoin: 'round'
  });
  public d = of({
      points: [this.x + 2.5, this.y + this.strokeWidthRect, this.x + 2.5, this.y + this.heightRect - this.strokeWidthRect],
      stroke: 'white',
      strokeWidth: this.strokeWidthLine,
      lineJoin: 'round'
  });
  public e = of({
      points: [this.x + 4, this.y + this.strokeWidthRect, this.x + 4, this.y + this.heightRect - this.strokeWidthRect],
      stroke: 'white',
      strokeWidth: this.strokeWidthLine,
      lineJoin: 'round'
  });
  public configCircle = of({
      x: this.x,
      y: this.y,
      width: this.widthRect,
      height: this.heightRect,
      fill: 'STEELBLUE',
      strokeWidth: this.strokeWidthRect,
      stroke: 'STEELBLUE',
      lineJoin: 'bevel'
    });
}
