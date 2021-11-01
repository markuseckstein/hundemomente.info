import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

const components = [AccordionComponent, AccordionPanelComponent];

@NgModule({
    imports: [CommonModule, BrowserAnimationsModule],
    exports: components,
    declarations: components,
})
export class AccordionModule {}
