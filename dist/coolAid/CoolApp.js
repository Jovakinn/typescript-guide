"use strict";
class Person {
    constructor(FirstName) {
        this.FirstName = FirstName;
    }
}
const max = new Person("Max");
let btn;
btn = document.querySelector('#btn');
let anyFlag;
function logINfo(data) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
if (btn) {
    btn.addEventListener('click', () => {
        console.log('Btn was clicked!');
    });
}
//# sourceMappingURL=CoolApp.js.map