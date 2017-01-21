import {Component, ViewChild} from '@angular/core';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('theHeader') header: HeaderComponent;

  onViewerChange(visible: boolean) {
    this.header.isHidden = visible;
  }
}
