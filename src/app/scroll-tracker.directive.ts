import {Directive, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[hm-scroll-tracker]',
  host: {'(window:scroll)': 'scrollTrack($event)'},
})
export class ScrollTrackerDirective {
  @Output() scrolled:EventEmitter<any> = new EventEmitter();

  scrollTrack(event:any) {
    this.scrolled.emit(document.body.scrollTop);
  }
}
