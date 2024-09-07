// ======================== generic class ================================
class KeyValuePair<T, V> {
  constructor(public key: T, public value: V) {}
}

// instance of a generic class (object)
let keyValue = new KeyValuePair<number, string>(11, "Apple");
keyValue.key.toLocaleString();
keyValue.value.toLowerCase();

// console.log(keyValue.value.toLowerCase());

// ======================== generic function ================================
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
// let util = new ArrayUtils();
// let number = util.wrapInArray(1);

let number = ArrayUtils.wrapInArray(1);

// console.log(number);

// ======================== generic interface ================================

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(): Result<T> {
  return { data: null, error: null };
}

interface IUser {
  username: string;
}

interface IProduct {
  title: string;
}

let result = fetch<IUser>();
result.data?.username;

let result2 = fetch<IProduct>();
result2.data?.title;

// ======================== generic constraints ================================
// applies constraints on generic type

// function echo<T extends string | number>(value: T) {
//   console.log(value);
// }

// // can extend object/ class/ interface/ anything
// function echo<T extends { name: string }>(value: T): void {
//   console.log(value);
// }

// interface IPerson {
//   name: string;
// }

// function echo<T extends IPerson>(value: T): void {
//   console.log(value);
// }

class Player {
  constructor(public name: string) {}
}

class FirstPlayer extends Player {}

function echo<T extends Player>(value: T): void {
  console.log(value);
}

echo({ name: "Bikash" });
echo(new FirstPlayer("BIkash"));
