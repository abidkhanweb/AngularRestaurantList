var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngDashboard';
        this.hereos = ["IRONMAN", "CAPTAIN AMERICA", "WONDER WOMAN", "THOR", "HULK", "AQUAMAN"];
    }
    AppComponent.prototype.changeText = function () {
        this.title ? "Hi Angular" : "ngDashboard";
    };
    AppComponent.prototype.onload = function () {
        window.onload = function () {
            var element = document.getElementsByClassName("div");
            var icon = document.getElementsByTagName("i");
            (function () {
                //var hereos = ["IRONMAN", "CAPTAIN AMERICA","WONDER WOMAN","THOR","HULK","AQUAMAN"];
                var i;
                var text = "";
                for (i = 0; i < element.length; i++) {
                    //element[i].innerHTML=hereos[i];
                    element[i].addEventListener("click", function () {
                        if (this.children[0].classList.contains("fa-heart-o") && this.children[0].classList.contains("fa")) {
                            this.children[0].classList.add("fa", "fa-heart", "red");
                            this.children[0].classList.remove("fa-heart-o");
                        }
                        else {
                            this.children[0].classList.add("fa", "fa-heart-o");
                            this.children[0].classList.remove("red", "fa-heart");
                        }
                        if (text == "Hi") {
                            text = "Bye";
                            console.log(text);
                        }
                        else {
                            text = "Hi";
                            console.log(text);
                        }
                    });
                }
            })();
        };
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
var calls = new AppComponent();
calls.onload();
//# sourceMappingURL=app.component.js.map