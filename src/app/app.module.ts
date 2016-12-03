import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AccordionModule} from './accordion/accordion.module';
import { YearCalcComponent } from './year-calc/year-calc.component';
import { HeaderComponent } from './header/header.component';
import { ScrollTrackerDirective } from './scroll-tracker.directive';
import { DogComponent } from './dog/dog.component';

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
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
