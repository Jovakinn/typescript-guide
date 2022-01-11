"use strict";
class Student {
    constructor(firstName, lastName, age, averageMark, isAlive) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._averageMark = averageMark;
        this._isAlive = isAlive;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get averageMark() {
        return this._averageMark;
    }
    set averageMark(value) {
        this._averageMark = value;
    }
    get isAlive() {
        return this._isAlive;
    }
    set isAlive(value) {
        this._isAlive = value;
    }
    static printStudent(student) {
        console.log("Name: " + student._firstName + "\nLast name: " + student._lastName
            + "\nAge: " + student._age + "\nAverage nark: " + student._averageMark +
            "\nIsAlive: " + student._isAlive);
    }
}
let maxStudent = new Student("Max", "Khodakov", 17, 100.0, true);
Student.printStudent(maxStudent);
// array of tuples
const contact = [["Max", 17], ["Jack", 122], ["Chan", 121]];
console.log(contact);
function sayMyName(name) {
    console.log(name);
}
sayMyName("Heisenberg");
// Never
function throwError(message) {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            throw new Error(message);
        }
    }
}
const login = 'admin';
const id1 = 12345;
const id2 = "12345";
const id3 = true;
console.log(id1 + " " + id2 + " " + id3);
function getUserOnlineMessage(numberOfOnlineUsers) {
    if (numberOfOnlineUsers) {
        console.log('There are ${numberOfOnlineUsers} )');
    }
    else {
        console.log('there are no one');
    }
}
getUserOnlineMessage(122);
//# sourceMappingURL=types.js.map