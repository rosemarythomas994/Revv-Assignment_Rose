
//Basic Types
let age: number = 25;
let studentName: string = "Rose";
let isOnline: boolean = true;
let hobbies: string[] = ["Reading", "Coding"];
console.log(age);
console.log(studentName);
console.log(isOnline);
console.log(hobbies);

//Functions with Types
console.log("...........Functions.........");
function greet1(name: string): string {
  return "Hello, " + name;
}

console.log(greet1("Mary"));

// Interfaces
interface User {
  id: number;
  name: string;
  email: string; 
}
console.log("...........Interfaces.........");
const user: User = {
  id: 1,
  name: "Rose",
  email:"rose@gmail.com"
};
console.log(user);

// Classes and Constructors
console.log("...........Classes and Constructors.........");
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  honk(): void {
    console.log(`${this.brand} says Beep!`);
  }
}

const myCar = new Car("Toyota");
myCar.honk();


// Union Types & Type Aliases
console.log("...........Union Types & Type Aliases.........");
type ID = number | string;

function printId(id: ID) {
  console.log("ID is: " + id);
}

printId(101);
printId("ABC123");


// Arrays & Tuples
console.log("...........Arrays & Tuples.........");
let scores: number[] = [90, 85, 77];

let person: [string, number]; 
person = ["John", 30];
console.log(scores);
console.log(person);


// Enums
console.log("...........Enums.........");
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); 
let move1: Direction = Direction.Down;
console.log(move1); 

// Generics
console.log("...........Generics.........");
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));

//function
console.log("...........function.........");

let username: string = "Alice";
let age1: number = 25;
let isAdmin: boolean = true;

function greet2(user: string): void {
  console.log("Hello, " + user);
}

greet2(username);


//🔹 Union & Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
console.log("...........Union.........");

type AdminOrEmployee = Admin | Employee;

const a1: AdminOrEmployee = {
  name: "Rose",
  privileges: ["delete-users"]
}; // ✅ Valid
console.log("...........one type employee.........");
console.log(a1);
const a2: AdminOrEmployee = {
  name: "John",
  startDate: new Date()
}; // ✅ Valid
console.log("...........one type admin .........");

console.log(a2);
const a3: AdminOrEmployee = {
  name: "Mary",
  privileges: ["edit"],
  startDate: new Date()
}; // ✅ Allowed because it satisfies both Admin and Employee
console.log("...........both employee and admin.........");
console.log(a3);


// const a4: AdminOrEmployee = {
//   name: "Fail"
// }; 
// ❌ ERROR: Type '{ name: string; }' is not assignable to type 'AdminOrEmployee'.
// Either 'privileges' OR 'startDate' must be provided




console.log("...........Intersection .........");
type AdminEmployee = Admin & Employee;
const ae1: AdminEmployee = {
  name: "John",
  privileges: ["read", "write"],
  startDate: new Date()
}; // ✅ Valid
console.log("...........both two types .........");
console.log(ae1);
// ❌ Negative Case (Invalid) – Missing privileges

// const ae2: AdminEmployee = {
//   name: "Sara",
//   startDate: new Date()
// };
// ❌ ERROR: Property 'privileges' is missing

// ❌ Negative Case (Invalid) – Missing startDate
// const ae3: AdminEmployee = {
//   name: "David",
//   privileges: ["admin"]
// };
// ❌ ERROR: Property 'startDate' is missing


// 🔹 Type Guards
console.log("...........Type Guards .........");

function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}
console.log(padLeft("Hello", 5));
console.log(padLeft("Hello", ">>> "));
console.log(padLeft("World", 0));
console.log(padLeft("Hi", ""));

// Using in Operator (Common for objects)\
type Admin1 = { name: string; privileges: string[] };
type Employee1 = { name: string; startDate: Date };

type UnknownPerson = Admin1 | Employee1;

function printInfo(person: UnknownPerson) {
  if ("privileges" in person) {
    console.log("Admin Privileges:", person.privileges); // ✅ Safe
  }
  if ("startDate" in person) {
    console.log("Employee Start Date:", person.startDate); // ✅ Safe
  }
}
// 🔐 2. Using typeof (for primitives)
function printPadding(padding: string | number) {
  if (typeof padding === "number") {
    console.log("Padding is a number:", padding);
  } else {
    console.log("Padding is a string:", padding);
  }
}
// 🔐 3. Using instanceof (for class instances)
class Car1 {
  drive() { console.log("Driving..."); }
}
class Truck {
  load() { console.log("Loading cargo..."); }
}

function useVehicle(v: Car1 | Truck) {
  if (v instanceof Truck) {
    v.load(); // ✅ Safe
  } else {
    v.drive(); // ✅ Safe
  }
}

// 🔐 4. Custom Type Guards (Advanced)
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move2(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // ✅
  } else {
    pet.fly(); // ✅
  }
}

// 🟦 3. Object-Oriented TypeScript (OOP)
class Person {
  constructor(public name: string) {}

  greet(): void {
    console.log("Hello, " + this.name);
  }
}

class Employee2 extends Person {
  constructor(name: string, public jobTitle: string) {
    super(name);
  }

  showJob(): void {
    console.log(`${this.name} is a ${this.jobTitle}`);
  }
}

const emp = new Employee2("Alice", "Developer");
emp.greet();
emp.showJob();


// 🔹 Access Modifiers: public, private, protected

class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}


