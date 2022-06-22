"use strict";
exports.__esModule = true;

const chalk_1 = require("chalk");
const crypto_1 = require("crypto");

const fs = require("fs");

function greet(name) {
    console.log(chalk_1["default"].yellow("Hello " + name + "!"));
}

const speak = function (name) {
    console.log(chalk_1["default"].yellow("Hello " + name + "!"));
};

const calcAreaOfCircle = function (radius) {
    return Math.PI * Math.pow(radius, 2);
};

const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

const productsToCalculate = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const taxToCalculate = 750;
const res = bill(productsToCalculate, taxToCalculate);

greet("Max");
speak(("Max"));
console.log(chalk_1["default"].redBright(calcAreaOfCircle(5)));
console.log(chalk_1["default"].greenBright(res));
// callbacks
var foo = function (callBackFun) {
    var value = crypto_1.randomInt.length;
    callBackFun(value);
};
foo(function (value) { return console.log(value); });
productsToCalculate.forEach(function (product) { return console.log(product); });
var user = {
    name: "Maksym",
    age: 18,
    email: "maksym@gmail.com",
    location: "Kyiv, Ukraine",
    blogs: ["why mac ?", "cringe or not to cringe"],
    login: function () {
        console.log("logged in");
    },
    logout: function () {
        console.log("logged out");
    },
    logBlogs: function () {
        console.log("this user has written blogs:");
        this.blogs.forEach(function (blog) { return console.log(chalk_1["default"].blueBright(blog)); });
    }
};
user.logBlogs();
var fofo = {};
Object.defineProperty(fofo, "name", {
    value: "Maksym",
    configurable: true,
    enumerable: true
});
console.log(fofo);
setTimeout(function () {
    console.log("Hello");
}, 1);
var curretTimeInMs = Date.now();
console.log(curretTimeInMs.toString());
for (var i = 0; i < 10000; i++) {
    console.log(i);
}
console.log(Date.now() - curretTimeInMs);
function moduleFromString() {
    var moduleSource = fs.readFileSync('./1-json.json', 'utf8');
    console.log(typeof moduleSource);
}
moduleFromString();
function getFilesList(pathToDir, filesList) {
    if (filesList === void 0) { filesList = []; }
    if (!fs.existsSync(pathToDir)) {
        throw Error(pathToDir + " does not exist");
    }
    var initialList = fs.readdirSync(pathToDir);
    console.log(initialList);
}
