// OOP Object Oriendted Programming
// Objects as building blocks
// Each Object has Properties and Methods

// ============================= Class =============================
class Account {
  // declare properties of the class
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string; // Optional property (can be undefined)

  // constructor of the class => called when new instance of class is created => parameters initialise the class
  // this represent current object being created
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  // methods of the class
  deposite(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  // get balance
  getBalance() {
    return this._balance;
  }

  // private method
  //   private calculateTax() {}

  // getter and setter
  get balance() {
    return this._balance;
  }

  //   set balance(amount: number) {
  //     if (amount <= 0) throw new Error("Invalid amount");
  //     this._balance += amount;
  //   }
}

// ============================= object => instance of Account class ===================================
let account = new Account(1200, "Bikash", 200);
// console.log(account);

account.deposite(500);

// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

// read-only and optional properties
// readonly prefix for propertirs that cannot be changed like id/account number
// optional chain the properties  but dont define in constructor

account.nickname = "neu";
// console.log(account2);

// ========================= Access Control Keyword ========================
// public / private / protected
// use private keyword to make a property/method only accessable within the class => to restrict access
// by default all the properties/methods in a class are public unless specified private/protected

// console.log(account.getBalance());

// ============================= Parameters =============================
// write consice code by directly declaring access in constructor
class Account2 {
  nickname?: string;
  constructor(
    public readonly id: number,
    public owner: string // private _balance: number
  ) {}
}

// ============================= Getters / Setters =============================

// ============================= Index Signature =============================
class SeatAssignment {
  // A1, A2,.....
  // Bikash, Neupane, John, ....
  // A1:Bikash.....

  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Bikash";
seats.A2 = "John";
seats["A3"] = "Doe";

// ============================= Static Members =============================
// static keyword makes a property/method belong to class rather than instance of object so it can be global

class Ride {
  private static _totalRide: number = 0;

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

let ride1 = new Ride();
ride1.startRide();

let ride2 = new Ride();
ride2.startRide();

// console.log(Ride.activeRides);

// ============================= Inheritence =============================
// remove repetitive declaration in multiple classes with similar properties
// parent/super/base => child

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takingTest() {
    console.log("Taking Test...");
  }
}

let student = new Student(11, "Bikash", "Neupane");
// console.log(student.fullName);

// ============================= Method Overriding =============================
// overrides a method in super class

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principle extends Person {
  override get fullName() {
    return "Principle " + super.fullName;
  }
}

let teacher = new Teacher("Mark", "Henry");
// console.log(teacher.fullName);

// ============================= Polymorphism =============================
// Poly: many morph: form
// class should be open to extension / close to modification

function printNames(people: Person[]): void {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// printNames([
//   new Student(11, "Bikash", "Neupane"),
//   new Teacher("Jon", "Moxley"),
//   new Principle("Kofi", "Kingston"),
// ]);

// ============================= Private vs Protected =============================
// Private method is not inhereted, only accessed within class
// Private method is inherited

// ============================= Abstract Classes and Methods =============================
// Abstact class are classes that are not ready/ other class need to extend
// Abstract methods can only be defined in a abstract class
// Abstract class cannot be instantiased ...
// other class need to extend the abstract class and instance of that class is only possible

abstract class Shape {
  constructor(public colour: string) {}

  // Abstract methods don't have a body
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, colour: string) {
    super(colour);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

// this throws as error because abstract class cannot be instantiated
// let shape = new Shape()

let shape1 = new Circle(5, "red");
// shape1.render();

// ============================= Interface =============================
interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// interface extends another interface
interface CloudCalender extends Calender {
  sync(): void;
}

// class implements interface
class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
