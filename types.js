var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, averageMark, isAlive) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._averageMark = averageMark;
        this._isAlive = isAlive;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "averageMark", {
        get: function () {
            return this._averageMark;
        },
        set: function (value) {
            this._averageMark = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "isAlive", {
        get: function () {
            return this._isAlive;
        },
        set: function (value) {
            this._isAlive = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.printStudent = function (student) {
        console.log("Name: " + student._firstName + "\nLast name: " + student._lastName
            + "\nAge: " + student._age + "\nAverage nark: " + student._averageMark +
            "\nIsAlive: " + student._isAlive);
    };
    return Student;
}());
var maxStudent = new Student("Max", "Khodakov", 17, 100.0, true);
Student.printStudent(maxStudent);
// array of tuples
var contact = [["Max", 17], ["Jack", 122], ["Chan", 121]];
console.log(contact);
function sayMyName(name) {
    console.log(name);
}
sayMyName("Heisenberg");
// Never
function throwError(message) {
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            throw new Error(message);
        }
    }
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 12345;
var id2 = "12345";
var id3 = true;
console.log(id1 + " " + id2 + " " + id3);
