// 17. Learn JavaScript LOGICAL OPERATORS

// 🔑 Logical Operators = Used to combine or manipulate Boolean values (true or false).
// These are crucial in decision-making and conditions in JavaScript.

// ⚙️ AND (&&) = All conditions must be true for the whole expression to be true.
// ⚙️ OR (||)  = Only one condition needs to be true for the whole expression to be true.
// ⚙️ NOT (!)  = Inverts the truth value (true becomes false and vice versa).

// Example 1: AND (&&)

// const TEMP = 20; // 🌡️ Example temperature value

// if (TEMP > 0 && TEMP <= 30) {
//   console.log("The Weather is Good ⛅"); // ✅ Both conditions are true, so it prints this.
// } else {
//   console.log("The Weather is Bad ❄️"); // ❌ If either condition fails, this will be printed.
// }

// Explanation:
// The AND operator (&&) checks if both conditions (TEMP > 0 and TEMP <= 30) are true.
// If both are true, the first block runs; otherwise, the second block runs.

// Example 2: OR (||)

// if (TEMP <= 0 || TEMP > 30) {
//   console.log("The Weather is Bad ❄️"); // ❄️ One condition is true, so it prints this.
// } else {
//   console.log("The Weather is Good ⛅"); // ⛅ If neither condition is true, this will print.
// }

// Explanation:
// The OR operator (||) checks if at least one condition is true.
// If either condition is true, the first block runs; otherwise, the second block runs.

// Example 3: NOT (!)

const SUNNY = true; // ☀️ Example boolean value for whether it's sunny or not

if (!SUNNY) {
  console.log("It is Cloudy ☁️"); // ☁️ Inverts the truth, if it's NOT sunny, print "Cloudy".
} else {
  console.log("It is Sunny ☀️"); // ☀️ If it's sunny (true), print "Sunny".
}

// 🔑 Explanation:
// The NOT operator (!) inverts the value of SUNNY. If SUNNY is true, !SUNNY becomes false, and vice versa.

// 🧠 Simple Analogy 🧠
// Logical operators in JavaScript are like decision-making tools used in everyday situations:
// Imagine you’re deciding whether to go outside based on the weather and time of day:
// The `&&` (AND) operator is like saying, "I’ll go outside if it’s sunny AND if it’s daytime." Both conditions need to be true.
// The `||` (OR) operator is like saying, "I’ll go outside if it’s either sunny OR if it’s daytime." Just one of the conditions needs to be true.
// The `!` (NOT) operator is like saying, "I won’t go outside if it’s not sunny." It flips the condition to its opposite.
// Using these operators helps you make complex decisions easily, just like how combining different conditions helps you decide when to go outside based on multiple factors.
// If a condition is true, `!` makes it false, and if it’s false, `!` makes it true.

// 🎯 Possible Use Cases:
// 1️⃣ Validating form inputs by ensuring multiple conditions are met (e.g., checking if both username and password fields are filled). 📝
// 2️⃣ Checking multiple conditions in if-else statements (e.g., verifying if age is within a valid range or if a user meets all criteria). ⚖️
// 3️⃣ Setting up fallback options by using logical operators to handle undefined or null values (e.g., providing default values). 🔄
// 4️⃣ Inverting Boolean values to control toggling between states (e.g., switching between light 🌙 and dark ☀️ mode). 🔄
// 5️⃣ Controlling access based on multiple permissions (e.g., ensuring a user has all required privileges before granting access). 🔐
// 6️⃣ Combining conditions for complex decision-making (e.g., checking if a user is logged in and has admin rights). 🛠️
// 7️⃣ Managing feature flags or enabling/disabling features based on multiple criteria (e.g., feature availability in different environments). 🏷️
// 8️⃣ Handling complex conditional logic in loops or functions (e.g., processing multiple inputs or configuration options). 🔍
// 9️⃣ Implementing search filters or query conditions (e.g., finding items that match certain criteria or belong to multiple categories). 🔎
// 🔟 Optimizing performance by short-circuiting conditions in logical expressions (e.g., preventing unnecessary calculations). 🚀
