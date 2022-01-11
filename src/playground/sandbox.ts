import chalk from "chalk";
import { randomInt } from "crypto";
import * as fs from 'fs';

function greet(name: string) {
    console.log(chalk.yellow(`Hello ${name}!`));
}

const speak = function(name: string) {
    console.log(chalk.yellow(`Hello ${name}!`));
}

const calcAreaOfCircle = (radius: number): number => Math.PI * Math.pow(radius, 2);

const bill = (products: number[], tax: number): number => {
    let total = 0;
    products.forEach(item => {
        total += item + item * tax;
    });
    return total;
}

const productsToCalculate: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const taxToCalculate: number = 750;
const res = bill(productsToCalculate, taxToCalculate);

greet("Max");
speak(("Max"));

console.log(chalk.redBright(calcAreaOfCircle(5)));
console.log(chalk.greenBright(res));


// callbacks

const foo = (callBackFun: any) => {
    let value = randomInt.length;
    callBackFun(value);
}

foo((value: any) => console.log(value))

productsToCalculate.forEach((product: any) => console.log(product));

let user = {
    name: "Maksym",
    age: 18,
    email: "maksym@gmail.com",
    location: "Kyiv, Ukraine",
    blogs: ["why mac ?", "cringe or not to cringe"],
    login: function() {
        console.log("logged in");
    },
    logout: function() {
        console.log("logged out");
    },
    logBlogs: function() {
        console.log("this user has written blogs:");
        this.blogs.forEach(blog => console.log(chalk.blueBright(blog)));
    }
};

user.logBlogs();

let fofo = {};

Object.defineProperty(fofo, "name", {
    value: "Maksym",
    configurable: true,
    enumerable: true
})

console.log(fofo);


setTimeout(() => {
    console.log("Hello");
}, 1);

const curretTimeInMs = Date.now();
console.log(curretTimeInMs.toString());

for (let i = 0; i < 10000; i++) {
    console.log(i);
}

console.log(Date.now() - curretTimeInMs);

function moduleFromString() {
    const moduleSource = fs.readFileSync('./1-json.json', 'utf8');
    console.log(typeof moduleSource);
}
moduleFromString();

function getFilesList(pathToDir: string, filesList = []) {
    if (!fs.existsSync(pathToDir)) {
        throw Error(`${pathToDir} does not exist`);
    }

    const initialList = fs.readdirSync(pathToDir);
    console.log(initialList);

}

getFilesList('./');


function arrayToObject(array: object[]) {
    let obj = {};
    while (array.length !== 0) {
        let index = 0;
        Object.defineProperty(obj, "element", array[index])
        index++;
    }
    return obj;
}
