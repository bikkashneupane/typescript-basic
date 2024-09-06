"use strict";
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeToFile() {
        console.log("Writing to File...");
    }
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employee = {
    name: "John Smith",
    salary: 50000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: 3144,
    },
};
//# sourceMappingURL=oop_exercise.js.map