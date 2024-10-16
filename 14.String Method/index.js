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

// 🧠 Simple Analogy 🧠
// 📚 String methods in JavaScript are like different tools for handling text:
// 📝 `charAt()` is like picking a specific letter from a word, similar to pointing at a letter in a book 📖.
// 🔍 `indexOf()` is like searching for the first appearance of a letter, just like finding a word in a dictionary 📚.
// 📝 `lastIndexOf()` is like finding the last occurrence of a letter, like locating the last mention of a name in a list 📝.
// 📏 `.length` is like counting the total number of characters, similar to measuring the length of a sentence with a ruler 📏.
// 🧽 `trim()` is like cleaning up a text by removing extra spaces, similar to erasing smudges from a document 🧽.
// 🔠 `toLowerCase()` and `toUpperCase()` are like changing text cases, similar to switching between uppercase and lowercase on a typewriter ⌨️.
// 🖨️ `repeat()` is like printing text multiple times, similar to copying a word several times on a sheet of paper 🖨️.
// 🔤 `startsWith()` and `endsWith()` are like checking if a text starts or ends with certain characters, just like checking the first and last letters of a name 🔤.

// 🎯 Possible Use Cases:
// 1️⃣ Validating user input 🛡️: Checking for forbidden characters or patterns (e.g., using `includes()` to detect unwanted input).
// 2️⃣ Formatting data 📞💳: Displaying phone numbers or credit card numbers (e.g., using `slice()` to insert dashes).
// 3️⃣ Cleaning up input 🧼: Removing extra spaces from user entries (e.g., using `trim()` to sanitize form inputs).
// 4️⃣ Generating IDs 🔢: Ensuring uniform length of codes (e.g., using `padStart()` for ID numbers or serials).
// 5️⃣ Searching data 🔍: Finding substrings within strings (e.g., using `indexOf()` or `includes()` for validation).
// 6️⃣ Case-insensitive comparisons 🔡🔠: Converting strings to lowercase or uppercase (e.g., using `toLowerCase()` for comparisons).
// 7️⃣ Extracting data ✂️: Retrieving parts of a string (e.g., using `substring()` to get specific sections).
// 8️⃣ Replacing text 📝: Updating or modifying parts of a string (e.g., using `replace()` to correct text).
// 9️⃣ Splitting strings 📊: Breaking strings into arrays for easier manipulation (e.g., using `split()` to handle CSV data).
// 🔟 Joining strings 📋: Combining arrays into a single string (e.g., using `join()` for comma-separated lists).
