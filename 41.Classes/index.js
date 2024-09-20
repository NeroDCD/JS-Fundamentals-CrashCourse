// 41. Learn JavaScript CLASSES

// 🏗️ Class = (ES6 feature) provides a more structured and cleaner
// way to work with objects compared to traditional constructor functions.
// It introduces features like the `static` keyword, encapsulation, and inheritance. 🌟

// 🛠️ How Classes Work:
// A class acts as a blueprint for creating objects (instances).
// You define properties and methods within a class, and each instance
// created from the class can have its own unique values for those properties,
// while sharing the same methods. This encapsulates related data and functionality,
// making code easier to manage and understand.

class Product {
  constructor(name, price) {
    this.name = name; // 🏷️ Product name
    this.price = price; // 💰 Product price
  }

  displayProduct() {
    // 📝 Method to display product information
    console.log(`Product: ${this.name}`); // 📦 Displays the product name
    console.log(`Price: ${this.price.toFixed(2)}`); // 💲 Displays the product price
  }

  calculateTotal(salesTax) {
    // 💵 Method to calculate total price with sales tax
    return this.price + this.price * salesTax; // ➕ Returns the total price
  }
}

const salesTax = 0.05; // 📈 Sales tax rate

// Creating product instances 🛍️
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);
const product3 = new Product("Underwear", 100.0);

// Displaying products and calculating totals 📊
product1.displayProduct(); // 🗣️ Calls the displayProduct method
const total1 = product1.calculateTotal(salesTax); // 🔢 Calculates total with tax
console.log(`Total price (with tax): $${total1.toFixed(2)}`); // 💲 Displays total price
// Output: Product: Shirt
//         Price: 19.99
//         Total price (with tax): $20.99

product2.displayProduct(); // 🗣️ Calls the displayProduct method
const total2 = product2.calculateTotal(salesTax); // 🔢 Calculates total with tax
console.log(`Total price (with tax): $${total2.toFixed(2)}`); // 💲 Displays total price
// Output: Product: Pants
//         Price: 22.50
//         Total price (with tax): $23.63

product3.displayProduct(); // 🗣️ Calls the displayProduct method
const total3 = product3.calculateTotal(salesTax); // 🔢 Calculates total with tax
console.log(`Total price (with tax): $${total3.toFixed(2)}`); // 💲 Displays total price
// Output: Product: Underwear
//         Price: 100.00
//         Total price (with tax): $105.00

// 🧠 Simple Analogy 🧠
// 📦 Think of a class like a "blueprint" for a product. Just like a blueprint defines
// how to create a building (product), a class defines how to create objects with specific properties and methods.

// 🎯 Possible Use Cases: 🎯
// 1️⃣ Object Creation 🏗️: Easily create multiple instances of products with different properties.
// 2️⃣ Inheritance 🌳: Create subclasses like `Clothing` or `Electronics` that inherit from a base class.
// 3️⃣ Encapsulation 🔒: Protect internal state of objects by using private properties and public methods.
// 4️⃣ Static Methods ⚙️: Provide utility functions that belong to the class rather than to instances, like calculating total inventory.
// 5️⃣ Method Overriding 🔄: Allow subclasses to customize or extend methods from the parent class for specific behavior.
// 6️⃣ Polymorphism 🎭: Enable objects of different classes to be treated as instances of the same class through a common interface.
// 7️⃣ Abstract Classes 🚫: Define a class that provides a base for other classes, ensuring that certain methods must be implemented.
// 8️⃣ Composition 🧩: Use multiple classes together to create more complex data structures, improving code modularity.
// 9️⃣ Factory Pattern 🏭: Implement a design pattern to create objects without specifying the exact class, enhancing flexibility.
// 🔟 Data Models 📊: Use classes to represent real-world entities in applications, making code easier to understand and maintain.
