// 62. Build a JS Calculator 🧮

// 🧮 A simple calculator allows users to perform basic mathematical operations like addition, subtraction,
// multiplication, and division. This JavaScript project uses HTML for the display and buttons, while JavaScript
// handles the logic to append values to the display, clear the display, and evaluate the inputted expression.

// 🔍 eval():
// ⚠️ The `eval()` function evaluates a string as JavaScript code. When used in a calculator, it processes the
// mathematical expression entered by the user (as a string) and returns the result. However, it's important
// to use `eval()` carefully, as it executes any code within the string, which can lead to security risks. 
// 🛡️ In this calculator, we handle possible errors with a `try...catch` block to display "Error" if the expression is invalid.

// 1️⃣ Example 1: Basic Calculator Functions
// 🔢 This example shows how to build a calculator with the following functionality:
//  - Append numbers and operators to the display.
//  - Clear the display.
//  - Calculate and display the result of the entered expression.

const display = document.getElementById("display"); // 📥 Get the display element

// ➕ Function to append input (numbers or operators) to the calculator display
function appendToDisplay(input) {
  display.value += input; // ➕ Add the clicked number or operator to the display
}

// 🗑️ Function to clear the calculator display
function clearDisplay() {
  display.value = ""; // Reset the display to an empty value
}

// ✅ Function to evaluate the mathematical expression and display the result
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the expression using `eval()`
  } catch (error) {
    display.value = "Error"; // ❌ Show "Error" if the expression is invalid
  }
}

// 🧠 Simple Analogy 🧠
// 🧮 Think of the calculator as a vending machine. 
// 🛒 You select numbers and operations like selecting items from the machine. 
// ⚙️ The `eval()` function is like the internal mechanism of the machine that calculates how much you need to pay. 
// ⚠️ If the machine (eval) encounters a problem (like a wrong selection), it displays an "Error," 
// and you have to fix it (input correct values).

// 🎯 Possible Use Cases:
// 1️⃣ Basic Calculations ➕: Perform simple operations like addition, subtraction, multiplication, and division.
// 2️⃣ Input Validation 🚦: Ensure that the user inputs a valid mathematical expression, showing "Error" for invalid expressions.
// 3️⃣ Quick Calculation 🏃: Use in web apps to quickly calculate results without needing a scientific calculator.
// 4️⃣ Mobile-Friendly Calculators 📱: Implement in responsive designs for mobile or tablet calculators.
// 5️⃣ E-commerce Apps 🛒: Add calculators to shopping carts for quick total price or discount calculations.
// 6️⃣ Educational Apps 🎓: Create educational tools for teaching basic math concepts with interactive calculators.
// 7️⃣ Financial Calculators 💵: Use for calculating interest, loan payments, or taxes in finance apps.
// 8️⃣ Unit Converters 🔄: Expand this calculator for unit conversion (e.g., length, weight, temperature).
// 9️⃣ Custom Keyboards ⌨️: Build custom on-screen keypads or keyboards for touch-enabled apps.
// 🔟 Interactive Web Forms 📝: Add to forms where users input numbers, calculating totals or averages on the fly.
