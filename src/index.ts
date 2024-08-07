// //array
// let numbers: number[] = [1, 2, 3];

// // tuples
// let user: [number, string] = [1, "Bikash"];

// // enums
// //PascalCase
// const enum Size {
//   Small = 0,
//   Medium = 1,
//   Large = 2,
// } //by default values will be 0,1,...

// enum Size1 {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// // functions
// function calculateTax(income: number, year: number = 2022): number {
//   if (year > 2022) {
//     return income / 1.5;
//   }
//   return income / 1.4;
// }
// console.log(calculateTax(50_000));

// //type alias
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };
// // objects
// let employee: Employee = {
//   id: 1,
//   name: "Bikash",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// console.log(employee);

// // union types | to accept multiple input data type
// function kgToLbs(weight: number | string): number {
//   return typeof weight === "number" ? weight * 2.2 : parseInt(weight) * 2.2;
// }

// // Intersection type &
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// // Literal (exact | specific)
// type Currency = "AUD" | "USD" | "Rs.";
// let currency1: Currency = "Rs.";

// // Nullable
// function greet(name: string | null | undefined): void {
//   if (name) {
//     console.log("Hello" + name);
//   } else {
//     console.log("Hello stranger");
//   }
// }

// greet("Bikash");
// greet(null);
// greet(undefined);

// // Optional Chaning
// type Customer = {
//   birthday?: Date;
//   skills?: string[];
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0
//     ? null
//     : { birthday: new Date(), skills: ["hockey", "bungee jumping"] };
// }

// let customer1 = getCustomer(1);
// // optional property access operator
// console.log(customer1?.birthday?.getFullYear());
// // optional element access operator
// console.log(customer1?.skills?.[1]);

// // Nullish Coaleshing ??
// let speed: number | null = null;

// let ride = {
//   // Flasy Value (0, null, undefined, '', NaN, false)
//   // Nullish coaleshing operator
//   speed: speed ?? 30,
// };

// // Type Assertion ('as' keyword => telling complier we know about the type of the variable)
// // let phone = document.getElementById("phone") as HTMLInputElement; // or
// let phone = <HTMLInputElement>document.getElementById("phone");
// console.log(phone.value);

// // Unknown Type
// function flyCar(document: unknown): void {
//   // type narrowing
//   // We have to narrow down to a specific type before we can perform any operations on an unknown type.
//   if (typeof document === "string") {
//     document.toLowerCase();
//   }
//   // this throws error here with type unknown
//   document.move();

//   //     // these works if type set to any
//   //   document.move();
//   //   document.doWhatever();
//   //   document.fly();
// }

// // never type
// function processEvents(): never {
//   while (true) {
//     // Read a message from a queque
//   }
// }

// function errorMessage(message: string): never {
//   throw new Error(message);
// }

// // processEvents();
// errorMessage("Some Error message");
// console.log(
//   "This line will never execute because processEvents never returns anything"
// );
