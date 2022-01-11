const square = function (x: number): number {
    return x * x;
}

const eventTask = {
    name: "Birthday Party",
    guestLists: ['Andrew', "Maxim", "Ivan"],

    printGuestList: function () {
        console.log("Welcome to " + this.name)

        this.guestLists.forEach((guest: string) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}

const obj = {
    name: "object",
    age: 1,
    foo: function (name: string) {
        return `Ave, ${name}`;
    }
}

function returnSomething (name: string): number | undefined {
    return name.length * 31 + 5;
}

const Name: string = "John";
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
        return this.tasks.filter((task) => !task.completed)
    }
}

const colorer = (s: string, color: number) => `\x1b[3${color}m${s}\x1b[0m`;
console.log(colorer("String", 2))
console.log(obj.foo("Avrelius"))
eventTask.printGuestList()
console.log(tasks.getTasksToDo())
console.log(square(3));
