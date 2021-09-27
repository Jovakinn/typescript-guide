"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(2.7218281828);
    }, 1000);
});
promise.then(data => {
    console.log(data.toFixed(7));
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged1 = mergeObjects({ name: "Maksym" }, { age: 17 });
const merged2 = mergeObjects({ model: 'Mustang' }, { year: 121 });
const merged3 = mergeObjects({ fieldOfStudy: "Computer Science" }, { codeOfSpeciality: 122 });
console.log(merged1.name.trim().toUpperCase());
console.log(merged2);
console.log(merged3.codeOfSpeciality + " " + merged3.fieldOfStudy);
function withCount(value) {
    return {
        value,
        count: 'In this object ${value.length} symbols'
    };
}
console.log(withCount("Howdy partner!"));
class Collection {
    constructor(items) {
        this._items = [];
        this._items = items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i != item);
    }
    getItems() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('!!!');
strings.remove('am');
console.log(strings);
const numbers = new Collection([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers);
function createAndValidate(model, year) {
    const car = {};
    if (model.length >= 3) {
        car.model = model;
    }
    if (year >= 2000) {
        car.year = year;
    }
    return car;
}
const ford = {
    model: 'Ford',
    year: 2021
};
console.log(createAndValidate(ford.model, ford.year));
//# sourceMappingURL=generics.js.map