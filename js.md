# JavaScript Exam Cram Guide - Complete 30 Minutes

> **Time Remaining: 30 Minutes | Total Sections: 12**
> **Strategy: Read fast, understand concepts, mark what you know, focus on weak areas**

---

## 1. VARIABLES & DATA TYPES - Complete Guide

### What Are Variables?
Variables are **containers** that store data values. Think of them as labeled boxes where you store information.

### Three Ways to Declare Variables

**1. var (Old Way - Avoid This)**
```javascript
var name = "John";
var age = 25;
var age = 30;  // Allowed but dangerous - can redeclare
```

**Problems with var:**
- Function scoped (not block scoped)
- Leaks outside blocks (if, for, while)
- Gets hoisted with undefined
- Can be redeclared (causes bugs)
- Ignores `{ }` boundaries

**2. let (Modern Way - For Changing Values)**
```javascript
let score = 0;
score = 10;        // ✅ Can reassign
score = 20;        // ✅ Can change again

let score = 30;    // ❌ Cannot redeclare
```

**let Features:**
- Block scoped (respects `{ }`)
- Can be reassigned
- Cannot be redeclared
- Temporal Dead Zone (TDZ)
- Best for loop counters

**3. const (Modern Way - For Constants)**
```javascript
const PI = 3.14;
PI = 3.15;         // ❌ ERROR - Cannot reassign

const student = {name: "John"};
student.name = "Mike";  // ✅ Can modify object content
student = {};           // ❌ Cannot reassign variable
```

**const Features:**
- Block scoped
- CANNOT be reassigned
- MUST initialize immediately
- CAN modify object/array contents
- Best practice: use by default

### Variable Naming Rules

**Valid Names:**
```javascript
let firstName;      // ✅ camelCase
let _private;       // ✅ underscore
let $element;       // ✅ dollar sign
let user123;        // ✅ numbers (not at start)
```

**Invalid Names:**
```javascript
let 123user;        // ❌ starts with number
let my-var;         // ❌ hyphens not allowed
let function;       // ❌ reserved keyword
let my var;         // ❌ spaces not allowed
```

**Naming Conventions:**
```javascript
const MAX_USERS = 100;     // UPPER_CASE for true constants
let studentName = "John";  // camelCase for variables
```

### Data Types - 7 Total Types

JavaScript has **7 data types** divided into two categories:

**PRIMITIVE TYPES (6)** - Stored directly
**REFERENCE TYPES (1)** - Stored by reference

---

### Primitive Type 1: Number

Represents both integers and decimals (floating-point).

```javascript
let age = 25;                    // integer
let price = 99.99;               // decimal
let negative = -10;              // negative
let scientific = 2.5e3;          // 2500
let infinity = Infinity;         // special number
let notANumber = NaN;            // Not a Number

// Check type
typeof 42;                       // "number"
typeof 3.14;                     // "number"
typeof NaN;                      // "number" (yes, really!)
```

**Special Number Values:**
- `Infinity` → result of dividing by zero
- `-Infinity` → negative infinity
- `NaN` → "Not a Number" (invalid math operation)

**Number Operations:**
```javascript
let a = 10;
let b = 3;

a + b    // 13
a - b    // 7
a * b    // 30
a / b    // 3.333...
a % b    // 1 (remainder)
a ** b   // 1000 (10³)
```

---

### Primitive Type 2: String

Represents text. Can use single quotes, double quotes, or backticks.

```javascript
let name1 = 'John';              // single quotes
let name2 = "Mike";              // double quotes
let name3 = `Sarah`;             // backticks (template literal)

// Template Literals (backticks)
let age = 25;
let message = `I am ${age} years old`;  // "I am 25 years old"

// String concatenation
let first = "John";
let last = "Doe";
let full = first + " " + last;   // "John Doe"

// String length
"hello".length;                   // 5

// Accessing characters
"hello"[0];                       // "h" (first character)
"hello"[4];                       // "o" (last character)

typeof "hello";                   // "string"
```

**Important String Facts:**
- Strings are immutable (cannot change individual characters)
- Index starts at 0
- Template literals allow embedded expressions

---

### Primitive Type 3: Boolean

Represents logical values: `true` or `false`.

```javascript
let isStudent = true;
let isLoggedIn = false;

// Boolean from comparisons
let result = 5 > 3;              // true
let check = 10 === "10";         // false

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy

Boolean(1);                       // true
Boolean(0);                       // false
Boolean("hello");                 // true
Boolean("");                      // false

typeof true;                      // "boolean"
```

**Common Boolean Usage:**
```javascript
if (isLoggedIn) {
    console.log("Welcome!");
}

let canVote = age >= 18;         // true or false
```

---

### Primitive Type 4: Undefined

A variable that has been declared but NOT assigned a value.

```javascript
let x;                           // declared but not assigned
console.log(x);                  // undefined

// Function with no return
function test() {
    // no return statement
}
console.log(test());             // undefined

// Object property that doesn't exist
let obj = {name: "John"};
console.log(obj.age);            // undefined

typeof undefined;                // "undefined"
```

**Key Points:**
- Automatically assigned by JavaScript
- Means "no value yet"
- Different from null

---

### Primitive Type 5: Null

Represents the **intentional absence** of any value. Set by programmer.

```javascript
let user = null;                 // explicitly empty

// Use case: resetting a variable
let data = {name: "John"};
data = null;                     // clear the data

typeof null;                     // "object" (JavaScript bug!)
```

**null vs undefined:**

| Feature | undefined | null |
|---------|-----------|------|
| Assignment | Automatic | Manual |
| Meaning | Not initialized | Intentionally empty |
| Type | "undefined" | "object" |
| Use case | Default value | Reset value |

```javascript
let a;                           // undefined (automatic)
let b = null;                    // null (intentional)

console.log(a == b);             // true (loose equality)
console.log(a === b);            // false (strict equality)
```

---

### Primitive Type 6: Symbol (ES6)

Creates unique identifiers. Rarely used in basics.

```javascript
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2);        // false (always unique)

typeof Symbol();                  // "symbol"
```

---

### Primitive Type 7: BigInt (ES2020)

For very large integers beyond Number's safe limit.

```javascript
let bigNum = 1234567890123456789012345678901234567890n;

typeof 123n;                      // "bigint"
```

---

### Reference Type: Object

Objects store collections of key-value pairs.

```javascript
let student = {
    name: "John",
    age: 18,
    course: "CSE"
};

// Arrays are objects
let numbers = [1, 2, 3, 4];
typeof numbers;                   // "object"

// Functions are objects
function greet() {}
typeof greet;                     // "function"

typeof {};                        // "object"
typeof [];                        // "object"
typeof null;                      // "object" (quirk!)
```

---

### The typeof Operator - MEMORIZE THIS

Returns a string indicating the type of a value.

```javascript
// Numbers
typeof 42;                        // "number"
typeof 3.14;                      // "number"
typeof NaN;                       // "number"
typeof Infinity;                  // "number"

// Strings
typeof "hello";                   // "string"
typeof 'world';                   // "string"
typeof `test`;                    // "string"

// Booleans
typeof true;                      // "boolean"
typeof false;                     // "boolean"

// Undefined
typeof undefined;                 // "undefined"
let x;
typeof x;                         // "undefined"

// Null (QUIRK!)
typeof null;                      // "object" ⚠️ Bug in JavaScript!

// Objects
typeof {};                        // "object"
typeof {name: "John"};            // "object"

// Arrays
typeof [];                        // "object"
typeof [1, 2, 3];                 // "object"

// Functions
typeof function(){};              // "function"

// Symbol
typeof Symbol();                  // "symbol"

// BigInt
typeof 123n;                      // "bigint"
```

**EXAM TIP:** `typeof null` returns `"object"` - this is a famous JavaScript bug that's never been fixed!

---

### Type Coercion (Automatic Type Conversion)

JavaScript automatically converts types in certain operations.

**String Concatenation:**
```javascript
"5" + 3;              // "53" (number → string)
5 + "3";              // "53" (number → string)
"Hello" + 10;         // "Hello10"
```

**Mathematical Operations:**
```javascript
"5" - 3;              // 2 (string → number)
"10" * "2";           // 20 (both → numbers)
"20" / "4";           // 5
"5" - "2";            // 3
```

**Boolean Context:**
```javascript
Boolean(1);           // true
Boolean(0);           // false
Boolean("hello");     // true
Boolean("");          // false
Boolean(null);        // false
Boolean(undefined);   // false
```

**Comparison Coercion:**
```javascript
5 == "5";             // true (loose equality, converts)
5 === "5";            // false (strict equality, no conversion)

0 == false;           // true
0 === false;          // false

null == undefined;    // true
null === undefined;   // false
```

---

### Complete Data Type Summary Table

| Type | Example | typeof Result | Mutable? |
|------|---------|---------------|----------|
| Number | `42`, `3.14` | "number" | No |
| String | `"hello"` | "string" | No |
| Boolean | `true`, `false` | "boolean" | No |
| Undefined | `undefined` | "undefined" | No |
| Null | `null` | "object" ⚠️ | No |
| Symbol | `Symbol()` | "symbol" | No |
| BigInt | `123n` | "bigint" | No |
| Object | `{}`, `[]` | "object" | Yes |
| Function | `function(){}` | "function" | Yes |

---

### Variable Declaration Best Practices

**1. Always declare variables**
```javascript
// Bad
x = 10;              // Creates global variable accidentally

// Good
let x = 10;
```

**2. Use const by default**
```javascript
const name = "John";       // Won't change
const marks = [85, 90];    // Array reference won't change
```

**3. Use let when value changes**
```javascript
let score = 0;
score = score + 10;        // Changes value
```

**4. Never use var**
```javascript
// Avoid
var x = 10;

// Use instead
let x = 10;
```

**5. Initialize when possible**
```javascript
// Good
let count = 0;
const PI = 3.14;

// Avoid
let count;              // undefined until assigned
```

---

### Common Variable Mistakes

**Mistake 1: Using undefined variables**
```javascript
console.log(x);        // ReferenceError
let x = 10;
```

**Mistake 2: Reassigning const**
```javascript
const PI = 3.14;
PI = 3.15;             // TypeError
```

**Mistake 3: Wrong typeof check**
```javascript
if (typeof x === "undefined") {  // ✅ Correct
    console.log("x is undefined");
}

if (x === undefined) {  // ❌ Error if x not declared
    console.log("x is undefined");
}
```

**Mistake 4: Forgetting var leaks**
```javascript
if (true) {
    var x = 10;
}
console.log(x);        // 10 (leaked out)
```

**Mistake 5: Case sensitivity**
```javascript
let name = "John";
let Name = "Mike";     // Different variables!
```

---

## 2. OPERATORS - Complete Guide

### Arithmetic Operators

Perform mathematical operations on numbers.

**Basic Operators:**
```javascript
let a = 10;
let b = 3;

// Addition
a + b              // 13

// Subtraction
a - b              // 7

// Multiplication
a * b              // 30

// Division
a / b              // 3.333...

// Modulus (Remainder)
a % b              // 1 (10 ÷ 3 = 3 remainder 1)

// Exponentiation (Power)
a ** b             // 1000 (10³)
```

**Increment and Decrement:**
```javascript
let count = 5;

// Post-increment (returns value, then increments)
console.log(count++);     // 5 (returns 5)
console.log(count);       // 6 (now incremented)

// Pre-increment (increments, then returns value)
count = 5;
console.log(++count);     // 6 (increments first)
console.log(count);       // 6

// Post-decrement
count = 5;
console.log(count--);     // 5
console.log(count);       // 4

// Pre-decrement
count = 5;
console.log(--count);     // 4
console.log(count);       // 4
```

**Key Difference:**
- `count++` → use value first, then increment
- `++count` → increment first, then use value

---

### Assignment Operators

Assign values to variables with shorthand operations.

```javascript
let x = 10;

// Basic assignment
x = 5;                    // x is now 5

// Addition assignment
x += 3;                   // x = x + 3 → 8

// Subtraction assignment
x -= 2;                   // x = x - 2 → 6

// Multiplication assignment
x *= 4;                   // x = x * 4 → 24

// Division assignment
x /= 2;                   // x = x / 2 → 12

// Modulus assignment
x %= 5;                   // x = x % 5 → 2

// Exponentiation assignment
x **= 3;                  // x = x ** 3 → 8
```

**Complete Table:**

| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

---

### Comparison Operators

Compare two values and return true or false.

**Equality Operators:**
```javascript
// Loose Equality (== and !=)
5 == 5;               // true
5 == "5";             // true (converts string to number)
true == 1;            // true
false == 0;           // true
null == undefined;    // true

// Strict Equality (=== and !==)
5 === 5;              // true
5 === "5";            // false (different types)
true === 1;           // false
false === 0;          // false
null === undefined;   // false

// Loose Inequality
5 != 5;               // false
5 != "5";             // false (converts)

// Strict Inequality
5 !== 5;              // false
5 !== "5";            // true (different types)
```

**⚠️ IMPORTANT: Always use === and !== to avoid unexpected behavior!**

**Relational Operators:**
```javascript
let a = 10;
let b = 5;

// Greater than
a > b;                // true
5 > 10;               // false

// Less than
a < b;                // false
5 < 10;               // true

// Greater than or equal
a >= 10;              // true
a >= 11;              // false

// Less than or equal
b <= 5;               // true
b <= 4;               // false

// String comparison (lexicographical)
"apple" < "banana";   // true
"zebra" > "apple";    // true
"2" > "12";           // true (string comparison!)
```

**Comparison Truth Table:**

| Comparison | Result |
|------------|--------|
| `5 > 3` | `true` |
| `5 < 3` | `false` |
| `5 >= 5` | `true` |
| `5 <= 3` | `false` |
| `5 == "5"` | `true` |
| `5 === "5"` | `false` |

---

### Logical Operators

Combine or invert boolean values.

**AND Operator (&&)**
Returns true only if BOTH operands are true.

```javascript
// Truth table
true && true;          // true
true && false;         // false
false && true;         // false
false && false;        // false

// Practical examples
let age = 25;
let hasLicense = true;

// Can drive if age >= 18 AND has license
let canDrive = (age >= 18) && hasLicense;    // true

// Multiple conditions
let a = 10;
let b = 20;
let c = 30;
(a < b) && (b < c);    // true (both conditions true)
```

**OR Operator (||)**
Returns true if AT LEAST ONE operand is true.

```javascript
// Truth table
true || true;          // true
true || false;         // true
false || true;         // true
false || false;        // false

// Practical examples
let isWeekend = false;
let isHoliday = true;

// Can relax if weekend OR holiday
let canRelax = isWeekend || isHoliday;       // true

// Multiple conditions
let score = 85;
(score >= 90) || (score >= 80);              // true
```

**NOT Operator (!)**
Inverts (reverses) a boolean value.

```javascript
!true;                 // false
!false;                // true

let isLoggedIn = false;
!isLoggedIn;           // true

// Double NOT (converts to boolean)
!!1;                   // true
!!0;                   // false
!!"hello";             // true
!!"";                  // false
```

**Combined Logical Operations:**
```javascript
let a = true;
let b = false;
let c = true;

// Complex expressions
(a && b) || c;         // true
a && (b || c);         // true
!(a && b);             // true
(!a || b) && c;        // false
```

**Short-Circuit Evaluation:**
```javascript
// AND (&&) stops at first false
false && console.log("Never runs");

// OR (||) stops at first true
true || console.log("Never runs");

// Default values with OR
let name = "" || "Guest";              // "Guest"
let score = 0 || 100;                  // 100
```

**Nullish Coalescing Operator (??)**
Returns right operand only if left is null or undefined.

```javascript
null ?? "default";           // "default"
undefined ?? "default";      // "default"
0 ?? "default";              // 0 (not null/undefined)
"" ?? "default";             // "" (not null/undefined)
false ?? "default";          // false (not null/undefined)

// Difference from OR
0 || "default";              // "default" (0 is falsy)
0 ?? "default";              // 0 (0 is not null/undefined)
```

---

### String Operators

The `+` operator concatenates (joins) strings.

```javascript
// String concatenation
"Hello" + " " + "World";     // "Hello World"

let first = "John";
let last = "Doe";
let full = first + " " + last;     // "John Doe"

// String + Number = String
"Age: " + 25;                // "Age: 25"
5 + "3";                     // "53"
"5" + 3;                     // "53"

// Template literals (better way)
let age = 25;
let message = `I am ${age} years old`;    // "I am 25 years old"

// Multi-line strings
let text = `Line 1
Line 2
Line 3`;
```

---

### Ternary (Conditional) Operator

Shorthand for if-else statements.

**Syntax:**
```javascript
condition ? valueIfTrue : valueIfFalse
```

**Examples:**
```javascript
// Simple ternary
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";     // "Adult"

// With numbers
let score = 85;
let grade = score >= 90 ? "A" : "B";            // "B"

// Nested ternary (avoid - hard to read)
let marks = 75;
let result = marks >= 90 ? "A" :
             marks >= 80 ? "B" :
             marks >= 70 ? "C" : "F";           // "C"

// Practical use
let discount = isPremium ? 20 : 10;
let message = isLoggedIn ? "Welcome back!" : "Please login";
```

---

### Operator Precedence (Order of Operations)

JavaScript evaluates operators in a specific order.

**Precedence Table (High to Low):**

1. `()` - Parentheses (grouping)
2. `++`, `--` - Increment/Decrement
3. `!` - Logical NOT
4. `**` - Exponentiation
5. `*`, `/`, `%` - Multiplication, Division, Modulus
6. `+`, `-` - Addition, Subtraction
7. `<`, `<=`, `>`, `>=` - Comparison
8. `==`, `===`, `!=`, `!==` - Equality
9. `&&` - Logical AND
10. `||` - Logical OR
11. `? :` - Ternary
12. `=`, `+=`, `-=`, etc. - Assignment

**Examples:**
```javascript
// Without parentheses
2 + 3 * 4;                    // 14 (multiply first)

// With parentheses
(2 + 3) * 4;                  // 20 (add first)

// Complex expression
5 + 3 * 2 ** 2;               // 17
// Breakdown: 2**2 = 4, 3*4 = 12, 5+12 = 17

// Logical operators
true || false && false;        // true
// Breakdown: && before ||, so false && false = false, then true || false = true

(true || false) && false;      // false
```

**Best Practice:** Use parentheses for clarity even if not needed.

```javascript
// Unclear
let result = a + b * c / d;

// Clear
let result = a + ((b * c) / d);
```

---

### Practical Operator Examples

**Example 1: Calculator**
```javascript
let num1 = 10;
let num2 = 5;
let operation = "+";

let result = operation === "+" ? num1 + num2 :
             operation === "-" ? num1 - num2 :
             operation === "*" ? num1 * num2 :
             operation === "/" ? num1 / num2 : "Invalid";

console.log(result);           // 15
```

**Example 2: Grade Calculator**
```javascript
let marks = 85;
let grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else {
    grade = "F";
}

// Using ternary
let grade2 = marks >= 90 ? "A" :
             marks >= 80 ? "B" :
             marks >= 70 ? "C" : "F";
```

**Example 3: Eligibility Check**
```javascript
let age = 25;
let hasLicense = true;
let hasInsurance = true;

// Can drive if all conditions met
let canDrive = (age >= 18) && hasLicense && hasInsurance;
console.log(canDrive);         // true
```

---

### Common Operator Mistakes

**Mistake 1: Using == instead of ===**
```javascript
5 == "5";              // true (unexpected)
5 === "5";             // false (expected)
```

**Mistake 2: String + Number**
```javascript
"5" + 3;               // "53" (string, not 8)
5 + "3";               // "53" (string, not 8)
```

**Mistake 3: Wrong precedence**
```javascript
10 + 5 * 2;            // 20, not 30
(10 + 5) * 2;          // 30
```

**Mistake 4: Assignment in condition**
```javascript
if (x = 5) {           // ❌ Assignment, not comparison
    // Always true
}

if (x === 5) {         // ✅ Comparison
    // Correct
}
```

**Mistake 5: Increment confusion**
```javascript
let x = 5;
let y = x++;           // y = 5, x = 6
let z = ++x;           // z = 7, x = 7
```

---

## 3. CONDITIONAL STATEMENTS - Complete Guide

Conditional statements control the flow of your program based on conditions.

### if Statement

Executes code only if a condition is true.

**Syntax:**
```javascript
if (condition) {
    // code executes if condition is true
}
```

**How it works:**
1. Evaluate the condition
2. If true → execute the code block
3. If false → skip the code block

**Examples:**
```javascript
// Example 1: Simple age check
let age = 18;

if (age >= 18) {
    console.log("You can vote!");
}
// Output: "You can vote!"

// Example 2: Grade check
let marks = 85;

if (marks >= 80) {
    console.log("Excellent! Grade A");
}
// Output: "Excellent! Grade A"

// Example 3: Temperature alert
let temp = 35;

if (temp > 30) {
    console.log("It's hot! Stay hydrated");
}
// Output: "It's hot! Stay hydrated"

// Example 4: Multiple statements in block
let score = 95;

if (score >= 90) {
    console.log("Outstanding performance!");
    console.log("You got an A+ grade");
    console.log("Keep up the good work!");
}
```

**Common Conditions:**
```javascript
// Comparison
if (x > 5) { }
if (x >= 10) { }
if (x < 20) { }
if (x <= 15) { }
if (x === 10) { }
if (x !== 5) { }

// Boolean variable
if (isLoggedIn) { }
if (!isLoggedIn) { }

// Truthy/Falsy
if (name) { }          // true if name has value
if (count) { }         // true if count is not 0
```

---

### else Statement

Provides an alternative code block when if condition is false.

**Syntax:**
```javascript
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}
```

**How it works:**
1. If condition is true → execute if block
2. If condition is false → execute else block
3. Only ONE block executes

**Examples:**
```javascript
// Example 1: Voting eligibility
let age = 16;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You cannot vote yet.");
}
// Output: "You cannot vote yet."

// Example 2: Even or odd
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}
// Output: "7 is odd"

// Example 3: Pass or fail
let marks = 55;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Output: "Pass"

// Example 4: Weather check
let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella!");
} else {
    console.log("Enjoy the sunny day!");
}
// Output: "Take an umbrella!"

// Example 5: Positive or negative
let num = -5;

if (num >= 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}
// Output: "Negative number"
```

---

### else if Statement

Checks multiple conditions in sequence.

**Syntax:**
```javascript
if (condition1) {
    // code for condition1
} else if (condition2) {
    // code for condition2
} else if (condition3) {
    // code for condition3
} else {
    // code if none match
}
```

**How it works:**
1. Check condition1 → if true, execute and stop
2. If false, check condition2 → if true, execute and stop
3. Continue checking until a true condition
4. If all false, execute else block (if present)
5. Only ONE block executes (first true condition)

**Examples:**
```javascript
// Example 1: Grade calculator
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: "Grade: C"

// Example 2: Time of day greeting
let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
// Output: "Good afternoon!"

// Example 3: Day type
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's weekend!");
} else if (day === "Friday") {
    console.log("TGIF!");
} else {
    console.log("It's a weekday");
}
// Output: "It's weekend!"

// Example 4: BMI calculator
let bmi = 22;

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal weight");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}
// Output: "Normal weight"

// Example 5: Age category
let age = 45;

if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
// Output: "Adult"
```

---

### switch Statement

Alternative to multiple else-if statements. Tests a value against multiple cases.

**Syntax:**
```javascript
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code if no match
        break;
}
```

**How it works:**
1. Evaluate the expression once
2. Compare with each case value (using ===)
3. If match found → execute that case
4. `break` exits the switch
5. `default` executes if no cases match

**Examples:**
```javascript
// Example 1: Day of week
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
// Output: "Wednesday"

// Example 2: Simple calculator
let operation = "+";
let a = 10;
let b = 5;
let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        result = "Invalid operation";
        break;
}

console.log("Result:", result);
// Output: "Result: 15"

// Example 3: Fruit color
let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("Red or green");
        break;
    case "banana":
        console.log("Yellow");
        break;
    case "orange":
        console.log("Orange");
        break;
    default:
        console.log("Unknown fruit");
        break;
}
// Output: "Yellow"

// Example 4: Month days
let month = "February";
let days;

switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        days = 31;
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        days = 30;
        break;
    case "February":
        days = 28;
        break;
    default:
        days = "Invalid month";
        break;
}

console.log(month + " has " + days + " days");
// Output: "February has 28 days"

// Example 5: Grade to description
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Fair");
        break;
    case "D":
        console.log("Need improvement");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid grade");
        break;
}
// Output: "Good job!"
```

**Important: break statement**
```javascript
// Without break (fall-through)
let x = 2;

switch (x) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
// Output: "Two" then "Three" (both execute!)

// With break (correct)
switch (x) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
}
// Output: "Two" (only this executes)
```

---

### Nested Conditional Statements

You can nest if statements inside other if statements.

**Examples:**
```javascript
// Example 1: Nested eligibility check
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive!");
    } else {
        console.log("You need a license");
    }
} else {
    console.log("You're too young to drive");
}
// Output: "You can drive!"

// Example 2: Grade with attendance
let marks = 85;
let attendance = 70;

if (marks >= 80) {
    if (attendance >= 75) {
        console.log("A grade with good attendance");
    } else {
        console.log("A grade but poor attendance");
    }
} else {
    console.log("Below A grade");
}
// Output: "A grade but poor attendance"

// Example 3: Login validation
let username = "john";
let password = "pass123";

if (username === "john") {
    if (password === "pass123") {
        console.log("Login successful");
    } else {
        console.log("Wrong password");
    }
} else {
    console.log("User not found");
}
// Output: "Login successful"
```

---

### if-else vs switch Comparison

**When to use if-else:**
- Complex conditions with >, <, >=, <=
- Range checking
- Multiple different variables
- Boolean conditions
- More flexible

**When to use switch:**
- Single variable with multiple exact values
- Equality comparisons only
- Many cases (4+)
- Cleaner code for many options
- Slightly faster for many cases

**Examples:**

```javascript
// Better with if-else (range checking)
let age = 25;

if (age < 18) {
    console.log("Minor");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// Better with switch (exact values)
let status = "pending";

switch (status) {
    case "pending":
        console.log("Waiting");
        break;
    case "approved":
        console.log("Confirmed");
        break;
    case "rejected":
        console.log("Denied");
        break;
}

// Complex condition (must use if-else)
let score = 85;
let attendance = 80;

if (score >= 80 && attendance >= 75) {
    console.log("Eligible for bonus");
}
// Cannot do this with switch
```

---

### Common Conditional Statement Mistakes

**Mistake 1: Assignment instead of comparison**
```javascript
let x = 10;

if (x = 5) {           // ❌ Assignment
    console.log("Runs");
}

if (x === 5) {         // ✅ Comparison
    console.log("Correct");
}
```

**Mistake 2: Forgetting break in switch**
```javascript
switch (x) {
    case 1:
        console.log("One");
        // ❌ Missing break - falls through
    case 2:
        console.log("Two");
        break;
}
```

**Mistake 3: Using == instead of ===**
```javascript
let value = "10";

if (value == 10) {     // ❌ true (type conversion)
    console.log("Match");
}

if (value === 10) {    // ✅ false (strict)
    console.log("No match");
}
```

**Mistake 4: Wrong logical operator**
```javascript
let age = 25;
let hasID = true;

// ❌ Wrong - using OR
if (age >= 18 || hasID) {
    // True if either condition
}

// ✅ Correct - using AND
if (age >= 18 && hasID) {
    // True only if both conditions
}
```

**Mistake 5: Unreachable else-if**
```javascript
let score = 85;

if (score >= 70) {
    console.log("Pass");
} else if (score >= 80) {  // ❌ Never reached
    console.log("Good");
}

// ✅ Correct order
if (score >= 80) {
    console.log("Good");
} else if (score >= 70) {
    console.log("Pass");
}
```

---

## 4. FUNCTIONS - Complete Guide

Functions are reusable blocks of code that perform specific tasks.

### What Is a Function?

A function is a block of code designed to perform a particular task. Instead of writing the same code repeatedly, you write it once in a function and call it whenever needed.

**Benefits:**
- Code reusability
- Better organization
- Easier debugging
- Cleaner code
- Reduced repetition

### Function Declaration

**Syntax:**
```javascript
function functionName(parameter1, parameter2) {
    // code to execute
    return result;
}
```

**Components:**
- `function` keyword
- Function name (identifier)
- Parameters (inputs) - optional
- Function body (code block)
- `return` statement - optional

**Examples:**
```javascript
// Example 1: Simple greeting
function greet() {
    console.log("Hello!");
}

greet();  // Call the function
// Output: "Hello!"

// Example 2: Greeting with parameter
function greetPerson(name) {
    console.log("Welcome, " + name);
}

greetPerson("John");     // "Welcome, John"
greetPerson("Sarah");    // "Welcome, Sarah"

// Example 3: Function with return
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);     // 8

// Example 4: Calculate area
function calculateArea(length, width) {
    let area = length * width;
    return area;
}

console.log(calculateArea(10, 5));  // 50

// Example 5: Check eligibility
function canVote(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible";
    }
}

console.log(canVote(20));  // "Eligible to vote"
console.log(canVote(16));  // "Not eligible"
```

**Key Points:**
- Function declarations are **hoisted**
- Can be called before definition
- Function name should describe what it does

**Hoisting example:**
```javascript
greet();  // Works! (called before definition)

function greet() {
    console.log("Hello!");
}
```

---

### Function Expression

A function stored in a variable.

**Syntax:**
```javascript
const functionName = function(parameters) {
    // code
    return result;
};
```

**Examples:**
```javascript
// Example 1: Basic function expression
const sayHello = function() {
    console.log("Hello!");
};

sayHello();  // "Hello!"

// Example 2: With parameters
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));  // 20

// Example 3: Calculate percentage
const percentage = function(marks, total) {
    return (marks / total) * 100;
};

console.log(percentage(85, 100));  // 85

// Example 4: Even or odd
const isEven = function(num) {
    return num % 2 === 0;
};

console.log(isEven(10));  // true
console.log(isEven(7));   // false
```

**Key Differences from Function Declaration:**
- **NOT hoisted** - must be defined before calling
- Treated as a variable
- Often used when passing functions as arguments

**Not hoisted example:**
```javascript
greet();  // ❌ Error: Cannot access before initialization

const greet = function() {
    console.log("Hello!");
};
```

---

### Parameters vs Arguments

**Parameters:**
- Variables in the function **definition**
- Placeholders for values

**Arguments:**
- Actual values passed when **calling** the function
- Real data

**Example:**
```javascript
function add(a, b) {     // a, b are parameters
    return a + b;
}

add(10, 20);             // 10, 20 are arguments
```

**Multiple Parameters:**
```javascript
function studentInfo(name, age, course, marks) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course);
    console.log("Marks: " + marks);
}

studentInfo("John", 18, "CSE", 85);
```

**Default Parameters (ES6):**
```javascript
function greet(name = "Guest") {
    return "Hello, " + name;
}

console.log(greet("John"));   // "Hello, John"
console.log(greet());          // "Hello, Guest"
```

---

### return Statement

The `return` statement sends a value back from the function.

**Key Points:**
- Exits the function immediately
- Sends value back to caller
- Code after return is never executed
- If no return, function returns `undefined`

**Examples:**
```javascript
// Example 1: Return value
function square(x) {
    return x * x;
}

let result = square(5);
console.log(result);  // 25

// Example 2: Early return
function checkAge(age) {
    if (age < 18) {
        return "Too young";  // Exits here if true
    }
    return "Eligible";       // Only if age >= 18
}

// Example 3: Multiple return points
function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

// Example 4: No return (returns undefined)
function printMessage() {
    console.log("Hello");
    // no return statement
}

let value = printMessage();  // "Hello"
console.log(value);          // undefined

// Example 5: Returning objects
function createStudent(name, age) {
    return {
        name: name,
        age: age,
        course: "CSE"
    };
}

let student = createStudent("John", 18);
console.log(student.name);   // "John"
```

---

### Function Scope

Variables declared inside a function are **local** to that function.

**Key Concepts:**
- **Local variables** - exist only inside function
- **Global variables** - accessible everywhere
- Inner functions can access outer variables
- Outer cannot access inner variables

**Examples:**
```javascript
// Example 1: Local scope
function test() {
    let message = "Hello";
    console.log(message);  // Works
}

test();
console.log(message);  // ❌ Error: message not defined

// Example 2: Global scope
let globalVar = "I'm global";

function show() {
    console.log(globalVar);  // Can access global
}

show();  // "I'm global"

// Example 3: Variable shadowing
let x = 10;  // Global

function demo() {
    let x = 20;  // Local (shadows global)
    console.log(x);
}

demo();         // 20 (local)
console.log(x); // 10 (global unchanged)

// Example 4: Scope chain
let a = 1;

function outer() {
    let b = 2;
    
    function inner() {
        let c = 3;
        console.log(a, b, c);  // Can access all
    }
    
    inner();
}

outer();  // 1 2 3

// Example 5: Common mistake
function calculate() {
    result = 100;  // ❌ No let/const - becomes global!
}

calculate();
console.log(result);  // 100 (global leak)
```

---

### Nested Functions

Functions inside other functions.

**Examples:**
```javascript
// Example 1: Basic nesting
function outer() {
    console.log("Outer");
    
    function inner() {
        console.log("Inner");
    }
    
    inner();  // Call inner function
}

outer();
// Output:
// Outer
// Inner

// Example 2: Helper function
function calculateTotal(price, quantity) {
    function addTax(amount) {
        return amount * 1.1;  // 10% tax
    }
    
    let subtotal = price * quantity;
    let total = addTax(subtotal);
    return total;
}

console.log(calculateTotal(100, 2));  // 220

// Example 3: Access outer variables
function counter() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(count);
    }
    
    increment();  // 1
    increment();  // 2
    increment();  // 3
}

counter();
```

---

### Practical Function Examples

**Example 1: Student grade system**
```javascript
function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let grade;
    
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else {
        grade = "F";
    }
    
    return {
        name: name,
        total: total,
        average: average,
        grade: grade
    };
}

let result = analyzeStudent("John", 85, 90, 92);
console.log(result);
// {name: "John", total: 267, average: 89, grade: "B"}
```

**Example 2: Temperature converter**
```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(25));   // 77
console.log(fahrenheitToCelsius(77));   // 25
```

**Example 3: Array operations**
```javascript
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let numbers = [5, 2, 8, 1, 9];
console.log(findMax(numbers));  // 9
console.log(findMin(numbers));  // 1
```

---

### Common Function Mistakes

**Mistake 1: Forgetting to return**
```javascript
function add(a, b) {
    a + b;  // ❌ No return
}

let result = add(5, 3);
console.log(result);  // undefined
```

**Mistake 2: Wrong number of arguments**
```javascript
function greet(name, age) {
    console.log(name + " is " + age);
}

greet("John");  // "John is undefined"
```

**Mistake 3: Calling before definition (function expression)**
```javascript
result();  // ❌ Error

const result = function() {
    console.log("Hello");
};
```

**Mistake 4: Modifying global variables**
```javascript
let count = 0;

function increment() {
    count++;  // ⚠️ Modifying global (not ideal)
}
```

**Mistake 5: Missing parentheses**
```javascript
function greet() {
    return "Hello";
}

console.log(greet);   // ❌ Prints function code
console.log(greet()); // ✅ "Hello"
```

---

## 5. ARRAYS - Complete Guide

Arrays store multiple values in a single variable.

### What Is an Array?

An array is an **ordered collection** of values. Each value has an **index** (position), starting from 0.

**Syntax:**
```javascript
let arrayName = [element1, element2, element3];
```

### Creating Arrays

```javascript
// Method 1: Array literal (most common)
let numbers = [10, 20, 30, 40];
let names = ["John", "Mike", "Sarah"];
let mixed = [1, "hello", true, null];

// Method 2: Array constructor
let arr = new Array(1, 2, 3);

// Empty array
let empty = [];
```

### Accessing Array Elements

Arrays use **zero-based indexing** (first element is at index 0).

```javascript
let fruits = ["apple", "banana", "orange", "mango"];

// Access by index
console.log(fruits[0]);   // "apple"
console.log(fruits[1]);   // "banana"
console.log(fruits[3]);   // "mango"

// Last element
console.log(fruits[fruits.length - 1]);  // "mango"

// Invalid index
console.log(fruits[10]);  // undefined

// Array length
console.log(fruits.length);  // 4
```

### Modifying Arrays

```javascript
let nums = [10, 20, 30];

// Update value
nums[1] = 25;
console.log(nums);  // [10, 25, 30]

// Add new element
nums[3] = 40;
console.log(nums);  // [10, 25, 30, 40]
```

### Looping Through Arrays

```javascript
let students = ["John", "Mike", "Sarah", "Lisa"];

// Method 1: for loop (most common)
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Method 2: while loop
let i = 0;
while (i < students.length) {
    console.log(students[i]);
    i++;
}
```

---

## 6. ARRAY METHODS - MUST MEMORIZE

### Adding Elements

**push() - Add to END**
```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]

arr.push(5, 6);
console.log(arr);  // [1, 2, 3, 4, 5, 6]
```

**unshift() - Add to START**
```javascript
let arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);  // [1, 2, 3, 4]

arr.unshift(-1, 0);
console.log(arr);  // [-1, 0, 1, 2, 3, 4]
```

### Removing Elements

**pop() - Remove from END**
```javascript
let arr = [1, 2, 3, 4];
let removed = arr.pop();
console.log(removed);  // 4
console.log(arr);      // [1, 2, 3]
```

**shift() - Remove from START**
```javascript
let arr = [1, 2, 3, 4];
let removed = arr.shift();
console.log(removed);  // 1
console.log(arr);      // [2, 3, 4]
```

### Searching in Arrays

**indexOf() - Find index of element**
```javascript
let arr = [10, 20, 30, 20, 40];

console.log(arr.indexOf(20));   // 1 (first occurrence)
console.log(arr.indexOf(50));   // -1 (not found)
```

**lastIndexOf() - Find last index**
```javascript
let arr = [10, 20, 30, 20, 40];
console.log(arr.lastIndexOf(20));  // 3
```

**includes() - Check if element exists**
```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3));   // true
console.log(arr.includes(10));  // false
```

### Array Transformation

**reverse() - Reverse order (modifies original)**
```javascript
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);  // [4, 3, 2, 1]
```

**sort() - Sort elements (modifies original)**
```javascript
// Strings
let names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names);  // ["Alice", "Bob", "Charlie"]

// Numbers (WARNING: sorts as strings!)
let nums = [10, 2, 5, 1];
nums.sort();
console.log(nums);  // [1, 10, 2, 5] ⚠️ Wrong!
```

**join() - Convert to string**
```javascript
let arr = ["HTML", "CSS", "JS"];

console.log(arr.join(" - "));  // "HTML - CSS - JS"
console.log(arr.join(", "));   // "HTML, CSS, JS"
console.log(arr.join(""));     // "HTMLCSSJS"
```

**concat() - Combine arrays (returns new array)**
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let combined = arr1.concat(arr2, arr3);
console.log(combined);  // [1, 2, 3, 4, 5, 6]
console.log(arr1);      // [1, 2] (unchanged)
```

### Extracting Parts

**slice() - Extract portion (doesn't modify original)**
```javascript
let arr = [10, 20, 30, 40, 50];

// slice(start, end) - end not included
console.log(arr.slice(1, 4));  // [20, 30, 40]
console.log(arr.slice(2));     // [30, 40, 50] (from index 2 to end)
console.log(arr.slice(-2));    // [40, 50] (last 2)
console.log(arr);              // [10, 20, 30, 40, 50] (unchanged)
```

**splice() - Remove/Add/Replace (modifies original)**
```javascript
let arr = [10, 20, 30, 40, 50];

// Remove elements
// splice(start, deleteCount)
arr.splice(1, 2);
console.log(arr);  // [10, 40, 50] (removed 20, 30)

// Insert elements
arr = [10, 20, 30];
arr.splice(1, 0, 15, 17);  // Insert at index 1
console.log(arr);  // [10, 15, 17, 20, 30]

// Replace elements
arr = [10, 20, 30, 40];
arr.splice(1, 2, 25, 35);  // Replace 2 elements at index 1
console.log(arr);  // [10, 25, 35, 40]
```

### Other Methods

**toString() - Convert to string**
```javascript
let arr = [1, 2, 3];
console.log(arr.toString());  // "1,2,3"
```

**fill() - Fill with value**
```javascript
let arr = [1, 2, 3, 4];
arr.fill(0);
console.log(arr);  // [0, 0, 0, 0]
```

---

## Array Methods Quick Reference Table

| Method | What It Does | Modifies Original? |
|--------|--------------|-------------------|
| `push()` | Add to end | Yes |
| `pop()` | Remove from end | Yes |
| `unshift()` | Add to start | Yes |
| `shift()` | Remove from start | Yes |
| `indexOf()` | Find index | No |
| `includes()` | Check existence | No |
| `reverse()` | Reverse order | Yes |
| `sort()` | Sort elements | Yes |
| `join()` | To string | No |
| `concat()` | Combine arrays | No |
| `slice()` | Extract part | No |
| `splice()` | Remove/Add | Yes |

---

## 7. OBJECTS - Complete Guide

Objects store collections of key-value pairs.

### Creating Objects

```javascript
// Object literal
let student = {
    name: "John",
    age: 18,
    course: "CSE",
    marks: [85, 90, 92]
};

// Empty object
let empty = {};

// Adding properties later
empty.name = "Mike";
empty.age = 20;
```

### Accessing Properties

```javascript
let student = {
    name: "John",
    age: 18,
    course: "CSE"
};

// Dot notation
console.log(student.name);    // "John"
console.log(student.age);     // 18

// Bracket notation
console.log(student["name"]); // "John"
console.log(student["course"]); // "CSE"

// Using variable
let key = "age";
console.log(student[key]);    // 18
```

### Modifying Objects

```javascript
let student = {
    name: "John",
    age: 18
};

// Update property
student.age = 19;
student["name"] = "John Doe";

// Add new property
student.course = "CSE";
student["batch"] = "2025";

// Delete property
delete student.age;

console.log(student);
// {name: "John Doe", course: "CSE", batch: "2025"}
```

### Nested Objects

```javascript
let student = {
    name: "John",
    age: 18,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        pincode: 380015
    },
    marks: {
        math: 85,
        science: 90,
        english: 88
    }
};

// Access nested properties
console.log(student.address.city);       // "Ahmedabad"
console.log(student.marks.math);         // 85
console.log(student["address"]["state"]); // "Gujarat"
```

### Methods in Objects

Functions inside objects are called **methods**.

```javascript
let student = {
    name: "John",
    marks: [85, 90, 92],
    
    // Method
    getAverage: function() {
        let total = this.marks[0] + this.marks[1] + this.marks[2];
        return total / 3;
    },
    
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(student.getAverage());  // 89
console.log(student.greet());       // "Hello, John"
```

**`this` keyword:**
- Refers to the current object
- Used to access object's own properties

### Array of Objects

```javascript
let students = [
    {name: "John", age: 18, marks: 85},
    {name: "Mike", age: 19, marks: 90},
    {name: "Sarah", age: 18, marks: 92}
];

// Access
console.log(students[0].name);  // "John"
console.log(students[1].marks); // 90

// Loop through
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ": " + students[i].marks);
}
```

### Objects as Reference Types

**CRITICAL CONCEPT:**

```javascript
let obj1 = {x: 10};
let obj2 = obj1;  // Copies REFERENCE, not object

obj2.x = 20;

console.log(obj1.x);  // 20 (both point to same object!)
console.log(obj2.x);  // 20
```

Objects are stored by **reference**:
- Assigning copies the reference, not the object
- Both variables point to the same object
- Changes through one affect the other

---

## 8. LET & CONST vs VAR - Complete Guide

### Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function | Block | Block |
| **Reassign** | Yes | Yes | NO |
| **Redeclare** | Yes | No | No |
| **Hoisted** | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| **Initialize** | Optional | Optional | Required |
| **Best For** | Never use | Changing values | Constants |

### Block Scope

**var - Ignores blocks:**
```javascript
{
    var x = 10;
}
console.log(x);  // 10 (leaked!)

if (true) {
    var y = 20;
}
console.log(y);  // 20 (leaked!)
```

**let & const - Respect blocks:**
```javascript
{
    let x = 10;
    const y = 20;
}
console.log(x);  // ❌ Error
console.log(y);  // ❌ Error

if (true) {
    let a = 5;
}
console.log(a);  // ❌ Error
```

### Hoisting

**var - Hoisted with undefined:**
```javascript
console.log(x);  // undefined (no error!)
var x = 10;
console.log(x);  // 10
```

**let & const - Hoisted but TDZ:**
```javascript
console.log(x);  // ❌ Error: Cannot access before initialization
let x = 10;

console.log(y);  // ❌ Error: Cannot access before initialization
const y = 20;
```

### Temporal Dead Zone (TDZ)

TDZ is the period from scope start to initialization where variable cannot be accessed.

```javascript
{
    // TDZ starts
    console.log(x);  // ❌ Error
    // TDZ continues
    let x = 10;  // TDZ ends
    console.log(x);  // ✅ 10
}
```

### const Behavior

```javascript
// Must initialize
const PI = 3.14;  // ✅
const X;          // ❌ Error

// Cannot reassign
const PI = 3.14;
PI = 3.15;        // ❌ Error

// But CAN modify object/array content
const arr = [1, 2, 3];
arr.push(4);      // ✅ Allowed
arr = [5, 6];     // ❌ Error

const obj = {x: 10};
obj.x = 20;       // ✅ Allowed
obj = {};         // ❌ Error
```

### let & const in Loops

**var - Leaks outside:**
```javascript
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);  // 3 (leaked!)
```

**let - Stays inside:**
```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);  // ❌ Error
```

**Closure bug with var:**
```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 4 4 4 (wrong!)

for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 1 2 3 (correct!)
```

### Best Practices

1. **Use const by default**
2. Use let when value changes
3. **NEVER use var**
4. Declare at the top of block
5. Initialize when declaring

```javascript
// Good
const name = "John";
const marks = [85, 90];
let count = 0;
count++;

// Bad
var x = 10;
let y;  // Uninitialized
```

---

## 9. SCOPE - Complete Guide

### Global Scope

Variables accessible everywhere.

```javascript
let globalVar = "I'm global";

function test() {
    console.log(globalVar);  // ✅ Accessible
}

test();
console.log(globalVar);  // ✅ Accessible
```

### Function Scope

Variables inside function only accessible within that function.

```javascript
function test() {
    let localVar = "I'm local";
    console.log(localVar);  // ✅ Works
}

test();
console.log(localVar);  // ❌ Error
```

### Block Scope (let & const)

Variables inside `{}` only accessible within that block.

```javascript
{
    let x = 10;
    const y = 20;
    console.log(x, y);  // ✅ Works
}

console.log(x);  // ❌ Error
console.log(y);  // ❌ Error
```

### Shadowing

Inner variable with same name hides outer variable.

```javascript
let x = 10;  // Outer

{
    let x = 20;  // Inner (shadows outer)
    console.log(x);  // 20
}

console.log(x);  // 10
```

**Legal Shadowing:**
```javascript
let x = 10;
{
    let x = 20;  // ✅ Legal
}

const y = 10;
{
    const y = 20;  // ✅ Legal
}
```

**Illegal Shadowing:**
```javascript
let x = 10;
{
    var x = 20;  // ❌ Illegal (var tries to redeclare let)
}

const y = 10;
{
    var y = 20;  // ❌ Illegal
}
```

### Lexical Environment

JavaScript stores variables in hierarchical environments.

```javascript
let a = 10;  // Global

{
    let b = 20;  // Block 1
    
    {
        let c = 30;  // Block 2
        console.log(a, b, c);  // Can access all
    }
    
    console.log(a, b);  // Can access outer
    console.log(c);     // ❌ Cannot access inner
}
```

**Scope Chain:** JavaScript looks for variables from inner to outer scopes.

---

## 10. QUICK REFERENCE - EXAM ESSENTIALS

### typeof Outputs (MEMORIZE)
```javascript
typeof 42              // "number"
typeof "hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object" ⚠️
typeof {}              // "object"
typeof []              // "object"
typeof function(){}    // "function"
```

### Common Mistakes

**1. == vs ===**
```javascript
5 == "5"   // true (bad)
5 === "5"  // false (good)
// Always use ===
```

**2. Array/Object with const**
```javascript
const arr = [1, 2];
arr.push(3);     // ✅ OK (modifying content)
arr = [4, 5];    // ❌ Error (reassigning)
```

**3. var in loops**
```javascript
for (var i = 0; i < 3; i++) {}
console.log(i);  // 3 (leaks - bad)

for (let i = 0; i < 3; i++) {}
console.log(i);  // Error (good)
```

**4. typeof null**
```javascript
typeof null  // "object" (JavaScript bug - memorize!)
```

**5. TDZ with let/const**
```javascript
console.log(x);  // Error
let x = 10;

// Correct:
let x = 10;
console.log(x);
```

---

## 11. LAST-MINUTE CHECKLIST

✅ **Data Types:** 7 types (Number, String, Boolean, Undefined, Null, Symbol, BigInt)
✅ **typeof null** → "object"
✅ **=== not ==** (always strict equality)
✅ **let vs const vs var** → const by default
✅ **Block scope** → let/const respect `{}`, var doesn't
✅ **Hoisting** → var = undefined, let/const = TDZ
✅ **TDZ** → Cannot access before initialization
✅ **Array methods:** push, pop, shift, unshift, indexOf, includes, slice, splice
✅ **Objects** → dot notation vs bracket notation
✅ **Reference types** → Objects/arrays copy by reference
✅ **Functions** → declaration (hoisted) vs expression (not hoisted)
✅ **return** → Exits function and sends value back
✅ **Scope chain** → Inner can access outer, not vice versa
✅ **Shadowing** → let/const OK, var over let/const = illegal
✅ **switch** → Don't forget break statements

---

## 12. EXAM STRATEGY

### Before Exam (2 minutes)
1. Take 3 deep breaths
2. Read through this checklist
3. Remember: typeof null = "object"
4. Remember: Always use ===

### During Exam
1. **Read questions twice**
2. **Look for keywords:** var/let/const, typeof, scope
3. **Trace code line by line** for output questions
4. **Check for:**
   - Missing semicolons
   - Wrong brackets `()` vs `[]` vs `{}`
   - Scope issues
   - == vs ===
5. **Common traps:**
   - typeof null
   - var leaking
   - TDZ errors
   - Array/object references

### Time Management
- Easy questions first
- Skip and return to hard ones
- Last 5 minutes: Review answers

**YOU'RE READY! GO ACE THAT EXAM! 🎯🚀**

### Creating Arrays
```javascript
let nums = [10, 20, 30, 40];
let mixed = [1, "hello", true, null];

// Accessing
nums[0]     // 10 (first element)
nums[3]     // 40
nums.length // 4
```

### Array Methods (MEMORIZE THESE)

**Adding/Removing:**
```javascript
arr.push(5)      // add to END
arr.pop()        // remove from END
arr.unshift(5)   // add to START
arr.shift()      // remove from START
```

**Searching:**
```javascript
arr.indexOf(20)     // returns index or -1
arr.includes(20)    // true/false
```

**Other:**
```javascript
arr.reverse()         // reverse order
arr.sort()            // sort (alphabetically)
arr.join(" - ")       // to string with separator
arr.concat(arr2)      // combine arrays
arr.slice(1, 3)       // extract portion (doesn't modify original)
arr.splice(1, 2)      // remove/insert (modifies original)
```

### Looping Through Arrays
```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

---

## 6. OBJECTS (4 minutes)

### Creating Objects
```javascript
let student = {
    name: "John",
    age: 18,
    marks: [85, 90, 92]
};
```

### Accessing Properties
```javascript
student.name        // "John" (dot notation)
student["age"]      // 18 (bracket notation)
```

### Adding/Updating/Deleting
```javascript
student.course = "CSE";   // add
student.age = 19;         // update
delete student.marks;     // delete
```

### Methods (Functions in Objects)
```javascript
let student = {
    name: "John",
    greet: function() {
        return "Hello " + this.name;
    }
};

student.greet();  // "Hello John"
```

**`this` keyword** → refers to the current object

### Objects as Reference Types
```javascript
let obj1 = {x: 10};
let obj2 = obj1;     // COPIES REFERENCE, not object

obj2.x = 20;
console.log(obj1.x); // 20 (both point to same object!)
```

**KEY POINT:** Assigning object copies the reference, not the object itself

---

## 7. LET & CONST vs VAR (3 minutes)

### Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Reassign | Yes | Yes | NO |
| Redeclare | Yes | No | No |
| Hoisted | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Use in loops | ❌ Bad | ✅ Good | ✅ for-of only |

### Block Scope
```javascript
{
    var x = 10;   // leaks outside
    let y = 20;   // stays inside
}

console.log(x);  // 10
console.log(y);  // ERROR
```

### Hoisting
```javascript
console.log(a);  // undefined
var a = 10;

console.log(b);  // ERROR (TDZ)
let b = 20;
```

**TDZ (Temporal Dead Zone):** Period between scope start and initialization where variable cannot be accessed

### Best Practices
1. **Use `const` by default**
2. Use `let` when value changes
3. **NEVER use `var`**

---

## 8. QUICK REFERENCE - COMMON MISTAKES

### 1. == vs ===
```javascript
5 == "5"   // true (bad)
5 === "5"  // false (good)
```
**Always use `===`**

### 2. Array/Object Modification
```javascript
const arr = [1, 2, 3];
arr.push(4);       // ✅ ALLOWED (modifying content)
arr = [5, 6, 7];   // ❌ ERROR (reassigning)
```

### 3. Loop Variable Scope
```javascript
for (var i = 0; i < 3; i++) {}
console.log(i);  // 3 (leaked)

for (let i = 0; i < 3; i++) {}
console.log(i);  // ERROR (good)
```

### 4. typeof null
```javascript
typeof null  // "object" (JavaScript bug, memorize this)
```

### 5. Shadowing
```javascript
let x = 10;
{
    let x = 20;  // Different variable
    console.log(x);  // 20
}
console.log(x);  // 10
```

---

## 9. RAPID FIRE FACTS

✅ **Arrays start at index 0**
✅ **undefined ≠ null** (different meanings)
✅ **const objects/arrays CAN be modified internally**
✅ **`this` refers to current object**
✅ **Functions are hoisted, function expressions are not**
✅ **let/const have TDZ, var doesn't**
✅ **Switch statements need `break`**
✅ **`typeof []` returns "object"**
✅ **Primitives copy by value, objects copy by reference**
✅ **var ignores blocks, let/const respect blocks**

---

## 10. LAST-MINUTE CHECKLIST

Before exam, mentally review:
- [ ] 7 data types
- [ ] `===` vs `==`
- [ ] `let` vs `const` vs `var`
- [ ] Array methods: push, pop, shift, unshift, indexOf, includes
- [ ] Object dot vs bracket notation
- [ ] Function declaration vs expression
- [ ] Scope: local vs global
- [ ] Hoisting behavior
- [ ] TDZ concept
- [ ] Reference types (objects/arrays)

---

## EXAM STRATEGY

1. **Read questions twice**
2. **Look for keywords:** var/let/const, typeof, scope, hoisting
3. **Trace code line by line** for output questions
4. **Check for:** missing semicolons, wrong brackets, scope issues
5. **Common traps:** == vs ===, typeof null, array/object reference

**YOU GOT THIS! 🚀**