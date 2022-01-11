"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(constructor) {
    console.log(constructor);
}
function Log2(target, propName) {
    console.log(target);
    console.log(propName);
}
function Log3(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor);
}
let ComponentClass = class ComponentClass {
    constructor(name) {
        this.name = name;
    }
    get componentName() {
        return this.name;
    }
    logName() {
        console.log('Component Name: ${this.name}');
    }
};
__decorate([
    Log2
], ComponentClass.prototype, "name", void 0);
__decorate([
    Log3
], ComponentClass.prototype, "componentName", null);
ComponentClass = __decorate([
    Log
], ComponentClass);
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log('Component name: ${this.name}');
    }
};
CardComponent = __decorate([
    Component({
        selector: '#card',
        template: '<div class="card"><div class="card-content"><span class="card-title">Card Component</span></div></div> '
    })
], CardComponent);
const card = new CardComponent('My Card Component');
//# sourceMappingURL=decorators.js.map