"use strict";
class Triangle {
    constructor() {
        this.id = getRandomInt(50, 500);
    }
    areaCalculate() {
        console.log("area");
    }
    get side1() {
        return this.side1;
    }
    set side1(value) {
        this.side1 = value;
    }
    get side2() {
        return this.side2;
    }
    set side2(value) {
        this.side2 = value;
    }
    get side3() {
        return this.side3;
    }
    set side3(value) {
        this.side3 = value;
    }
}
const myFavoriteTriangle = {
    id: getRandomInt(1, 2),
    get side1() {
        return 0;
    }, get side2() {
        return 0;
    }, get side3() {
        return 0;
    },
    areaCalculate() {
        console.log("area of my triangle");
    }
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rect1 = {
    color: "#ccc",
    id: "1",
    size: {
        height: 20,
        width: 30
    }
};
const rect2 = {
    color: "green",
    id: "2",
    size: {
        height: 30,
        width: 20
    }
};
// old variants of creating objects of interfaces
const rect3 = {};
const rect4 = {};
const rect5 = {
    getArea() {
        return this.size.width * this.size.height;
    },
    id: "3",
    color: "black",
    size: {
        height: 45,
        width: 55
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: '5px'
};
//# sourceMappingURL=interfaces.js.map