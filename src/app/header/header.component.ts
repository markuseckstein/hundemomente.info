import {Component, OnInit, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'hm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  isSmall = false;

  @HostBinding('class.header--small') get small() {
    return this.isSmall
  };

  constructor() {
  }

  ngOnInit() {
  }

  onScrolled(event: any) {
    console.log('header scrolled:', event);
  }
}
