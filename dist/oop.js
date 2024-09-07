"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1200, "Bikash", 200);
account.deposite(500);
account.nickname = "neu";
class Account2 {
    constructor(id, owner) {
        this.id = id;
        this.owner = owner;
    }
}
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Bikash";
seats.A2 = "John";
seats["A3"] = "Doe";
class Ride {
    startRide() {
        Ride._totalRide++;
    }
    stopRide() {
        Ride._totalRide--;
    }
    static get activeRides() {
        return Ride._totalRide;
    }
}
Ride._totalRide = 0;
let ride1 = new Ride();
ride1.startRide();
let ride2 = new Ride();
ride2.startRide();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking...");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takingTest() {
        console.log("Taking Test...");
    }
}
let student = new Student(11, "Bikash", "Neupane");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return "Principle " + super.fullName;
    }
}
let teacher = new Teacher("Mark", "Henry");
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(colour) {
        this.colour = colour;
    }
}
class Circle extends Shape {
    constructor(radius, colour) {
        super(colour);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
let shape1 = new Circle(5, "red");
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=oop.js.map