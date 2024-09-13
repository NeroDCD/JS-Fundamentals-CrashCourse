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

// 🎯 Possible Use Cases:
// 1️⃣ Form validation ensuring both value and type match, such as when checking for numeric inputs. 📝
// 2️⃣ Ensuring that types are not implicitly coerced when comparing data (e.g., string vs. number). ⚙️
// 3️⃣ Avoiding bugs by catching unintended type coercion, which could lead to incorrect logical results. 🐞
// 4️⃣ Comparing user input to expected values while ensuring datatype matches (e.g., comparing age as a number). 🔢
// 5️⃣ Checking configuration values to guarantee both content and type are as expected in an app's settings. 🛠️
