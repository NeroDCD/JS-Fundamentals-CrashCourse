// 24. JavaScript TEMPERATURE CONVERSION PROGRAM

// 🌡️ TEMPERATURE CONVERSION PROGRAM 🌡️

// This program converts temperatures between Celsius and Fahrenheit based on user input.
// The user enters a value in a textbox and selects whether they want to convert it to Fahrenheit or Celsius.
// Depending on the selected option, the appropriate conversion formula is applied and displayed on the screen.

// 🔗 Grabbing HTML elements by their ID
const textBox = document.getElementById("textbox"); // 🔢 Where the user inputs the temperature.
const toFahrenheit = document.getElementById("toFahrenheit"); // 🔘 Radio button to select Fahrenheit conversion.
const toCelsius = document.getElementById("toCelsius"); // 🔘 Radio button to select Celsius conversion.
const result = document.getElementById("result"); // 📝 Where the result is displayed.
let temp; // 🔢 Variable to store the temperature value for conversion.

// 🔄 Function to convert temperature based on the selected unit
function convert() {
  // 🎯 Checking if Fahrenheit is selected
  if (toFahrenheit.checked) {
    temp = Number(textBox.value); // 🧮 Get the number from the textbox input.
    temp = (temp * 9) / 5 + 32; // 🌡️ Celsius to Fahrenheit conversion formula.
    result.textContent = temp.toFixed(1) + " °F 🌡️"; // 🎯 Show result in Fahrenheit, rounded to 1 decimal.

    // 🎯 Checking if Celsius is selected
  } else if (toCelsius.checked) {
    temp = Number(textBox.value); // 🧮 Get the number from the textbox input.
    temp = (temp - 32) * (5 / 9); // 🌡️ Fahrenheit to Celsius conversion formula.
    result.textContent = temp.toFixed(1) + " °C 🌡️"; // 🎯 Show result in Celsius, rounded to 1 decimal.

    // ⛔ If no option is selected
  } else {
    result.textContent = "Select a unit 🌡️"; // ❗ Prompt the user to select a conversion unit.
  }
}

// 🎯 Possible Use Cases:
// 1️⃣ Form Data Processing 📝: Capturing user inputs from form elements and displaying results (e.g., BMI calculator).
// 2️⃣ Interactive Quizzes ❓: Using radio buttons or checkboxes to allow users to select answers and calculate scores.
// 3️⃣ Unit Conversion Tools 🔢: Applying different conversion formulas based on user selections (e.g., currency or length conversion).
// 4️⃣ Settings Pages ⚙️: Allowing users to select preferences (like themes or layouts) and displaying the applied changes in real-time.
// 5️⃣ E-commerce Filters 🛍️: Enabling users to filter products by selecting multiple criteria (like price range, categories, etc.).
// 6️⃣ Dynamic Form Validation ✔️: Checking if the user has selected required options and displaying helpful messages (e.g., incomplete form submissions).
// 7️⃣ Survey Forms 📋: Handling user-selected responses and giving feedback or results based on those selections.
// 8️⃣ Language Selection 🌍: Providing a dynamic UI where users can select languages and the app adjusts the content accordingly.
// 9️⃣ Custom Calculators 💰: Creating custom financial calculators, such as mortgage or loan repayment tools, based on selected options.
// 🔟 Game Settings Menus 🎮: Letting users select and apply various game settings (like difficulty level, sound, etc.) through radio buttons or checkboxes.
