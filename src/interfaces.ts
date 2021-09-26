interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

interface Shape {
    readonly id: ID
    side1?: number
    side2?: number
    side3?: number
    areaCalculate(): void
}

class Triangle implements Shape {
    readonly id: ID = getRandomInt(50, 500);

    areaCalculate(): void {
        console.log("area")
    }

    get side1(): number {
        return this.side1;
    }

    set side1(value: number) {
        this.side1 = value;
    }

    get side2(): number {
        return this.side2;
    }

    set side2(value: number) {
        this.side2 = value;
    }

    get side3(): number {
        return this.side3;
    }

    set side3(value: number) {
        this.side3 = value;
    }
}
const myFavoriteTriangle: Triangle = {
    id: getRandomInt(1, 2),
    get side1(): number {
        return 0;
    }, get side2(): number {
        return 0;
    }, get side3(): number {
        return 0;
    },
    areaCalculate(): void {
        console.log("area of my triangle")
    }
}

function getRandomInt(min: number, max: number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const rect1: Rect = {
    color: "#ccc",
    id: "1",
    size: {
        height: 20,
        width: 30
    }
}

const rect2: Rect = {
    color: "green",
    id: "2",
    size: {
        height: 30,
        width: 20
    }
}
// old variants of creating objects of interfaces
const rect3 = {} as Rect
const rect4 = <Rect>{}
// =========================

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
     getArea(): number {
        return this.size.width * this.size.height;
    },
    id: "3",
    color: "black",
    size: {
         height: 45,
         width: 55
     }
}
// =================================
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}
// ==================================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: '5px'
}