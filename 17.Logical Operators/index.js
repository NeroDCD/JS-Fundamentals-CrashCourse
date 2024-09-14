// 17. Learn JavaScript LOGICAL OPERATORS

// 🔑 Logical operators = Used to combine or manipulate Boolean values (true or false).
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

// Explanation:
// The NOT operator (!) inverts the value of SUNNY. If SUNNY is true, !SUNNY becomes false, and vice versa.

// 🎯 Possible Use Cases:

