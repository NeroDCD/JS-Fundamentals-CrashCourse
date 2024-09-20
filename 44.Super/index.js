// 44. The JavaScript SUPER keyword

// ✨ super = keyword is used in classes to call the constructor or
// access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// 🛠️ How it Works:
// The `super` keyword allows a derived class (subclass) to call the
// constructor and methods of its parent class (superclass). This
// is essential for properly initializing objects and reusing
// functionality from the parent class.

class Animal {
  constructor(name, age) {
    this.name = name; // 🏷️ Instance property for the name
    this.age = age; // 🎂 Instance property for the age
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`); // 🔢 Displays movement speed
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); // 🐰 Calls the parent class constructor
    this.runSpeed = runSpeed; // 🔥 Instance property for running speed
  }

  run() {
    console.log(`This ${this.name} can run`); // 🏃 Displays that the rabbit can run
    super.move(this.runSpeed); // 🏃‍♂️ Calls the move method from the parent class
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); // 🐟 Calls the parent class constructor
    this.swimSpeed = swimSpeed; // 🌊 Instance property for swimming speed
  }

  swim() {
    console.log(`This ${this.name} can swim`); // 🏊 Displays that the fish can swim
    super.move(this.swimSpeed); // 🏊‍♂️ Calls the move method from the parent class
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age); // 🦅 Calls the parent class constructor
    this.flySpeed = flySpeed; // ✈️ Instance property for flying speed
  }

  fly() {
    console.log(`This ${this.name} can fly`); // 🦅 Displays that the hawk can fly
    super.move(this.flySpeed); // ✈️ Calls the move method from the parent class
  }
}

// Creating instances of each class
const rabbit = new Rabbit("rabbit", 1, 25); // 🐰 Instance of Rabbit
const fish = new Fish("fish", 2, 12); // 🐟 Instance of Fish
const hawk = new Hawk("hawk", 3, 50); // 🦅 Instance of Hawk

// Calling methods for each animal
rabbit.run(); // 🏃 Calls run for rabbit
// 🖨️ Logs: This rabbit can run
// 🖨️ Logs: The rabbit moves at a speed of 25mph

fish.swim(); // 🏊 Calls swim for fish
// 🖨️ Logs: This fish can swim
// 🖨️ Logs: The fish moves at a speed of 12mph

hawk.fly(); // ✈️ Calls fly for hawk
// 🖨️ Logs: This hawk can fly
// 🖨️ Logs: The hawk moves at a speed of 50mph

// 🧠 Simple Analogy 🧠
// 🏡 Think of the `super` keyword as a bridge connecting a child
// to its parent. It allows the child class to access features
// (methods and properties) from its parent, just like a child
// can learn and inherit traits from their parents.

// 🎯 Possible Use Cases of the Super Keyword in JavaScript: 🎯
// 1️⃣ Constructor Chaining 🔗: Call a parent class constructor from a child class.
// 2️⃣ Method Overriding ⚙️: Extend or modify behavior of a parent method in the child class.
// 3️⃣ Code Reusability ♻️: Use existing functionality from parent classes to reduce code duplication.
// 4️⃣ Polymorphism 🌐: Allow different classes to define their own behaviors while sharing a common interface.
// 5️⃣ Organized Class Structure 📚: Maintain a clean hierarchy of classes, making it easier to manage related functionality.
// 6️⃣ Access Parent Properties 🔍: Access and utilize properties defined in the parent class.
// 7️⃣ Consistent Initialization 🔄: Ensure that all child instances are initialized properly by calling the parent constructor.
// 8️⃣ Improved Maintainability 🛠️: Easier to manage and update shared methods and properties in the parent class.
// 9️⃣ Flexibility in Class Design ✨: Allows for dynamic interactions between classes and their parents.
// 🔟 Simplified Inheritance Management 🏗️: Makes it clear how classes relate to each other, aiding in design clarity.
