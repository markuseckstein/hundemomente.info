import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, HostListener, Input } from '@angular/core';

import { AccordionComponent } from '../accordion.component';

@Component({
    selector: 'hm-accordion-panel',
    templateUrl: './accordion-panel.component.html',
    styleUrls: ['./accordion-panel.component.scss'],
    animations: [
        trigger('smooth', [
            state(
                'open',
                style({
                    height: '*',
                })
            ),
            state(
                'closed',
                style({
                    height: '0px',
                })
            ),
            transition('closed <=> open', animate('300ms ease-in-out')),
        ]),
    ],
})
export class AccordionPanelComponent {
    get smooth(): string {
        return this.isOpen ? 'open' : 'closed';
    }

    @Input() isOpen = false;
    @Input() title: string;

    constructor(private accordion: AccordionComponent) {
        accordion.addPanel(this);
    }

    @HostListener('click')
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.accordion.togglePanel(this);
        }
    }
}
