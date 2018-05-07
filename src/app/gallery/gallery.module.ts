import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewerComponent } from './viewer/viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [GalleryComponent,
    ViewerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ImageService
  ],
  exports: [
    GalleryComponent,
    ViewerComponent
  ]
})
export class GalleryModule { }
