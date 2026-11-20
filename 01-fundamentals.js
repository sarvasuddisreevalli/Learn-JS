// For output
console.log("10 + 20");
console.log(10+20);

// Variables
// let -> value can change
// const -> cannot reassign
// var -> older way (redeclaration allows in same scope)
// Scope : 
// Modern js var avoided becoz it has func scope, while let and const have block scope
// Example 
if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}

console.log(z); // 30
// console.log(x); // ReferenceError
// console.log(y); // ReferenceError


var city = "Hyderabad";
var city = "Chennai"; // Allowed
console.log(city); // Chennai

const pi = 3.14;
// pi = 3.15; TypeError 
// we can modify variables in const object/array declared, but not entire object reassign
const tasks = ["Study JavaScript"];
tasks.push("Practice DSA"); // ✅ Allowed
// tasks = ["Learn React"] TypeError
// we can't reassign but modify(add,update,delete) array elements
const task = {
    name: "Learn JavaScript",
    completed: false
};
task.completed = true; // ✅ Allowed
console.log(task.completed); // true
// task = {}; // ❌ TypeError
let ttask = "Learn JavaScript";
let priority = "High";
let completed = false;
console.log(ttask);
console.log(priority);
console.log(completed);

//--------------------------------------------------------//
// Data Types (Primitive(7),Non-Primitive(object))

// Primitive:
// 1.String(text)
let name = "Sreevalli";
let course = 'JavaScript';
let message = `Hello ${name}`; // python: print(f"Hello {name}")
console.log(message); 

// 2.Number(integers, decimals)
let age = 20;
let percentage = 97.5;
console.log(typeof age); //number
console.log(typeof percentage); //number
// NaN(not a number, refers to invalid numeric calculation), infinity also belong to number
console.log(typeof NaN);
console.log(0 / 0);

// 3.Boolean(true or false)
let isRaining = false;
isRaining = true;
console.log(isRaining);

// 4.undefined
let task1;
// variable created but value not assigned
console.log(task1); //undefined
console.log(typeof task1); //undefined

// 5.Null
// Intentionally empty
let selectedTask = null;
console.log(selectedTask); //null
console.log(typeof null); //object
// null -> primitive but typeof null -> object (this is historical behaviour)

// 6.BigInt
let bigNumber = 12345678901234567890n; //n imp 
console.log(typeof bigNumber); //bigint 
console.log(10n + 5n); //15n 
// console.log(10n + 5); //TypeError
// We can't mix BigInt & Number arithmetically 

// 7.Symbol (unique identifiers)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); //false, both same desc but symbols always unique 

// Non-Primitive (Object)
const task3 = {
    title: "Learn JavaScript",
    priority: "High",
    completed: false
};
console.log(task3.title);
console.log(task3.priority);
// Arrays belong to object category in JS  
const taskss = ["JavaScript","DSA","DevOps"];
console.log(taskss[0]); // JavaScript 
console.log(typeof taskss); //object
console.log(Array.isArray(taskss)); // true
// typeof [] returns "object" 
// Array.isArray() checks whether a value is an array

// Functions
function greet() {
    console.log("Hello World");
}
// Functions technically callable objects, but typeof return function 
console.log(typeof greet); // function

//--------------------------------------------------------------//
// Operators
// Arithmetic :
// +, -, *, /, %, **(exponentiation)
console.log(3**4);
console.log(10 - 2);
console.log(5/2); //In js 5/2 = 2.5 instead of 2
console.log(Math.floor(5/2)); // for lower integer result (2)

// Assignment :
// =, +=, -=, *=, /=, %=
let taskCount = 0;
taskCount += 1;
console.log(taskCount); // 1

//--------------------------------------------------------//
// Increment & Decrement: Prefix vs Postfix

let num = 10;

// Postfix -> use current value, then increment
console.log(num++); // 10
console.log(num);   // 11

// Prefix -> increment first, then use value
console.log(++num); // 12
console.log(num);   // 12

// Decrement
console.log(num--); // 12
console.log(num);   // 11

console.log(--num); // 10


//--------------------------------------------------------//
// Comparison Operators
// ==  -> Loose equality (type conversion may happen)
// === -> Strict equality (no type conversion)
// !=  -> Loose inequality
// !== -> Strict inequality
// >, <, >=, <=

console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(10 != "10");  // false
console.log(10 !== "10"); // true

console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10); // true

// Prefer === and !== in modern JavaScript


//--------------------------------------------------------//
// Logical Operators
// && -> AND
// || -> OR
// !  -> NOT

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn || isAdmin); // true
console.log(!isLoggedIn);          // false

// && and || can return actual operand values,
// not just true or false

console.log("Hello" || "Guest"); // Hello
console.log(0 || 10);            // 10


//--------------------------------------------------------//
// Ternary Operator
// condition ? valueIfTrue : valueIfFalse

let marks = 85;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result); // Pass

let isCompleted = false;

let status = isCompleted ? "Completed" : "Pending";

console.log(status); // Pending


//--------------------------------------------------------//
// Nullish Coalescing Operator (??)
// Default value only when left side is null or undefined

let score = 0;

console.log(score || 100); // 100
console.log(score ?? 100); // 0

// || -> default for falsy values
// ?? -> default only for null / undefined

//--------------------------------------------------------//
// Optional Chaining (?.)
// Safely access nested properties

const user = {
    name: "Ravi"
};

console.log(user.address?.city); // undefined

// Without ?. this would throw TypeError
// console.log(user.address.city);

//--------------------------------------------------------//
// TYPE CONVERSION
// Explicit -> Developer manually converts
// Implicit -> JavaScript automatically converts


// 1. Explicit Conversion

// String -> Number
let strNumber = "100";

let convertedNumber = Number(strNumber);

console.log(convertedNumber);        // 100
console.log(typeof convertedNumber); // number

console.log(Number("25.5")); // 25.5
console.log(Number(""));     // 0
console.log(Number("abc"));  // NaN


// Number -> String
let numberValue = 95;

let stringValue = String(numberValue);

console.log(stringValue);        // "95"
console.log(typeof stringValue); // string


// Boolean Conversion
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean("false")); // true

// Falsy values:
// false, 0, -0, 0n, "", null, undefined, NaN
// Other values are truthy


//--------------------------------------------------------//
// 2. Implicit Conversion (Type Coercion)

console.log("10" + 5); // "105"
console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log("10" / 2); // 5

console.log(true + 1);  // 2
console.log(false + 5); // 5

// + with strings -> concatenation
// -, *, / generally convert operands to numbers


// Evaluation Order

console.log(10 + 20 + "30"); // "3030"
console.log("10" + 20 + 30); // "102030"


// Number(), parseInt(), parseFloat()

console.log(Number("25.5"));       // 25.5
console.log(parseInt("25.5", 10)); // 25
console.log(parseFloat("25.5"));  // 25.5

console.log(Number("25px"));       // NaN
console.log(parseInt("25px", 10));  // 25

// Number() -> Converts the complete value
// parseInt() -> Parses integer prefix
// parseFloat() -> Parses decimal prefix
