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

// 🎯 Math Object is best for:

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

// 🧠 Simple Analogy 🧠
// 🧮 Think of the Math object in JavaScript as a powerful calculator with built-in functions:
// 🔍 Math.sqrt() is like a tool that finds the square root of a number, similar to a calculator's square root button.
// 🎲 Math.random() is like a dice roller that gives you a random number between 0 and 1, useful for games or random selections.
// 🏆 Math.max() and Math.min() are like tools that help you find the highest or lowest number in a set, like comparing scores in a game to find the winner.
// 📈 The Math object provides these and other functions to make complex calculations easy and efficient.
// 📜 Math constants like Math.PI and Math.E are like reference charts for key values you often need, like a multiplication table.
// ✂️ Rounding methods (round, floor, ceil) are like different ways to trim or adjust numbers, like rounding up or down in everyday calculations.
// 📏 Power, square root, and logarithmic functions are like specialized tools for more complex operations, such as measuring growth or roots.
// 🧭 Trigonometric functions are like a compass for navigating angles and shapes in geometry.
// 📏 Absolute value and sign functions help you understand the size and direction of numbers, similar to measuring distances and directions on a map.
// 🔧 The Math object provides these tools to make various mathematical tasks easier and more precise.

// 🎯 Possible Use Cases:
// 1️⃣ Calculating complex mathematical formulas, such as determining the area of a circle or the hypotenuse of a triangle. 📏
// 2️⃣ Generating random numbers for games, simulations, or dynamic content. 🎲
// 3️⃣ Performing trigonometric calculations for animations, graphics, or simulations (e.g., sine, cosine). 🌐
// 4️⃣ Rounding numbers for display or financial calculations (e.g., rounding to two decimal places). 💰
// 5️⃣ Finding maximum or minimum values in a dataset for analysis or decision-making. 📊
// 6️⃣ Calculating power and root values for scientific computations (e.g., exponential growth or decay). ⚛️
// 7️⃣ Formatting and displaying numbers in a user-friendly way, such as with fixed decimal points or percentage. 🔢
// 8️⃣ Generating random integers within a specific range for user selections or game mechanics. 🔄
// 9️⃣ Converting angles between radians and degrees for various applications. 📐
// 🔟 Creating custom mathematical functions or utilities using the built-in Math methods. 🛠️
