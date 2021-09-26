"use strict";
class Person {
    constructor(FirstName) {
        this.FirstName = FirstName;
    }
}
const max = new Person("Max");
const btn = document.querySelector('#btn');
if (btn) {
    btn.addEventListener('click', () => {
        console.log('Btn was clicked!');
    });
}
//# sourceMappingURL=CoolApp.js.map