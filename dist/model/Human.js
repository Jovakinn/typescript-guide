"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
class Human {
    constructor(Name, Age) {
        this._Name = Name;
        this._Age = Age;
    }
    get Name() {
        return this._Name;
    }
    set Name(value) {
        this._Name = value;
    }
    get Age() {
        return this._Age;
    }
    set Age(value) {
        this._Age = value;
    }
}
exports.Human = Human;
//# sourceMappingURL=Human.js.map