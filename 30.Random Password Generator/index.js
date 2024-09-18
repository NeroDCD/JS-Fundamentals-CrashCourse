// 30. Build a JavaScript random password generator

// 🔑 RANDOM PASSWORD GENERATOR 🔑

function generatePassword(
  length, // 📏 Length of the password
  includeLowerCase, // 🔡 Whether to include lowercase letters
  includeUpperCase, // 🔠 Whether to include uppercase letters
  includeNumbers, // 🔢 Whether to include numbers
  includeSymbols // 🔣 Whether to include symbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; // 🔤 Lowercase letters
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 🔠 Uppercase letters
  const numberChars = "0123456789"; // 🔢 Numbers
  const symbolChars = "!@#$%&"; // 🔣 Symbols

  let allowedChars = ""; // 🗂️ String to hold all allowed characters
  let password = ""; // 🔑 String to build the password

  // Add the chosen character sets to the allowed characters string
  allowedChars += includeLowerCase ? lowercaseChars : ""; // 🔡 Add lowercase letters if selected
  allowedChars += includeUpperCase ? uppercaseChars : ""; // 🔠 Add uppercase letters if selected
  allowedChars += includeNumbers ? numberChars : ""; // 🔢 Add numbers if selected
  allowedChars += includeSymbols ? symbolChars : ""; // 🔣 Add symbols if selected

  // Check if the password length is valid
  if (length <= 0) {
    // ⚠️ Length must be at least 1
    return "(Password length must be at least 1 🔢)";
  }
  // Check if at least one set of characters is selected
  if (allowedChars.length === 0) {
    // ⚠️ No character sets selected
    return "(At least 1 set of characters needs to be selected 🔐)";
  }

  // Generate the password
  for (let i = 0; i < length; i++) {
    // 🔄 Loop to create each character of the password
    const randomIndex = Math.floor(Math.random() * allowedChars.length); // 🎲 Get a random index from allowedChars
    password += allowedChars[randomIndex]; // 🔤 Add the character at the random index to the password
  }

  return password; // 🔑 Return the generated password
}

// Example usage
const passwordLength = 12; // 🔢 Desired length of the password
const includeLowerCase = true; // 🔡 Include lowercase letters
const includeUpperCase = true; // 🔠 Include uppercase letters
const includeNumbers = true; // 🔢 Include numbers
const includeSymbols = true; // 🔣 Include symbols

const password = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
); // 🔑 Generate the password with the specified options
console.log(`Generated Password: ${password}`); // 🖨️ Print the generated password

// 🧠 Simple Analogy 🧠
// Imagine you have a collection of letters, numbers, and symbols (like putting different colored beads into a bag). 
// You decide how many beads (characters) to pick and which types (lowercase, uppercase, numbers, symbols) you want to include. 
// The function then randomly picks beads from this collection to create a unique string (password).

// 🎯 Possible Use Cases:
// 1️⃣ Password Creation 🔐: Generates secure passwords for user accounts or systems.
// 2️⃣ User Authentication 🛡️: Creates or resets passwords for secure access to applications or services.
// 3️⃣ Randomized Test Data 🧪: Generates passwords to test applications requiring password input.
// 4️⃣ Security Enhancements 🔒: Creates strong passwords meeting different security policies.
// 5️⃣ On-Demand Password Generation 📅: Generates temporary passwords for single-use scenarios.
// 6️⃣ Educational Purposes 📚: Teaches concepts of randomness and password security.
// 7️⃣ Account Setup Wizards 🛠️: Integrates into onboarding processes for creating secure passwords.
// 8️⃣ Password Management Tools 🗝️: Part of tools generating and storing passwords securely.
// 9️⃣ Encryption Keys 🔑: Generates random keys for encryption algorithms or security applications.
// 🔟 Application Security Testing 🔍: Simulates different user behaviors and security scenarios.
