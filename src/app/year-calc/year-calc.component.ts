import {Component, OnInit, Input, Optional, OpaqueToken, Inject} from '@angular/core';

export const dateProvider = new OpaqueToken('YearCalcComponent-DateProvider');

@Component({
  selector: 'hm-year-calc',
  template: '{{result}}'
})
export class YearCalcComponent implements OnInit {
  result: number;

  @Input() yearAndMonth: string;

  constructor(@Optional() @Inject(dateProvider) private now: Date) {
    if (this.now === null) {
      this.now = new Date();
    }
  }

  ngOnInit() {
    let [year, month] = this.yearAndMonth.split('-').map(x => parseInt(x));
    month--;
    this.result = this.getDifferenceInYears(this.now, new Date(year, month));
  }

  private getDifferenceInYears(now: Date, pointInTime: Date) {
    let difference = now.valueOf() - pointInTime.valueOf();
    difference = difference / (1000 * 60 * 60 * 24 * 365);
    difference = Math.floor(difference);
    return difference;
  }
}
