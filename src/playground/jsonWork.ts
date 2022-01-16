const person = {
    name: 'Marcus',
    city: 'Roma',
    born: 122
}

const testPerson = JSON.stringify(person);
console.log(testPerson);

const objectPerson = JSON.parse(testPerson);
console.log(objectPerson);

const fun1 = (x: number) => x * 2;
const fun2 = (x: number) => ++x;

const compose = (...funcs: any[]) => (x: number) => funcs.reduce((v, f) => f(v), x);
const fun3 = compose(fun1, fun2);

const res1 = [7, 10, 1, 5, 2]
    .filter(x => x > 4)
    .map(fun3)
    .reduce((acc, val) => acc + val);
console.log(res1);

const matrix: number[][] = [
    [2, 4, 5, 10, 4],
    [3, 5, 6, 2, 5],
    [12, 325, 44, 3],
];

matrix.forEach((row, i) => {
    row.forEach((col, j) => {
        console.log(i, j, col);
    });
});
