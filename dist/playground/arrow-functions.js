"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const square = function (x) {
    return x * x;
};
const eventTask = {
    name: "Birthday Party",
    guestLists: ['Andrew', "Maxim", "Ivan"],
    printGuestList: function () {
        console.log("Welcome to " + this.name);
        this.guestLists.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        });
    }
};
const obj = {
    name: "object",
    age: 1,
    foo: function (name) {
        return `Ave, ${name}`;
    }
};
function returnSomething(name) {
    return name.length * 31 + 5;
}
const Name = "John";
console.log(returnSomething(Name));
const tasks = {
    tasks: [{
            text: 'Grocery shopping',
            completed: true
        }, {
            text: 'Clean yard',
            completed: false
        }, {
            text: 'Film course',
            completed: false
        }],
    getTasksToDo() {
        return this.tasks.filter((task) => !task.completed);
    }
};
const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;
console.log(colorer("String", 2));
console.log(obj.foo("Avrelius"));
eventTask.printGuestList();
console.log(tasks.getTasksToDo());
console.log(square(3));
//# sourceMappingURL=arrow-functions.js.map