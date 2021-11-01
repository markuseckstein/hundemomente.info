import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'hm-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.scss'],
})
export class DogComponent {
    @Input() firstPart: string;
    @Input() highlightPart: string;
    @Input() subHeading: string;
    @Input() backgroundImage: string;

    @HostBinding('style.background-image')
    get backgroundImageUrl() {
        return `url('${this.backgroundImage}')`;
    }

    @Input() @HostBinding('style.background-position') backgroundPosition =
        '50% 50%';
}
