"use strict";
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["QUIR"] = 2] = "QUIR";
})(Sex || (Sex = {}));
class Schooler {
    constructor(firstName, secondName, age, sex) {
        this._firstName = firstName;
        this._secondName = secondName;
        this._age = age;
        this._sex = sex;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get secondName() {
        return this._secondName;
    }
    set secondName(value) {
        this._secondName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get sex() {
        return this._sex;
    }
    set sex(value) {
        this._sex = value;
    }
    valueToShow(value) {
        return value;
    }
}
function SchoolarGreate() {
    const schooler = new Schooler("Max", "Khodakov", 17, Sex.MALE);
    console.log(schooler.valueToShow(schooler));
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined };
    }
    if (a && b) {
        return { x: a, y: b };
    }
    return { x: a, y: b };
}
function greetMyFavouriteComrade(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
function printCord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
let point = {
    x: 1,
    y: 2
};
function printName(obj) {
    console.log(`${obj.first}  ${obj.last}`);
}
function printId(id) {
    if (typeof id === "string")
        console.log(id.trim().toUpperCase());
    else
        console.log(id);
}
function welcomePeople(x) {
    if (Array.isArray(x))
        console.log("Hello, " + x.join(" and "));
    else
        console.log("Welcome lone travelers " + x);
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs)
            console.log(s);
    }
    else if (typeof strs === "string")
        console.log(strs);
}
function multiplyAll(values, factor) {
    if (!values)
        return values;
    else
        return values.map((x) => x * factor);
}
function typeNarrowingExample(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValues(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
function logValue(x) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}
function example() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
console.log('Empty: ', position());
console.log('1 param: ', position(121));
console.log('2 param: ', position(122, 123));
printCord(point);
SchoolarGreate();
greetMyFavouriteComrade("Max", new Date());
printName({ first: "Jack", last: "Black" });
function getAreaOfObject(shapeOfObject) {
    switch (shapeOfObject.kind) {
        case "circle":
            return Math.PI * Math.pow(shapeOfObject.radius, 2);
        case "square":
            return Math.pow(shapeOfObject.sideLength, 2);
    }
}
let circleObject = {
    kind: "circle",
    radius: 4
};
let squareObject = {
    kind: "square",
    sideLength: 4
};
console.log("Area of circle: " + getAreaOfObject(circleObject));
console.log("Area of square: " + getAreaOfObject(squareObject));
function greeter(fn) {
    for (let i = 0; i < 3; i++) {
        fn("Hello TS!");
    }
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
let list = [4, 5, 6];
for (let listKey in list) {
    console.log(listKey);
}
for (let number of list) {
    console.log(number);
}
let pets = new Set(["Dog", "Car", "Hamster"]);
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
function getFirstElementOfArray(array) {
    return array[0];
}
const s = getFirstElementOfArray(["s", "o", "s"]);
console.log(s);
function map(array, func) {
    return array.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);
console.log("Hello World!");
//# sourceMappingURL=functions.js.map