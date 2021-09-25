interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
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