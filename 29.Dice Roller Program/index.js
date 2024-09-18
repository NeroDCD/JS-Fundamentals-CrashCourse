// 29. Build a JavaScript Dice Roller program

// 🎲 DICE ROLLER PROGRAM 🎲

function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value; // 📥 Get the number of dice to roll from user input
  const diceResult = document.getElementById("diceResult"); // 📜 Get the HTML element to display the dice results
  const diceImages = document.getElementById("diceImages"); // 📷 Get the HTML element to display the dice images
  const values = []; // 🗂️ Initialize an array to store the results of each dice roll
  const images = []; // 🖼️ Initialize an array to store the HTML for dice images

  for (let i = 0; i < numOfDice; i++) {
    // 🔄 Loop through the number of dice to roll
    const value = Math.floor(Math.random() * 6) + 1; // 🎲 Generate a random number between 1 and 6
    values.push(value); // 📈 Add the random number to the values array
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`); // 🖼️ Create HTML for the dice image and add it to the images array
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`; // 🖨️ Display the dice values as a comma-separated list
  diceImages.innerHTML = images.join(" "); // 🖨️ Display the dice images by joining the HTML strings
}

// 🧠 Simple Analogy 🧠
// The dice roller function is like a magic dice cup 🧙‍♂️. You tell it how many dice you want to roll, and it magically generates random numbers for each dice. 
// Then, it displays both the numbers and images of the dice rolled, just like showing the results after shaking the cup and revealing the dice!

// 🎯 Possible Use Cases:

// 1️⃣ Board Games 🎲: Use `const numOfDice = document.getElementById("numOfDice").value;` to determine the number of dice to roll. 
// `const value = Math.floor(Math.random() * 6) + 1;` generates random dice values, mimicking dice rolls in games.
// 2️⃣ Random Number Generation 🔢: `const value = Math.floor(Math.random() * 6) + 1;` generates random numbers between 1 and 6, useful for various randomization needs.
// 3️⃣ Educational Tools 📚: `const values = [];` and `const images = [];` can be used to store results and show dice roll outcomes to teach probability concepts.
// 4️⃣ Event Simulations 🎰: `const images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);` visualizes random events or outcomes, such as in a simulation.
// 5️⃣ Interactive Web Features 🌐: Use `diceResult.textContent = `Dice: ${values.join(", ")}`;` and `diceImages.innerHTML = images.join(" ");` 
// to display results and images interactively on a webpage.
// 6️⃣ Game Development 🎮: Integrate the function to handle dice mechanics, showing results with `diceResult.textContent` and images with `diceImages.innerHTML`.
// 7️⃣ Random Selection Tools 📋: `const value = Math.floor(Math.random() * 6) + 1;` randomly selects numbers, which can be adapted for choosing options or entries in applications.
// 8️⃣ Probability Testing 📊: `const values = [];` captures multiple dice results for analysis, helping test and visualize probability distributions.
// 9️⃣ User Engagement 🎉: Enhance user interaction with `diceResult.textContent` and `diceImages.innerHTML` to create a fun and engaging feature on websites.
// 🔟 Gambling Simulations 🎲: Use `const value = Math.floor(Math.random() * 6) + 1;` and display results with `images.push` to simulate dice rolls for gambling scenarios.
