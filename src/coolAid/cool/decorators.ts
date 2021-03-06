function Log(constructor: Function) {
    console.log(constructor)
}

function Log2(target: any, propName: string | Symbol){
    console.log(target)
    console.log(propName)
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor){
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

@Log
class ComponentClass {
    @Log2
    name: string

    @Log3
    get componentName(){
        return this.name
    }

    constructor(name: string) {
        this.name = name
    }

    logName(): void {
        console.log('Component Name: ${this.name}')
    }
}

interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return function
    <T extends { new(...args: any[]): object }>
    (Constructor: T){
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);
                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: '#card',
    template: '<div class="card"><div class="card-content"><span class="card-title">Card Component</span></div></div> '
})

class CardComponent {
    constructor(public name: string){
    }

    logName(): void {
        console.log('Component name: ${this.name}')
    }
}

const card = new CardComponent('My Card Component')
