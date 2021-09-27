class Typescript {
    version: string

    constructor(version: string) {
        this.version = version;
    }
    info(name: string) {
        return '[${name}]: Typescript version is ${this.version}'
    }
}

export class Car {
    model: string
    year: number = 4

    constructor(model: string, numberOfWheels: number) {
        this.model = model;
        this.year = numberOfWheels;
    }
}

//====================
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor(voice: string, color: string) {
        this.voice = voice;
        this.color = color;
    }

    private static go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat("meaww", "White")
console.log(cat.color.valueOf().toUpperCase())
// ============================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    info(): string {
        return "Info.";
    }

    render(): void {
        console.log("Component of render")
    }
}
