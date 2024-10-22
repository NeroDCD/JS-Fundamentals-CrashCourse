// 18. Learn JavaScript STRICT EQUALITY

// ✍️  = assignment operator (used to assign a value to a variable)
// ⚖️  == comparison operator (checks if values are equal but ignores type)
// 🛡️  === strict equality operator (checks if values and datatype are both equal)
// ❌  != inequality operator (checks if values are not equal but ignores type)
// 🛡️❌ !== strict inequality operator (checks if values and datatype are not equal)

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
// 1️⃣ Form validation 📝: Ensure both value and type match (e.g., checking if an input is a numeric value, not a string).
// 2️⃣ Preventing type coercion ⚙️: Ensure types are not implicitly coerced when comparing data (e.g., "5" vs. 5).
// 3️⃣ Avoiding bugs 🐞: Prevent incorrect results caused by type coercion in logical conditions (e.g., comparisons in loops).
// 4️⃣ Comparing user input 🔢: Ensure both the data and type match expected values (e.g., comparing age as a number, not a string).
// 5️⃣ Validating configuration 🛠️: Ensure both value and type are exactly as expected in environment variables (e.g., feature flags).
// 6️⃣ Enhancing security 🔐: Enforce strict comparison in authentication logic (e.g., matching tokens to prevent vulnerabilities).
// 7️⃣ Handling fallback values 🔄: Guarantee proper type handling when using default or optional parameters in functions.
// 8️⃣ Validating API responses 📊: Ensure both data and types are correctly handled when processing API responses or database queries.
// 9️⃣ Ensuring front-end and back-end consistency 🕸️: Avoid type mismatches and ensure compatibility between front-end and back-end.
// 🔟 Ensuring accuracy in calculations 🔢💼: Handle edge cases in financial or mathematical operations where type precision is crucial.
