"use strict";
exports.__esModule = true;
var sandbox_1 = require("./sandbox");
var square = function (x) {
    return x * x;
};
var eventTask = {
    name: "Birthday Party",
    guestLists: ['Andrew', "Maxim", "Ivan"],
    printGuestList: function () {
        var _this = this;
        console.log("Welcome to " + this.name);
        this.guestLists.forEach(function (guest) {
            console.log(guest + " is attending " + _this.name);
        });
    }
};
var obj = {
    name: "object",
    age: 1,
    foo: function (name) {
        return "Ave, " + name;
    }
};
function returnSomething(name) {
    return name.length * 31 + 5;
}
var Name = "John";
console.log(returnSomething(Name));
var tasks = {
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
    getTasksToDo: function () {
        return this.tasks.filter(function (task) { return !task.completed; });
    }
};
sandbox_1.hello();
var colorer = function (s, color) { return "\u001B[3" + color + "m" + s + "\u001B[0m"; };
console.log(colorer("String", 2));
console.log(obj.foo("Avrelius"));
eventTask.printGuestList();
console.log(tasks.getTasksToDo());
console.log(square(3));
