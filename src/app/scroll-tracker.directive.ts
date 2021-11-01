import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[hmScrollTracker]',
})
export class ScrollTrackerDirective {
    @Output() scrolled: EventEmitter<any> = new EventEmitter();

    @HostListener('window:scroll')
    scrollTrack() {
        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        this.scrolled.emit(scrollTop);
    }
}
