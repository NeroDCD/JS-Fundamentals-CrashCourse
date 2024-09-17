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
// String methods in JavaScript are like different tools for handling text 📚:
// `charAt()` is like picking a specific letter from a word, just as you might point to a letter in a book 📖.
// `indexOf()` is like searching for the first time you see a specific letter, like finding a particular word in a dictionary 📚.
// `lastIndexOf()` is like finding the last occurrence of a letter, similar to locating the last mention of a name in a list 📝.
// `.length` is like counting the total number of characters in a text, like measuring the length of a sentence with a ruler 📏.
// `trim()` is like cleaning up a text by removing extra spaces, similar to erasing smudges from a document 🧽.
// `toLowerCase()` and `toUpperCase()` are like changing the case of text, like switching between uppercase and lowercase on a typewriter ⌨️.
// `repeat()` is like printing a text multiple times, just as you might copy a word several times on a sheet of paper 🖨️.
// `startsWith()` and `endsWith()` are like checking if a text starts or ends with certain characters, like checking the first and last letters of a name 🔤.
// `includes()` is like searching for a word within a sentence, like finding a specific term in a paragraph 🔍.
// `replaceAll()` is like replacing all instances of a character, similar to editing every instance of a word in a document ✏️.
// `padStart()` and `padEnd()` are like adding extra characters to the start or end of a text, like filling in the blanks in a form to make it a certain length 📄.


// 🎯 Possible Use Cases:
// 1️⃣ Validating user input by checking for forbidden characters or patterns (e.g., using `includes()` to detect unwanted characters). 🛡️
// 2️⃣ Formatting phone numbers or credit card numbers for display (e.g., using `slice()` to insert dashes or spaces). 📞💳
// 3️⃣ Cleaning up input from forms by removing extra spaces (e.g., using `trim()` to sanitize user input). 🧼
// 4️⃣ Generating secure or formatted strings by padding ID numbers or serial codes (e.g., using `padStart()` or `padEnd()` to ensure uniform length). 🔢
// 5️⃣ Searching for specific data within strings (e.g., using `indexOf()` or `includes()` to find substrings or validate presence). 🔍
// 6️⃣ Converting strings to lowercase or uppercase for case-insensitive comparisons (e.g., using `toLowerCase()` or `toUpperCase()`). 🔡🔠
// 7️⃣ Extracting parts of strings for display or processing (e.g., using `substring()` or `slice()` to get specific sections). ✂️
// 8️⃣ Replacing text within strings for updates or corrections (e.g., using `replace()` to modify parts of a string). 📝
// 9️⃣ Splitting strings into arrays for easier manipulation (e.g., using `split()` to handle CSV data or parse user input). 📊
// 🔟 Joining arrays into strings for output or data formatting (e.g., using `join()` to create comma-separated lists). 📋
