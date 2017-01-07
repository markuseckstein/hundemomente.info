import {Component, OnInit, Input, HostListener, style, animate, transition, state, trigger} from '@angular/core';
import {AccordionComponent} from '../accordion.component';

@Component({
  selector: 'hm-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  animations: [ // TODO fix this!
    trigger('smooth', [
      transition('closed => open', [
        style({height: '0px'}),
        animate('1000ms', style({height: 'auto'}))
      ]),
      transition('open => closed', [
        style({height: '*'}),
        animate('1000ms', style({height: '0px'}))
      ])
    ])
  ]
})
export class AccordionPanelComponent implements OnInit {
  get smooth(): string {
    return this.isOpen ? 'open' : 'closed';
  }

  @Input() isOpen = false;
  @Input() title: string;

  constructor(private accordion: AccordionComponent) {
    accordion.addPanel(this);
  }

  ngOnInit() {
  }

  @HostListener('click')
  toggle() {
    this.isOpen = !this.isOpen;

    console.log('isOpen:' + this.isOpen);

    if (this.isOpen) {
      this.accordion.togglePanel(this);
    }
  }

  animationStarted($event) {
    console.log('started:', $event);
  }

  animationDone($event) {
    console.log('done:', $event);
  }
}
