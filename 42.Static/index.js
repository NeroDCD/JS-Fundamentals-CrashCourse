// 42. Learn JavaScript STATIC keyword

// 🔍 Static = keyword that defines properties or methods that belong to a
// class itself rather than the objects created from that class.
// This means that the class owns anything static, not the individual objects.

// 📌 Static members are accessed directly on the class, not on instances.
// Static properties and methods are defined at the class level, not on instances of the class.
// This means they belong to the class itself, rather than to any object created from the class.

// 📌 Accessing Static Members:
// You can access static members directly on the class using the class name. For example,
// MathUtil.PI or User.getUserCount(). You don’t need to create an instance of the class to access them.

// 1️⃣ Example 1 : This example demonstrates how to use static properties and methods
// in a utility class without needing to create an instance.

// class MathUtil {
//   static PI = 3.14159; // 🌐 Static property representing the value of PI

//   static getDiameter(radius) {
//     // 🔢 Static method to calculate the diameter of a circle
//     return radius * 2; // ➕ Returns diameter based on radius
//   }

//   static getCircumference(radius) {
//     // 📏 Static method to calculate the circumference of a circle
//     return 2 * this.PI * radius; // ➕ Uses static PI to calculate circumference
//   }

//   static getArea(radius) {
//     // 🌌 Static method to calculate the area of a circle
//     return this.PI * radius * radius; // ➕ Uses static PI to calculate area
//   }
// }

// Accessing static properties and methods directly from the class
// console.log(MathUtil.PI); // 🌐 Displays the value of PI
// // Output: 3.14159

// console.log(MathUtil.getDiameter(10)); // 🔢 Calls getDiameter with radius 10
// // Output: 20

// console.log(MathUtil.getCircumference(5)); // 📏 Calls getCircumference with radius 5
// // Output: 31.4159

// console.log(MathUtil.getArea(10)); // 🌌 Calls getArea with radius 10
// // Output: 314.159

// 2️⃣ Example 2: This example illustrates how to track the total number of User instances
// using a static property and method to provide class-level information.

class User {
  static userCount = 0; // 📊 Static property to track the number of users

  constructor(username) {
    this.username = username; // 🏷️ Instance property for username
    User.userCount++; // ➕ Increment the static userCount each time a user is created
  }

  static getUserCount() {
    // 📈 Static method to display the current user count
    console.log(`There are ${User.userCount} users online`); // 🔍 Shows total users
  }

  isOnline() {
    // 🖥️ Method to indicate if the user is online
    console.log(`${this.username} is online`); // 📡 Displays online status
  }
}

// Creating user instances 🧑‍🤝‍🧑
const user1 = new User("Dyrachyo");
const user2 = new User("Raddan");
const user3 = new User("Nisha");

// Accessing instance properties and methods
console.log(user1.username); // 🏷️ Displays username of user1
// Output: Dyrachyo

user1.isOnline(); // 🖥️ Calls isOnline for user1
// Output: Dyrachyo is online

console.log(user2.username); // 🏷️ Displays username of user2
// Output: Raddan

user2.isOnline(); // 🖥️ Calls isOnline for user2
// Output: Raddan is online

console.log(user3.username); // 🏷️ Displays username of user3
// Output: Nisha

user3.isOnline(); // 🖥️ Calls isOnline for user3
// Output: Nisha is online

// Accessing static property and method
console.log(User.userCount); // 📊 Displays the current user count
// Output: 3

User.getUserCount(); // 📈 Calls getUserCount to show total online users
// Output: There are 3 users online

// 🧠 Simple Analogy 🧠
// 📚 Think of static members as "library books" that belong to the library (class) itself,
// while instance members are like "borrowed books" that belong to individual readers (objects).
// You access library books directly from the library rather than from each reader.

// 🎯 Possible Use Cases: 🎯
// 1️⃣ Utility Functions 🔧: Create helper methods that don't require instance data, such as math operations or string manipulations.
// 2️⃣ Class Constants 📏: Define constants relevant to the class, like configuration values or fixed rates, ensuring consistency across instances.
// 3️⃣ Tracking Instances 📊: Keep track of how many instances of a class have been created, useful for managing resource limits or user counts.
// 4️⃣ Singleton Pattern ♻️: Implement a design pattern where only one instance of a class exists, often using a static method to retrieve it.
// 5️⃣ Factory Methods 🏭: Provide static methods that create and return instances of the class, allowing for custom initialization without direct instantiation.
// 6️⃣ Static Properties for Configuration ⚙️: Define settings or options at the class level, enabling all instances to access shared configuration data easily.
// 7️⃣ Group Related Functions 📚: Organize utility functions related to a class within the class itself, improving code structure and readability without requiring instances.
// 8️⃣ Access Control 🔒: Use static methods for operations that don't depend on instance data, ensuring that certain functionalities remain accessible at the class level.
// 9️⃣ Enhancing Readability 📖: Group functions and properties logically within a class to enhance code organization and make it easier to understand.
// 🔟 Shared Data Management 🌐: Manage data that is shared across all instances of a class, eliminating the need for each instance to maintain its own copy of the data.
