// 14. Useful JavaScript STRING METHODS

// 💻 String methods allow you to manipulate and work with text (strings)

// Example string
//let username = "NeroDCD";

// 1️⃣ charAt(): Get the character at a specific index
// 🆔 Here, we get the first character of "NeroDCD" (index 0)
// console.log(username.charAt(0)); // Output: "N"

// 2️⃣ indexOf(): Find the first occurrence of a character
// 🔍 Finds the first position of "D" in the string
// console.log(username.indexOf("D")); // Output: 4

// 3️⃣ lastIndexOf(): Find the last occurrence of a character
// 🔍 Finds the last position of "e" in the string
// console.log(username.lastIndexOf("e")); // Output: 2

// 4️⃣ .length: Get the length of the string
// 📏 Shows how many characters are in the string
// console.log(username.length); // Output: 7

// 5️⃣ trim(): Remove spaces from both sides of the string
// ✂️ Useful for cleaning up input from users
// let trimUser = "   Figma   ";
// trimUser = trimUser.trim(); // Removes extra spaces
// console.log(trimUser); // Output: "Figma"

// 6️⃣ toLowerCase(): Convert the string to lowercase
// 🔡 Turns all characters to lowercase
// username = username.toLowerCase();
// console.log(username); // Output: "nerodcd"

// 7️⃣ toUpperCase(): Convert the string to uppercase
// 🔠 Turns all characters to uppercase
// username = username.toUpperCase();
// console.log(username); // Output: "NERODCD"

// 8️⃣ repeat(): Repeat the string multiple times
// 🔁 Repeats the username 3 times
// username = username.repeat(3);
// console.log(username); // Output: "NeroDCDNeroDCDNeroDCD"

// 9️⃣ startsWith(): Check if the string starts with a certain character
// 🚦 Checks if the string starts with a space
// let result = username.startsWith(" ");
// console.log(result); // Output: false

// 🔟 endsWith(): Check if the string ends with a certain character
// 🏁 Checks if the string ends with a space
// let result = username.endsWith(" ");
// console.log(result); // Output: false

// 1️⃣1️⃣ includes(): Check if the string contains a specific character or word
// 🔍 Looks for a space in the username
// let result = username.includes(" ");
// if (result) {
//   console.log("⛔ Your username can't include an empty space");
// } else {
//   console.log(username); // Output: "NeroDCD"
// }

// Example: Working with phone numbers
let phoneNumber = "123-456-7890";

// 1️⃣2️⃣ replaceAll(): Replace all occurrences of a character with another
// 🔄 Replace all hyphens (-) with a different character
// phoneNumber = phoneNumber.replaceAll("-", "🔵");
// console.log(phoneNumber); // Output: "123🔵456🔵7890"

// 1️⃣3️⃣ padStart(): Add characters to the beginning of a string
// 🏗️ Adds "0" to the start until the string is 15 characters long
// phoneNumber = phoneNumber.padStart(15, "0");
// console.log(phoneNumber); // Output: "00123-456-7890"

// 1️⃣4️⃣ padEnd(): Add characters to the end of a string
// 🏗️ Adds "0" to the end until the string is 15 characters long
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber); // Output: "123-456-7890000"

// 🎯 Possible Use Cases:
// 1️⃣ Validating user input (e.g., checking if a username includes forbidden characters).
// 2️⃣ Formatting phone numbers or credit card numbers for display.
// 3️⃣ Cleaning up input from forms (e.g., removing extra spaces with `trim()`).
// 4️⃣ Generating secure or formatted strings (e.g., using `padStart()` or `padEnd()` for ID numbers).
// 5️⃣ Searching for specific data within strings (e.g., using `indexOf()` or `includes()` for validation).