/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from '../accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';

describe('AccordionPanelComponent', () => {
    let component: AccordionPanelComponent;
    let fixture: ComponentFixture<AccordionPanelComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [NoopAnimationsModule],
                declarations: [AccordionPanelComponent],
                providers: [AccordionComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AccordionPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
