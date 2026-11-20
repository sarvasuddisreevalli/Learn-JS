// CONTROL FLOW, LOOPS, FUNCTIONS & ARRAYS

// TOPIC 1: CONDITIONAL STATEMENTS
// Types: if, if....else, else if, switch

//--------------------------------------------------------//
// 1. IF STATEMENT
// Executes code only when condition is truthy.

let marks = 85;

if (marks >= 40) {
    console.log("Pass");
}

// Output: Pass


//--------------------------------------------------------//
// 2. IF...ELSE STATEMENT
// if -> Executes when condition is truthy
// else -> Executes when condition is falsy

let age = 17;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Output: Not eligible to vote


//--------------------------------------------------------//
// 3. ELSE IF STATEMENT
// Used to check multiple conditions.
// Only the FIRST matching branch executes.

let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Output: Grade B


//--------------------------------------------------------//
// 4. SWITCH STATEMENT
// Used to compare one value against multiple cases.
// Uses strict matching (like ===).

let priority = "High";

switch (priority) {

    case "High":
        console.log("Complete immediately");
        break;

    case "Medium":
        console.log("Complete today");
        break;

    case "Low":
        console.log("Complete later");
        break;

    default:
        console.log("Invalid priority");
}
// Output: Complete immediately

// break exits the switch statement without break execution may continue into the following cases (fall-through).
// default -> Runs when no case matches, unless execution reaches it by fall-through.

//--------------------------------------------------------//
// 5. TRUTHY & FALSY CONDITIONS

let username = "";

if (username) {
    console.log("Welcome " + username);
} else {
    console.log("Username is empty");
}
// Output: Username is empty

// Falsy values:
// false, 0, -0, 0n, "", null, undefined, NaN

// All other values are truthy.
// Examples: "false", [], {}, 1

//--------------------------------------------------------//
// 6. NESTED IF STATEMENT
// An if statement inside another if statement.

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Welcome Admin");
    } else {
        console.log("Welcome User");
    }

} else {
    console.log("Please login");
}

// Output: Welcome Admin

//--------------------------------------------------------//
// 7. Example usage in SMART TASK TRACKER

const task = {
    title: "Learn JavaScript",
    priority: "High",
    completed: false
};

if (task.completed) {
    console.log("Task Completed");
} else if (task.priority === "High") {
    console.log("Complete this task first!");
} else {
    console.log("Complete when possible");
}

// Output: Complete this task first!

//---------------------------------------------------------//
// Use if for ranges and complex conditions.
// Use switch for multiple exact-value comparisons.


//--------------------------------------------------------//
// Loops : for, while, do...while, for...of, for...in

// 1. FOR LOOP
// Used when we know or control the number of iterations.
// Syntax: for(initialization; condition; update)

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output: 1 2 3 4 5 (each on a new line)

// Execution order:
// Initialization -> Condition -> Body -> Update -> Condition
// Initialization runs only once.
// Condition is checked before each iteration.


//--------------------------------------------------------//
// 2. WHILE LOOP
// Executes while the condition is truthy.
// Condition is checked before executing the body.

let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}

// Output: 1 2 3

// If the condition is initially false,
// the loop executes zero times.

// IMPORTANT:
// Forgetting to update the variable may cause an infinite loop.


//--------------------------------------------------------//
// 3. DO...WHILE LOOP
// Executes the body at least once.
// Condition is checked AFTER executing the body.

let j = 10;

do {
    console.log(j);
    j++;
} while (j <= 5);

// Output: 10

// Difference:
// while -> Checks condition first.
// do...while -> Executes body first.


//--------------------------------------------------------//
// 4. FOR...OF LOOP
// Iterates over VALUES of iterable objects.
// Commonly used with arrays and strings.

const subjects = ["JavaScript", "DSA", "OS"];

for (const subject of subjects) {
    console.log(subject);
}

// Output:
// JavaScript
// DSA
// OS

// String example:

for (const letter of "JS") {
    console.log(letter);
}

// Output:
// J
// S

// for...of is similar to Python's:
// for subject in subjects:


//--------------------------------------------------------//
// 5. FOR...IN LOOP
// Iterates over enumerable PROPERTY KEYS of an object.

const student = {
    name: "Ravi",
    age: 20,
    course: "CSE"
};

for (const key in student) {
    console.log(key, student[key]);
}

// Output:
// name Ravi
// age 20
// course CSE

// key -> Property name
// student[key] -> Value of that property

// IMPORTANT:
// student.key is NOT the same as student[key].
// student.key searches for a property literally named "key".

// for...in may also include inherited enumerable properties.
// Object.keys() is generally preferred for own properties.


//--------------------------------------------------------//
// 6. FOR...OF VS FOR...IN

const languages = ["JS", "Python", "Java"];

// for...of -> Values
for (const value of languages) {
    console.log(value);
}

// Output: JS Python Java

// for...in -> Keys (array indices as strings)
for (const index in languages) {
    console.log(index);
}

// Output: 0 1 2

// For arrays, generally prefer for...of.


//--------------------------------------------------------//
// 7. BREAK STATEMENT
// Immediately terminates the loop.

for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break;
    }

    console.log(k);
}

// Output:
// 1
// 2


//--------------------------------------------------------//
// 8. CONTINUE STATEMENT
// Skips the current iteration and continues the loop.

for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue;
    }

    console.log(k);
}

// Output:
// 1
// 2
// 4
// 5

// break -> Stops the entire loop.
// continue -> Skips only the current iteration.


//--------------------------------------------------------//
// 9. NESTED LOOPS
// A loop inside another loop.

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 2; col++) {
        console.log(row, col);
    }
}

// Output:
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2

// Inner loop completes for each outer loop iteration.
// Total iterations = 3 * 2 = 6


//--------------------------------------------------------//
// 10. LOOP WITH ARRAY INDEX
// Useful when both index and value are needed.

const topics = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < topics.length; i++) {
    console.log(i, topics[i]);
}

// Output:
// 0 HTML
// 1 CSS
// 2 JavaScript

// Another approach: array.entries()

for (const [index, topic] of topics.entries()) {
    console.log(index, topic);
}

// Output:
// 0 HTML
// 1 CSS
// 2 JavaScript

//--------------------------------------------------------//
// IMPORTANT: for...in RETURNS STRING KEYS

const arr = [10, 20, 30];

for (const index in arr) {
    console.log(typeof index);
}

// Output:
// string
// string
// string

// for...in returns array indices as strings, not numbers.

//--------------------------------------------------------//
// Example usage in SMART TASK TRACKER

const tasks = [
    { title: "Learn JavaScript", completed: true },
    { title: "Practice DSA", completed: false },
    { title: "Study OS", completed: true },
    { title: "Learn React", completed: false }
];

let completedCount = 0;
let pendingCount = 0;

for (const task of tasks) {
    if (task.completed) {
        completedCount++;
    } else {
        pendingCount++;
    }
}

console.log("Total Tasks:", tasks.length);
console.log("Completed:", completedCount);
console.log("Pending:", pendingCount);

// Output:
// Total Tasks: 4
// Completed: 2
// Pending: 2

//--------------------------------------------------------//
