import e from "express";

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

const COLORS: string[] = [
    "black", "white", "green", "yellow", "orange",
]

const colorer = (s: string, color: number): string => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = (name: string) => {
    let result = '';
    const letters = name.split('');
    let color = 1;
    for(const letter of letters) {
        result += colorer(letter, color++);
        if (color > COLORS.length) color = 1;
    }
    return result;
};

const greetings = (name: string): string => {
    return name.includes('Augustus') ? `Greetings,  ${colorize(name)}!` : `Hello, ${name}!`;
};

const fullName = 'Marcus Aurelius Antonius Augustus';
console.log(greetings(fullName));



const adder = (initial: number = 0) => {
    return {
        value: initial,
        steps: [initial],
        add: function (value: number) {
            this.steps.push(value);
            this.value += value;
            return this;
        }
    };
};
// usage
{
    const {value, steps} = adder(5).add(-8).add(11);
    console.log(value);
    const [a, b, c] = steps;
    console.log(a, b, c);
}

const Adder = class {
    public  steps: number[];
    public value: number;

    constructor(initial: number = 0) {
        this.steps = [initial];
        this.value = initial;
    }

    public add(value: number): this {
        this.steps.push(value);
        this.value += value;
        return this;
    }
}

const {value, steps} = new Adder(5).add(-8).add(11);
console.log(value);
const [a, b, c] = steps;
console.log(a, b, c);

