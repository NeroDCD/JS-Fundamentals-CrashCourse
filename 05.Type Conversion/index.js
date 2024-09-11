// 05. Learn JavaScript TYPE CONVERSION
// 🔄 Type conversion: changing the datatype of a value to another
// (e.g., converting between strings, numbers, or booleans)

// 🔢 Converting Numbers
// let age = window.prompt("How old are you?");

// This will convert the input to a number and add 1 to it.
// For example, if the input is 24, the expected output will be 25.
// age = Number(age); // 🔢 Convert input to number
// age += 1; // ➕ Add 1 to the number

// Without the Number conversion, JavaScript would treat the input as a string and concatenate it.
// For example, if the input is 24, the output would be "241" instead of 25.
// typeof: Used for checking data types (e.g., console.log(age, typeof age);)
// console.log(age, typeof age); // 📜 Display value and type

// ----------------------------------------------------------------------------

// 📝 Example 1: All values are empty strings
// let x = "";
// let y = "";
// let z = "";

// 📝 Example 2: All values are "0" as strings
// let x = "0";
// let y = "0";
// let z = "0";

// 📝 Example 3: All values are "Figma"
let x = "Figma"; // 🧩 String value
let y = "Figma"; // 🧩 String value
let z = "Figma"; // 🧩 String value

x = Number(x); // 🔢 Converts "Figma" to NaN (Not a Number) because "Figma" can't be converted to a number.

y = String(y); // 🧩 Keeps "Figma" as a string; no change.

z = Boolean(z); // ✅ Converts "Figma" to true because any non-empty string is considered truthy.

console.log(x, typeof x); // 📜 Output: NaN 'number'
console.log(y, typeof y); // 📜 Output: "Figma" 'string'
console.log(z, typeof z); // 📜 Output: true 'boolean'

// 📚 Explanation of outputs based on examples:
// Example 1 (empty strings):
// x = Number("") → NaN (because an empty string can't be a number)
// y = String("") → "" (remains an empty string)
// z = Boolean("") → false (empty string is falsy)

// Example 2 (string "0"):
// x = Number("0") → 0 (the string "0" converts to the number 0)
// y = String("0") → "0" (remains the string "0")
// z = Boolean("0") → true (any non-empty string, including "0", is truthy)

// Example 3 ("Figma"):
// x = Number("Figma") → NaN (because "Figma" can't be a number)
// y = String("Figma") → "Figma" (remains the string "Figma")
// z = Boolean("Figma") → true (non-empty strings are always truthy)

// 🎯 Possible Use Cases:
// 1️⃣ User Input Handling: Convert user input from strings to numbers or other types for calculations or comparisons (e.g., converting form input to numeric values).
// 2️⃣ Data Validation: Check and convert data types to ensure values meet expected formats or criteria (e.g., converting strings to numbers before performing arithmetic operations).
// 3️⃣ Dynamic Content Display: Convert values to strings for displaying dynamic content on web pages (e.g., converting numeric data to strings for text output).
// 4️⃣ Boolean Logic: Use type conversion to handle truthy and falsy values in conditional statements (e.g., converting values to boolean for condition checks).
// 5️⃣ API Interactions: Convert data types when receiving or sending data to and from APIs (e.g., ensuring data is correctly formatted before sending requests).
// 6️⃣ Data Storage: Convert and format data for storage in databases or local storage (e.g., converting objects to strings for JSON storage).
