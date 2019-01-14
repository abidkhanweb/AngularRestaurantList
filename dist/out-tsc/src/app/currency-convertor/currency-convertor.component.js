var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var CurrencyConvertorComponent = /** @class */ (function () {
    function CurrencyConvertorComponent() {
        this.crOne = "0";
        this.crTwo = "0";
        this.remainder = 0;
        this.result = 0;
    }
    CurrencyConvertorComponent.prototype.total = function () {
        var total = (parseInt(this.crOne) * 1000 + parseInt(this.crTwo) * 500);
        if (total < 2000) {
            alert("Insufficient cash");
            return false;
        }
        else if (total % 2000 == 0) {
            this.result = total / 2000;
        }
        else if (total % 2000 != 0) {
            this.result = (Math.floor(total / 2000));
            this.remainder = total % 2000;
        }
        /*if(i % 2 == 1) {
           this.result = parseInt(this.crOne) + parseInt(this.crTwo);
         }
         else if(i % 2 == 0){
           
         }*/
    };
    CurrencyConvertorComponent = __decorate([
        Component({
            selector: 'app-currency-convertor',
            templateUrl: './currency-convertor.component.html',
            styleUrls: ['./currency-convertor.component.scss']
        })
    ], CurrencyConvertorComponent);
    return CurrencyConvertorComponent;
}());
export { CurrencyConvertorComponent };
//# sourceMappingURL=currency-convertor.component.js.map