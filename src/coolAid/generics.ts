const promise = new Promise<number>(resolve => {
    setTimeout(() => {
        resolve(2.7218281828)
    }, 5000)
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