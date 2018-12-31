import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConvertorComponent } from './currency-convertor.component';

describe('CurrencyConvertorComponent', () => {
  let component: CurrencyConvertorComponent;
  let fixture: ComponentFixture<CurrencyConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
