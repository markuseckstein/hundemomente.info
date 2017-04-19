import { HeaderComponent } from './header/header.component';
import { ScrollTrackerDirective } from './scroll-tracker.directive';
import { DogComponent } from './dog/dog.component';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AccordionModule } from './accordion/accordion.module';
import { YearCalcComponent, dateProvider } from './year-calc/year-calc.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        YearCalcComponent,
        HeaderComponent,
        ScrollTrackerDirective,
        DogComponent
      ],
      imports: [
        BrowserModule,
        AccordionModule,
        Angular2ImageGalleryModule,
        Ng2PageScrollModule.forRoot()
      ],
      providers: [{ provide: dateProvider, useValue: new Date(2016, 10) }]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
