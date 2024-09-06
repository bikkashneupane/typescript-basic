// Define a class called Logger that takes the name of a file in its constructor and provides
// a method for writing messages to that file. Don’t worry about the actual file I/O
// operations. Just define the class with the right members.

class Logger {
  constructor(public fileName: string) {}

  writeToFile() {
    console.log("Writing to File...");
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

// What is the difference between private and protected members?
// Answer: Private memebers are only accessable in current class and they cannot be inherited but protected can be inherited

interface Address {
  street: string;
  city: string;
  zipCode: 3144;
}

interface User {
  name: string;
  salary: number;
  address: Address;
}

let employee: User = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};
