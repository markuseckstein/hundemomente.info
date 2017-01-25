import {Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[hmScrollTracker]',
})
export class ScrollTrackerDirective {
  @Output() scrolled: EventEmitter<any> = new EventEmitter();

  @HostListener('window:scroll')
  scrollTrack(event: any) {
    this.scrolled.emit(document.body.scrollTop);
  }
}
