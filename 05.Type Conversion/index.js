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

// 🧠 Simple Analogy 🧠
// 🌍 Think of type conversion as translating between different languages:
// 📚 Imagine you have a book written in English (a string) and you need to read it in French 🇫🇷 (a number).
// 🎯 Type conversion is like translating that book from English to French so you can understand it in a different way.
// 🔧 In JavaScript, type conversion automatically changes values from one type to another,
// 🚀 like turning numbers into strings or vice versa, to ensure they work correctly with different operations or functions.

// 🎯 Possible Use Cases:
// 1️⃣ User Input Handling 🔢: Convert user input from strings to numbers or other types for calculations or comparisons (e.g., converting form input to numeric values).
// 2️⃣ Data Validation ✅: Check and convert data types to ensure values meet expected formats or criteria (e.g., converting strings to numbers before performing arithmetic operations).
// 3️⃣ Dynamic Content Display 🖥️: Convert values to strings for displaying dynamic content on web pages (e.g., converting numeric data to strings for text output).
// 4️⃣ Boolean Logic ⚖️: Use type conversion to handle truthy and falsy values in conditional statements (e.g., converting values to boolean for condition checks).
// 5️⃣ API Interactions 🌐: Convert data types when receiving or sending data to and from APIs (e.g., ensuring data is correctly formatted before sending requests).
// 6️⃣ Data Storage 💾: Convert and format data for storage in databases or local storage (e.g., converting objects to strings for JSON storage).
// 7️⃣ User Experience Enhancement ✨: Ensure smooth handling of different data types for better user experience (e.g., converting input values for consistent display).
// 8️⃣ Error Handling 🚫: Prevent errors by ensuring data types match expected values during operations (e.g., converting types to avoid runtime errors).
// 9️⃣ Data Parsing 📊: Convert data from different formats for processing or analysis (e.g., parsing strings to dates or numbers).
// 🔟 Dynamic Typing in JavaScript 🔄: Leverage JavaScript's dynamic typing to adapt to different data types as needed (e.g., converting between types for compatibility).
