export class Human {
    private _Name: string
    private _Age: number

    constructor(Name: string, Age: number) {
        this._Name = Name;
        this._Age = Age;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Age(): number {
        return this._Age;
    }

    set Age(value: number) {
        this._Age = value;
    }
}