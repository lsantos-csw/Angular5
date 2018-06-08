import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit, OnChanges {

  @Input() shouldHide = false;
  @Input() isHidden: boolean;
  @Input() id: string;
  @Input() toggleToo: string;
  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges () {
    console.log(typeof this.isHidden)
    console.log(this.isHidden)
    console.log('CHANGES ' + this.isHidden);
    console.log(this.toggleToo);
  }

  toggle() {
    if (this.shouldHide) {
      this.isHidden = !this.isHidden;
    }
  }

  @HostListener('click', ['$event'])
  onClick($event: Event): void {
    console.log('click ' + this.id);
    this.clickEmitter.emit({id: this.id, hidden: this.isHidden});
  }
}
