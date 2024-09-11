// 08. Why the Math object in JavaScript is useful

// 🤔 Math = a built-in object that provides
//        a collection of properties and methods for mathematical operations.

// 🧮 Example of Math constants
// console.log("PI: " + Math.PI);  // Prints the value of PI
// console.log("E: " + Math.E);    // Prints the value of Euler's constant

// 🔢 Rounding Operations (round, floor, ceil)
let rounded = 3.21; // A number for rounding demonstration
let floor = 3.99; // A number to demonstrate rounding down
let ceil = 3.21; // A number to demonstrate rounding up

// 💪 Power, Square Root, and Logarithmic Operations
let pow = 3; // Exponent for power operation
let sq = 81; // Number to find the square root
let log = 10; // Number to demonstrate the logarithmic function

// 📐 Trigonometry Functions (sin, cos, tan)
let sin = 45; // Angle in radians for sine function
let cos = 45; // Angle in radians for cosine function
let tan = 45; // Angle in radians for tangent function

// ➕ Absolute Value and Sign Operations
let abs = -3.21; // A negative number to demonstrate absolute value and sign functions

// 📊 Max and Min values
let a = 3;
let b = 1;
let c = 2;

// 🧩 General variable for calculations
let y = 2; // Base for power function
let z; // Variable to store results

// ✏️ Rounded Numbers
// z = Math.round(rounded); // Rounds to the nearest integer
// console.log("Rounded to: " + z);

// ⬇️ Round Down (Floor)
// z = Math.floor(floor); // Rounds down to the nearest integer
// console.log("Rounded to: " + z);

// ⬆️ Round Up (Ceil)
// z = Math.ceil(ceil); // Rounds up to the nearest integer
// console.log("Rounded to: " + z);

// ✂️ Truncate
// z = Math.trunc(rounded); // Removes the decimal part of the number
// console.log("Truncated to: " + z);

// 🔋 Power Function
// z = Math.pow(y, pow); // Raises y to the power of pow (y^pow)
// console.log("Output: " + z);

// 📏 Square Root
// z = Math.sqrt(sq); // Returns the square root of sq
// console.log("Square root: " + z);

// 📊 Logarithmic Function
// z = Math.log(log); // Returns the natural logarithm of log
// console.log("Logarithm is: " + z);

// 📐 Trigonometry Functions
// Sin
// z = Math.sin(sin); // Returns the sine of the angle in radians
// console.log("Sine of 45 degrees: " + z);

// Cos
// z = Math.cos(cos); // Returns the cosine of the angle in radians
// console.log("Cosine of 45 degrees: " + z);

// Tan
// z = Math.tan(tan); // Returns the tangent of the angle in radians
// console.log("Tangent of 45 degrees: " + z);

// ➕ Absolute Value
// z = Math.abs(abs); // Returns the absolute value (positive number)
// console.log("Absolute value: " + z);

// ➖➕ Sign Function
// z = Math.sign(abs); // Returns 1 if positive, -1 if negative, 0 if zero
// console.log("Sign is: " + z);

// 📊 Maximum value among a, b, and c
let max = Math.max(a, b, c);
console.log("📊 Max value is: " + max);

// 📉 Minimum value among a, b, and c
let min = Math.min(a, b, c);
console.log("📉 Min value is: " + min);

// 🎯 Possible Use Cases:
// 1️⃣ Rounding Prices for Checkout:
// Use `Math.round()` to round product prices to the nearest cent when displaying totals during checkout. This ensures that the amount is user-friendly and accurate.
// Example:
// let price = 19.567;
// let roundedPrice = Math.round(price * 100) / 100; // Rounds to 19.57

// 2️⃣ Generating Random User IDs:
// Use `Math.random()` to generate unique random IDs for new users. This helps in creating unique identifiers quickly without needing complex algorithms.
// Example:
// let userId = Math.floor(Math.random() * 10000); // Generates a number between 0 and 9999

// 3️⃣ Calculating Age from Birthdate:
// Use `Math.floor()` to calculate a user's age based on their birthdate and the current date. This is helpful for forms or user profiles.
// Example:
// let birthYear = 1990;
// let age = new Date().getFullYear() - birthYear; // Calculates age

// 4️⃣ Normalizing Values for Charts:
// Use `Math.max()` and `Math.min()` to normalize values before plotting them on a chart, ensuring that data fits within the chart's range.
// Example:
// let maxValue = Math.max(...dataArray); // Finds the highest value in dataArray
// let minValue = Math.min(...dataArray); // Finds the lowest value in dataArray

// 5️⃣ Animations and Game Mechanics:
// Use `Math.sin()`, `Math.cos()`, and `Math.tan()` for creating smooth animations or calculating movements in games. These functions help in computing angles and positions.
// Example:
// let angle = Math.sin(time); // Calculates sine of the current time for smooth animation effects
