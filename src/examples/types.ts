class Student {
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _averageMark: number;
    private _isAlive: boolean;


    constructor(firstName: string, lastName: string, age: number, averageMark: number, isAlive: boolean) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._averageMark = averageMark;
        this._isAlive = isAlive;
    }


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get averageMark(): number {
        return this._averageMark;
    }

    set averageMark(value: number) {
        this._averageMark = value;
    }

    get isAlive(): boolean {
        return this._isAlive;
    }

    set isAlive(value: boolean) {
        this._isAlive = value;
    }

    static printStudent(student: Student){
        console.log("Name: " + student._firstName + "\nLast name: " + student._lastName
            + "\nAge: " + student._age + "\nAverage nark: " + student._averageMark +
            "\nIsAlive: " + student._isAlive);
    }
}

let maxStudent = new Student("Max", "Khodakov", 17, 100.0, true);
Student.printStudent(maxStudent);

// array of tuples
const contact: [string, number][] = [["Max", 17], ["Jack", 122], ["Chan", 121]];
console.log(contact);

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName("Heisenberg");

// Never
function throwError (message: string) {
    for (let i = 0; i < 10; i++){
        if (i === 5) {
            throw new Error(message);
        }
    }
}

// Type they are like aliases to primitive types
type Login = string
const login: Login = 'admin';

type ID = string | number | boolean
const id1: ID = 12345;
const id2: ID = "12345";
const id3: ID = true;

console.log(id1 + " " + id2 + " " + id3)

type SomeType = string | null | undefined

function getUserOnlineMessage(numberOfOnlineUsers: number) {
    if (numberOfOnlineUsers) {
        console.log('There are ${numberOfOnlineUsers} )')
    } else {
        console.log('there are no one')
    }
}

getUserOnlineMessage(122);
