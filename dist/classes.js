"use strict";
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return '[${name}]: Typescript version is ${this.version}';
    }
}
class Car {
    constructor(model, numberOfWheels) {
        this.numberOfWheels = 4;
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }
}
//====================
class Animal {
    constructor(voice, color) {
        this.voice = '';
        this.color = 'black';
        this.voice = voice;
        this.color = color;
    }
    static go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat("meaww", "White");
console.log(cat.color.valueOf().toUpperCase());
// ============================
class Component {
}
class AppComponent extends Component {
    info() {
        return "Info.";
    }
    render() {
        console.log("Component of render");
    }
}
//# sourceMappingURL=classes.js.map