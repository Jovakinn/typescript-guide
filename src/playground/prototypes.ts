import * as fs from "fs";
import path from "path";

function Point(this: any, x: number, y: number) {
    this.x = x;
    this.y = y;
}

Point.from = function(obj: any) {
    const { x, y } = obj;
    // @ts-ignore
    return new Point(x, y);
};

Point.prototype.move = function(x: number, y: number) {
    this.x += x;
    this.y += y;
}

Point.prototype.toString = function() {
    return `[${this.x}, ${this.y}]`;
}

console.log('function prototype:', (function() {}).prototype);
console.log('lambda prototype:', (() => {}).prototype);

console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);

// @ts-ignore
const p = new Point(1, 2);
p.move(-5, 10);

console.log(p);
console.log(p.toString());
console.log(p + '');

const log = (base: number, n: number) => Math.log(n) / Math.log(base);
const createLog = (base: number) => (n: number) => log(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);

console.log('lg(5) = ' + lg(5));
console.log('ln(5) = ' + ln(5));


const partial = (fn: any, x: any) => (...args: any[]) => fn(x, ...args);

const sum4 = (a: number, b: number, c: number, d: number) => (a + b + c + d);

const f11 = partial(sum4, 1);
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);

const y1 = f13(4);
console.log(y1);

// currying

const curry = (fn: any) => (...args: any) => {
    if (fn.length > args.length) {
        const f = fn.bind(null, ...args);
        return curry(f);
    } else {
        return fn(...args);
    }
}

const f = curry(sum4);
const test = f(1)(2)(3)(4);
console.log(test);


const logger = console.log;

function identity<T> (arg: T): T {
    return arg;
}

const result = identity<string>('hello')
logger(result);

// destructive assignment
const {sin, PI} = Math;
logger(sin(1));
logger(PI);

const before = new Date('January 5, 2004 14:00:00');
const now = new Date();
const difference = now.getTime() - before.getTime();
const minutes = Math.round(difference / 1000 / 60);
const hours = Math.round(minutes / 60);

logger(hours, minutes);

const pos = (row: number, column: number): void => logger(`\x1b[${row};${column}`);

{
    const name: string = 'Maksym';
    for (let i = 0; i < name.trim().length; i++) {
        logger(i, name[i]);
    }
}

async function readingDirectory(directory: string) {
    const fileNames = await fs.promises.readdir(directory);
    for (let file of fileNames) {
        const absolutePath = path.join(directory, file);
        logger(absolutePath);

        const data = await fs.promises.readFile(absolutePath);
        logger(data);
    }
}

