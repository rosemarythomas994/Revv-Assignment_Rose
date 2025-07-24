//Basic Types
var age = 25;
var studentName = "Rose";
var isOnline = true;
var hobbies = ["Reading", "Coding"];
console.log(age);
console.log(studentName);
console.log(isOnline);
console.log(hobbies);
//Functions with Types
console.log("...........Functions.........");
function greet1(name) {
    return "Hello, " + name;
}
console.log(greet1("Mary"));
console.log("...........Interfaces.........");
var user = {
    id: 1,
    name: "Rose",
    email: "rose@gmail.com"
};
console.log(user);
// Classes and Constructors
console.log("...........Classes and Constructors.........");
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.honk = function () {
        console.log("".concat(this.brand, " says Beep!"));
    };
    return Car;
}());
var myCar = new Car("Toyota");
myCar.honk();
// Union Types & Type Aliases
console.log("...........Union Types & Type Aliases.........");
function printId(id) {
    console.log("ID is: " + id);
}
printId(101);
printId("ABC123");
// Arrays & Tuples
console.log("...........Arrays & Tuples.........");
var scores = [90, 85, 77];
var person;
person = ["John", 30];
console.log(scores);
console.log(person);
// Enums
console.log("...........Enums.........");
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
console.log(move);
var move1 = Direction.Down;
console.log(move1);
// Generics
console.log("...........Generics.........");
function identity(arg) {
    return arg;
}
console.log(identity("Hello"));
console.log(identity(123));
//function
console.log("...........function.........");
var username = "Alice";
var age1 = 25;
var isAdmin = true;
function greet2(user) {
    console.log("Hello, " + user);
}
greet2(username);
var ae = {
    name: "John",
    privileges: ["manage-users"],
    startDate: new Date()
};
var union = {
    name: "John",
    privileges: ["manage-users"],
    startDate: new Date()
};
console.log(ae);
console.log(union);
