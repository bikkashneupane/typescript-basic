//array
let numbers: number[] = [1, 2, 3];

// tuples
let user: [number, string] = [1, "Bikash"];

// enums
//PascalCase
const enum Size {
  Small = 0,
  Medium = 1,
  Large = 2,
} //by default values will be 0,1,...

enum Size1 {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Medium;
console.log(mySize);

// functions
// function calculateTax(income: number): number {
//   return 0;
// }

// objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Bikash",
  retire: (date: Date) => {
    console.log(date);
  },
};
