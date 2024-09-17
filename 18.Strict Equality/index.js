// 18. Learn JavaScript STRICT EQUALITY

//   = assignment operator (used to assign a value to a variable) ✍️
//  == comparison operator (checks if values are equal but ignores type) ⚖️
// === strict equality operator (checks if values and datatype are both equal) 🛡️
//  != inequality operator (checks if values are not equal but ignores type) ❌
// !== strict inequality operator (checks if values and datatype are not equal) 🛡️❌

const PI = 3.14; // declaring a constant variable PI and assigning the value 3.14 🎯

// Example (==) - This will compare values without considering the type.
// if (PI == "3.14") {
//     console.log("That is Pi 😻") // If PI equals the string "3.14", this will be logged. ✅
// } else {
//     console.log("That is NOT Pi 😸") // Otherwise, this message is logged. ❌
// }

// Example (===) - This will compare values and their types strictly.
// if (PI === 3.14) {
//     console.log("That is Pi 😻") // If PI is strictly equal to 3.14 (number), this will be logged. ✅
// } else {
//     console.log("That is NOT Pi 😸") // Otherwise, this message is logged. ❌
// }

// Example (!=) - This compares values without considering type.
// if (PI != "3.14") {
//     console.log("That is NOT Pi 😻") // If PI is not equal to the string "3.14", this will be logged. ✅
// } else {
//     console.log("That is Pi 😸") // Otherwise, this message is logged. ❌
// }

// Example (!==) - This compares values and types strictly.
// Since PI is a number and "3.14" is a string, this will log "That is NOT Pi 😸".
if (PI !== "3.14") {
  console.log("That is NOT Pi 😸"); // Different types, so this will be executed. ❌
} else {
  console.log("That is Pi 😻"); // This block won't run. ✅
}


// 🧠 Simple Analogy 🧠
// Think of `===` and `!==` like comparing two items with strict attention to detail:
// `===` (Strict Equality): Imagine you’re comparing two identical apples 🍎🍎. They must be the same type, size, and color to be considered exactly equal. Everything about them has to match perfectly.
// `!==` (Strict Inequality): If you find an apple 🍎 and an orange 🍊, you immediately say they are not the same. Even a small difference makes them not equal.


// 🎯 Possible Use Cases:
// 1️⃣ Form validation ensuring both value and type match (e.g., checking if an input is a numeric value and not a string). 📝
// 2️⃣ Ensuring types are not implicitly coerced when comparing data, preventing unintended behavior (e.g., "5" vs. 5). ⚙️
// 3️⃣ Avoiding bugs caused by type coercion, which could lead to incorrect results in logical conditions (e.g., comparisons in loops). 🐞
// 4️⃣ Comparing user input to expected values while ensuring the data type matches (e.g., comparing age as a number, not a string). 🔢
// 5️⃣ Validating configuration or environment variables to ensure both value and type are exactly as expected (e.g., feature flags). 🛠️
// 6️⃣ Preventing security vulnerabilities by enforcing strict comparison in authentication logic (e.g., matching tokens). 🔐
// 7️⃣ Checking default or fallback values in functions to guarantee proper type handling in optional parameters. 🔄
// 8️⃣ Validating API responses or database queries where both data and types need to be accurately handled. 📊
// 9️⃣ Ensuring compatibility between front-end and back-end data types, avoiding inconsistencies in web applications. 🕸️
// 🔟 Handling edge cases in mathematical operations or financial calculations where type accuracy is crucial. 🔢💼
