import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccordionModule } from './accordion/accordion.module';
import { YearCalcComponent } from './year-calc/year-calc.component';
import { HeaderComponent } from './header/header.component';
import { ScrollTrackerDirective } from './scroll-tracker.directive';
import { DogComponent } from './dog/dog.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@NgModule({
    declarations: [
        AppComponent,
        YearCalcComponent,
        HeaderComponent,
        ScrollTrackerDirective,
        DogComponent,
    ],
    imports: [
        BrowserModule,
        AccordionModule,
        Angular2ImageGalleryModule,
        NgxPageScrollModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
