import {Car} from "../classes";

const promise = new Promise<number>(resolve => {
    setTimeout(() => {
        resolve(2.7218281828)
    }, 1000)
})

promise.then(data => {
    console.log(data.toFixed(7))
})

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
}

const merged1 = mergeObjects({name: "Maksym"}, {age: 17})
const merged2 = mergeObjects({model: 'Mustang'}, {year: 121})
const merged3 = mergeObjects({fieldOfStudy: "Computer Science"}, {codeOfSpeciality: 122})

console.log(merged1.name.trim().toUpperCase())
console.log(merged2)
console.log(merged3.codeOfSpeciality + " " + merged3.fieldOfStudy)

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string}{
    return {
        value,
        count: 'In this object ${value.length} symbols'
    }
}
console.log(withCount("Howdy partner!"))

class Collection<T> {
    private _items: T[] = []

    constructor(items: T[]) {
        this._items = items;
    }

    add(item: T){
        this._items.push(item)
    }

    remove(item: T){
        this._items = this._items.filter(i => i != item)
    }

    getItems(): T[] {
        return this._items
    }
}

const strings = new Collection(['I', 'am', 'strings'])
strings.add('!!!')
strings.remove('am')
console.log(strings)

const numbers = new Collection([1, 2, 3])
numbers.add(4)
numbers.remove(2)
console.log(numbers)

function createAndValidate(model: string, year: number): Car {
    const car: Partial<Car> ={}
    if (model.length > 3) {
        car.model = model
    }
    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

const cars: Readonly<Array<string>> = ['Ford', 'Daewoo']
const ford: Car = {
    model: 'Ford',
    year:  2021
}
