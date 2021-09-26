"use strict";
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined };
    }
    if (a && b) {
        return { x: a, y: b };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('1 param: ', position(121));
console.log('2 param: ', position(122, 123));
