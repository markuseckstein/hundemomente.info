import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccordionModule } from './accordion/accordion.module';
import { YearCalcComponent } from './year-calc/year-calc.component';
import { HeaderComponent } from './header/header.component';
import { ScrollTrackerDirective } from './scroll-tracker.directive';
import { DogComponent } from './dog/dog.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
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
    GalleryModule,
    Ng2PageScrollModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
