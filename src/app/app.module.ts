import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccordionModule} from './accordion/accordion.module';
import {YearCalcComponent} from './year-calc/year-calc.component';
import {HeaderComponent} from './header/header.component';
import {ScrollTrackerDirective} from './scroll-tracker.directive';
import {DogComponent} from './dog/dog.component';
import {RouterModule, DefaultUrlSerializer, UrlSerializer} from '@angular/router';
import {PathLocationStrategy, Location, LocationStrategy} from '@angular/common';

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
    FormsModule,
    HttpModule,
    AccordionModule,
    RouterModule
  ],
  providers: [Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {provide: UrlSerializer, useClass: DefaultUrlSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
