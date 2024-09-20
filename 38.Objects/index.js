// 38. Learn JavaScript OBJECTS

// object = A collection of related properties and/or methods
// Can represent real world objects (people, products, places)
// object = {key:value, function()}

// Example:

// ID: 🆔 Unique identifier for the player
// Name: 🧑 Full name of the player
// Position: 🔢 Player's position in the team
// isActive: ✅ Indicates if the player is currently active

// 🎮 Player 1
// 📜 This object represents a player with various properties and methods.

const player1 = {
  ID: "Yatoro",
  Name: "Illya Mulyarchuk",
  Position: 1,
  isActive: true,
  Information: function () {
    // 📜 Method to print player details
    console.log(
      "As of September 19, 2024 Yatoro ranks at 13 in the Europe leaderboard."
    );
  },
  Stats: function () {
    // 📊 Method to print player stats
    console.log("Match Win Rate: 70%");
  }
};

// 🎮 Player 2
const player2 = {
  ID: "Larl",
  Name: "Denis Sigitov",
  Position: 2,
  isActive: true
};

// 🎮 Player 3
// 📜 This object includes both properties and methods. The `Stats` method uses an arrow function.
const player3 = {
  ID: "Collapse",
  Name: "Magomed Khalilov",
  Position: 3,
  isActive: true,
  Information: function () {
    // 📜 Method to print player details
    console.log(
      "As of September 19, 2024 Collapse ranks at 18 in the Europe leaderboard."
    );
  },
  Stats: () => console.log("Match Win Rate: 78%") // 📊 Arrow function method to print player stats
};

// 🎮 Player 4
const player4 = {
  ID: "Mira",
  Name: "Myroslav Kolpakov",
  Position: 4,
  isActive: true
};

// 🎮 Player 5
const player5 = {
  ID: "Miposhka",
  Name: "Yaroslav Naidenov",
  Position: 5,
  isActive: true
};

// Accessing properties and methods
// console.log(player1.ID); // 🖨️ Logs: Yatoro
// console.log(player1.Name); // 🖨️ Logs: Illya Mulyarchuk
// console.log(player1.Position); // 🖨️ Logs: 1
// console.log(player1.isActive); // 🖨️ Logs: true

// console.log(player3.ID); // 🖨️ Logs: Collapse
// console.log(player3.Name); // 🖨️ Logs: Magomed Khalilov
// console.log(player3.Position); // 🖨️ Logs: 3
// console.log(player3.isActive); // 🖨️ Logs: true

console.log(player1.ID); // 🖨️ Logs: Yatoro
player1.Information(); // 🖨️ Logs: As of September 19, 2024 Yatoro ranks at 13 in the Europe leaderboard.
player1.Stats(); // 🖨️ Logs: Match Win Rate: 70%

console.log(player3.ID); // 🖨️ Logs: Collapse
player3.Information(); // 🖨️ Logs: As of September 19, 2024 Collapse ranks at 18 in the Europe leaderboard.
player3.Stats(); // 🖨️ Logs: Match Win Rate: 78%

// 🧠 Simple Analogy 🧠
// 📦 Think of an object as a storage box. Each box (object) contains different items (properties)
// and can have instructions (methods) on how to use those items.
// For example, a player object is like a box with labeled compartments for storing the player's ID, name,
// position, and status, and methods to display detailed information and stats.

// 🎯 Possible Use Cases:
// 1️⃣ Representing Entities 🎭: Use objects to model real-world entities like users,
// products, or cars with properties and methods.
// 2️⃣ Storing Data 📊: Organize related data in a single object, such as customer details in an e-commerce application.
// 3️⃣ Encapsulating Behavior 🛠️: Define methods within objects to perform actions related to the object's data,
// like calculating discounts or updating statuses.
// 4️⃣ Managing State 🌟: Track and update the state of various elements, like the status of a
// game character or an item's inventory level.
// 5️⃣ Grouping Related Functions 🔗: Use objects to bundle functions that operate on related data,
// making the code more modular and easier to maintain.
// 6️⃣ Creating Models 📚: Design models for complex data structures, such as creating blueprints for
// database records or application components.
// 7️⃣ Implementing Class-like Structures 🏛️: Use objects to simulate class behavior, allowing for the
// creation of instances with shared properties and methods.
// 8️⃣ Passing Data 🌐: Transfer related data and functionality together when working with
// APIs or between different parts of an application.
// 9️⃣ Customizing Behaviors ✨: Adapt the behavior of objects dynamically based on their properties,
// such as changing UI elements based on user settings.
// 🔟 Managing Configurations ⚙️: Store and manage configuration settings or preferences in objects for easier access and updates.
