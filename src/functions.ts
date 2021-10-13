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


console.log('Empty: ', position())
console.log('1 param: ', position(121))
console.log('2 param: ', position(122, 123))
printCord(point)
SchoolarGreate();
greetMyFavouriteComrade("Max", new Date())
printName({first: "Jack", last: "Black"});