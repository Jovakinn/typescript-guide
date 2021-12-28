function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

type typeToShow = Schooler

interface Showable {
    valueToShow(value: Schooler): typeToShow
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}
enum Sex {
    MALE,
    FEMALE,
    QUIR
}

class Schooler implements Showable {
    private _firstName: string
    private _secondName: string
    private _age: number
    private _sex: Sex

    constructor(firstName: string, secondName: string, age: number, sex: Sex) {
        this._firstName = firstName;
        this._secondName = secondName;
        this._age = age;
        this._sex = sex;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get secondName(): string {
        return this._secondName;
    }

    set secondName(value: string) {
        this._secondName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get sex(): Sex {
        return this._sex;
    }

    set sex(value: Sex) {
        this._sex = value;
    }

    valueToShow(value: Schooler): typeToShow {
        return value;
    }
}

function SchoolarGreate() {
    const schooler = new Schooler("Max", "Khodakov", 17, Sex.MALE);
    console.log(schooler.valueToShow(schooler));
}
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition
function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined}
    }

    if (a && b) {
        return {x: a, y: b}
    }

    return {x: a, y: b}
}
function greetMyFavouriteComrade(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
}
type Point = {
    x: number;
    y: number;
};

function printCord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
let point: Point = {
    x: 1,
    y: 2
}

function printName(obj: { first: string; last?: string }) {
    console.log(`${obj.first}  ${obj.last}`);
}

function printId(id: number | string) {
    if (typeof id === "string")
        console.log(id.trim().toUpperCase())
    else
        console.log(id)
}

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x))
        console.log("Hello, " + x.join(" and "));
    else
        console.log("Welcome lone travelers " + x)
}

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object"){
        for (const s of strs)
            console.log(s);
    } else if (typeof strs === "string")
        console.log(strs);
}

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
   if (!values)
       return values;
   else
       return values.map((x) => x * factor);
}

function typeNarrowingExample(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

interface Container {
    value: number | null | undefined;
}

function multiplyValues(container: Container, factor: number) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}

type Fish = { swim: () => void };
type Bird = { fly : () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        animal;
    } else {
        animal;
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}

function example() {
    let x: string | number | boolean;
    x = Math.random() < 0.5;

    console.log(x);

    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    } else {
        x = 100;
        console.log(x);
    }
    return x;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}


console.log('Empty: ', position())
console.log('1 param: ', position(121))
console.log('2 param: ', position(122, 123))
printCord(point)
SchoolarGreate();
greetMyFavouriteComrade("Max", new Date())
printName({first: "Jack", last: "Black"});

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type ShapeOfObject = Circle | Square;

function getAreaOfObject(shapeOfObject: ShapeOfObject) {
    switch(shapeOfObject.kind) {
        case "circle":
            return Math.PI * shapeOfObject.radius ** 2;
        case "square":
            return shapeOfObject.sideLength ** 2;
    }
}

let circleObject: Circle = {
    kind: "circle",
    radius: 4
}

let squareObject: Square = {
    kind: "square",
    sideLength: 4
}

console.log("Area of circle: " + getAreaOfObject(circleObject));
console.log("Area of square: " + getAreaOfObject(squareObject));

type GreeterFunction = (a: string) => void;
function greeter(fn: GreeterFunction) {
    for (let i = 0; i < 3; i++) {
        fn("Hello TS!")
    }
}

function printToConsole(s: string) {
    console.log(s);
}
greeter(printToConsole);

let list = [4, 5, 6]
for (let listKey in list) {
    console.log(listKey);
}
for (let number of list) {
    console.log(number)
}

let pets = new Set(["Dog", "Car", "Hamster"])
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

function getFirstElementOfArray<Type> (array: Type[]): Type | undefined {
    return array[0];
}

const s = getFirstElementOfArray<string>(["s","o","s"]);
console.log(s);

function map<Input, Output>(array: Input[], func: (arg: Input) => Output) : Output[] {
    return array.map(func);
}
const parsed = map<string, number>(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);

console.log("Hello World!")