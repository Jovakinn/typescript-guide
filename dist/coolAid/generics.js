"use strict";
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(2.7218281828);
    }, 2000);
});
promise.then(data => {
    console.log(data.toFixed(5));
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "Maksym" }, { age: 17 });
console.log(merged);
//# sourceMappingURL=generics.js.map