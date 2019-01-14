import { async, TestBed } from '@angular/core/testing';
import { CurrencyConvertorComponent } from './currency-convertor.component';
describe('CurrencyConvertorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CurrencyConvertorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CurrencyConvertorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=currency-convertor.component.spec.js.map