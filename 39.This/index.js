// 39. What is THIS in JavaScript

// this = reference to the object where THIS is used 🧭
// (the object depends on the immediate context) 🔍

// 🚫 this keyword does not work in arrow function ❌
// Arrow functions don't have their own `this`.
// They use `this` from where they were created.
// So if you use `this` inside an arrow function, it refers to the outer context,
// not the object the function is part of.

// 🚫 Arrow functions are like special toys that don't remember their toy box (object).
// They use the memory from where they were created, not the box they belong to.
// So `this` in an arrow function looks in the wrong place!

// 🔍 Example : In the player1 and player2 objects, `this` refers to the specific player object itself.
// When you call the Information or Stats methods, `this` lets you access the properties of that player.

const player1 = {
  ID: "Raddan",
  Name: "Illya Mulyarchuk",
  Position: 1,
  isActive: true,
  Information: function () {
    // 📝 Method to display information
    console.log(
      `As of September 19, 2024 ${this.Name} ranks at 13 in the Europe leaderboard.` // 👑 Displays player's rank
    );
  },
  Stats: function () {
    // 📊 Method to display stats
    console.log(
      `${this.Name} also known as ${this.ID} has a 70% Match Win Rate` // 📈 Displays player's match win rate
    );
  }
};

const player2 = {
  ID: "Collapse",
  Name: "Magomed Khalilov",
  Position: 3,
  isActive: true,
  Information: function () {
    // 📝 Method to display information
    console.log(
      `As of September 19, 2024 ${this.Name} ranks at 18 in the Europe leaderboard.` // 👑 Displays player's rank
    );
  },
  Stats: function () {
    // 📊 Method to display stats
    console.log(
      `${this.Name} also known as ${this.ID} has a 78% Match Win Rate` // 📈 Displays player's match win rate
    );
  }
};

// Calling methods for player1 🚀
player1.Information(); // 🗣️ Calls the Information method
player1.Stats(); // 📊 Calls the Stats method

// Calling methods for player2 🚀
player2.Information(); // 🗣️ Calls the Information method
player2.Stats(); // 📊 Calls the Stats method

// 🧠 Simple Analogy 🧠
// 🚗 Think of `this` as a "car key" that only works for the car you’re currently standing next to.
// Depending on which car you’re by (context), `this` refers to that specific car (object) and its unique features (properties).

// 🎯 Possible Use Cases: 🎯
// 1️⃣ Object Methods 🔑: Using `this` to access properties inside an object's method
// 2️⃣ Event Handlers 🎯: Referring to the element that triggered an event (like a button click)
// 3️⃣ Constructors 🏗️: Referring to the new object being set up in a constructor function
// 4️⃣ Method Chaining 🔗: Keeping track of the object while calling multiple methods in a row
// 5️⃣ Classes ⚙️: Referring to the current instance of a class inside its methods
// 6️⃣ Callbacks ⏳: Maintaining the correct object context in functions that run later (like after a delay)
// 7️⃣ Timers ⏰: Referring to the object that set up a timer (using `setTimeout` or `setInterval`)
// 8️⃣ Binding 🔄: Setting a specific object to be used inside a function with `.bind()`
// 9️⃣ Function Context 🎟️: Using `call()`, `apply()`, or `bind()` to control which object `this` refers to
// 🔟 Prototypes 🔍: Referring to the object instance when using methods defined in a prototype
