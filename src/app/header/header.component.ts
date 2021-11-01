import {
    Component,
    Input,
    HostBinding,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'hm-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss',
        './header.component.medium.scss',
        './header.component.small.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    menuIsOpen = false;

    @Input() isSmall = false;

    @HostBinding('class.header--hidden')
    @Input()
    isHidden = false;

    @HostBinding('class.header--small') get small() {
        return this.isSmall;
    }

    onNavClick(anchor: string) {
        this.menuIsOpen = false;
        if (window.location.hash !== anchor) {
            window.location.hash = anchor;
            window.scrollBy(0, -110);
        }
    }
}
