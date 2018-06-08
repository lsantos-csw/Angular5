import { Component, Input, OnInit } from '@angular/core';
import { EState, ITimelinePiece, ITimelineData } from '../common/common.model';


@Component({
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() carName: string;
  @Input() carInformation: ITimelinePiece[];
  @Input() start_date: Date;
  @Input() end_date: Date;

  ngOnInit() {
    console.log(this.carName);
    console.log(this.carInformation);
  }
}
