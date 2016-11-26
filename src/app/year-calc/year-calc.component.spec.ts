/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YearCalcComponent } from './year-calc.component';

describe('YearCalcComponent', () => {
  let component: YearCalcComponent;


  beforeEach(() => {
    component = new YearCalcComponent(new Date(2016, 10));
  });

  it('should calculate years correctly', () => {
    component.yearAndMonth = '2000-1';
    component.ngOnInit();
    expect(component.result).toBe(16);
  });

  it('should calculate years correctly2', () => {
    component.yearAndMonth = '2000-11';
    component.ngOnInit();
    expect(component.result).toBe(16);
  });

  it('should calculate years correctly3', () => {
    component.yearAndMonth = '2000-12';
    component.ngOnInit();
    expect(component.result).toBe(15);
  });
});
