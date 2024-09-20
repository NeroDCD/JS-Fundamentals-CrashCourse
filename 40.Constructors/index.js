// 40. JavaScript CONSTRUCTORS

//  Constructors: is a special method used to set up properties and methods for new objects 🛠️.

// 🎯 Example: Defining a Player Constructor

function Player(ID, Name, Position, isActive, Hero) {
  // 🏷️ Defining properties
  this.ID = ID;
  this.Name = Name;
  this.Position = Position;
  this.isActive = isActive;
  this.Hero = Hero;

  // 🎭 Defining a method to display favorite hero
  this.FavHero = function () {
    // 📣 Logging the favorite hero
    console.log(`${this.ID}'s favorite hero is ${this.Hero}`);
  };
}

// Creating player instances using the constructor
const player1 = new Player("Raddan", "Illya Mulyarchuk", 1, true, "Mirana");
const player2 = new Player("Larl", "Denis Sigitov", 2, true, "Puck");
const player3 = new Player("Collapse", "Magomed Khalilov", 3, true, "Magnus");

// 🕵️‍♂️ Player 1 Details
console.log(player1.ID + "🏆"); // 🖨️ Logs: Raddan 🏆
console.log(player1.Name);      // 🖨️ Logs: Illya Mulyarchuk
console.log(player1.Position);  // 🖨️ Logs: 1
console.log(player1.isActive);  // 🖨️ Logs: true
player1.FavHero();              // 🖨️ Logs: Raddan's favorite hero is Mirana

// 🕵️‍♂️ Player 2 Details
console.log(player2.ID + "🏆"); // 🖨️ Logs: Larl 🏆
console.log(player2.Name);      // 🖨️ Logs: Denis Sigitov
console.log(player2.Position);  // 🖨️ Logs: 2
console.log(player2.isActive);  // 🖨️ Logs: true
player2.FavHero();              // 🖨️ Logs: Larl's favorite hero is Puck

// 🕵️‍♂️ Player 3 Details
console.log(player3.ID + "🏆"); // 🖨️ Logs: Collapse 🏆
console.log(player3.Name);      // 🖨️ Logs: Magomed Khalilov
console.log(player3.Position);  // 🖨️ Logs: 3
console.log(player3.isActive);  // 🖨️ Logs: true
player3.FavHero();              // 🖨️ Logs: Collapse's favorite hero is Magnus


// 🧠 Simple Analogy 🧠
// 🎭 Think of a constructor like a factory blueprint. Each time you create a new player with the `Player` constructor,
// it's like making a new product from the same factory blueprint, with unique details for each product (player)
// but following the same design (properties and methods).

// 🎯 Possible Use Cases 🎯
// 1️⃣ Creating Multiple Objects 🔄: Make many objects with the same setup but different data.
// 2️⃣ Organizing Data 📚: Keep related data and actions together in one place.
// 3️⃣ Reusability 🔁: Use the constructor to create new objects without repeating code.
// 4️⃣ Encapsulation 🔐: Group properties and methods into one object for better management.
// 5️⃣ Inheritance 📈: Build new types of objects from a base constructor with extra features.
// 6️⃣ Initialization 🚀: Set up default values when creating new objects.
// 7️⃣ Method Definitions 🛠️: Add functions to objects that all instances can use.
// 8️⃣ Custom Object Creation 🎨: Adapt the constructor for specific needs or behaviors.
// 9️⃣ Object Construction 🏗️: Handle complex setup in one place for simpler object creation.
// 🔟 Data Consistency 📏: Ensure all objects have a consistent structure and behavior.
