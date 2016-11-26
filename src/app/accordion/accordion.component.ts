import { Component, OnInit } from '@angular/core';
import {AccordionPanelComponent} from './accordion-panel/accordion-panel.component';

@Component({
  selector: 'hm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  private panels:Array<AccordionPanelComponent> = [];

  constructor() { }

  ngOnInit() {
  }

  togglePanel(activePanel:AccordionPanelComponent) {
    console.log('accordion.togglePanel:' + activePanel.title);
    this.panels.forEach(panel => {
      if (panel !== activePanel) {
        panel.isOpen = false;
      }
    });
  }

  addPanel(panel:AccordionPanelComponent) {
    this.panels.push(panel);
  }
}
