// 45. JavaScript GETTERS & SETTERS

// ✊ getter = special method that makes a property readable
// ✍️ setter = special method that makes a property writable
// validate and modify a value when reading/writing a property

// 🔍 How it Works:
// Getters and setters allow you to control access to an object's properties.
// They enable you to define how properties are accessed (get) and modified (set),
// allowing for validation, logging, or computed properties.

// 1️⃣ Example 1: 📏This class models a rectangle with width and height.
// Getters are used to return formatted dimensions and area,
// while setters ensure that only valid, positive values can be assigned.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width; // 🏷️ Sets width
//     this.height = height; // 🏷️ Sets height
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth; // 🔄 Sets _width if valid
//     } else {
//       console.error(`width must be a positive number`); // ❌ Error message for invalid width
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight; // 🔄 Sets _height if valid
//     } else {
//       console.error(`height must be a positive number`); // ❌ Error message for invalid height
//     }
//   }

//   get width() {
//     return `${this._width.toFixed(1)}cm`; // 📏 Returns formatted width
//   }

//   get height() {
//     return `${this._height.toFixed(1)}cm`; // 📏 Returns formatted height
//   }

//   get area() {
//     return `${(this._width * this._height).toFixed(1)}cm²`; // 📐 Returns area
//   }
// }

// const rectangle = new Rectangle(3, 4);

// // Checking the rectangle's properties
// console.log(rectangle.width); // 🏷️ Displays formatted width
// // Output: 3.0cm

// console.log(rectangle.height); // 🏷️ Displays formatted height
// // Output: 4.0cm

// console.log(rectangle.area); // 🏷️ Displays area
// // Output: 12.0cm²

// 2️⃣ Example 2: 🗣️ This class represents a person with first name, last name, and age.
// Getters retrieve these values, while setters validate the inputs to ensure
// that they are appropriate before assigning them.

class Person {
  constructor(FirstName, LastName, age) {
    this.FirstName = FirstName; // 🏷️ Sets first name
    this.LastName = LastName; // 🏷️ Sets last name
    this.age = age; // 🏷️ Sets age
  }

  set FirstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._FirstName = newFirstName; // 🔄 Sets _FirstName if valid
    } else {
      console.error("First Name must be a non-empty string"); // ❌ Error message for invalid first name
    }
  }

  set LastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._LastName = newLastName; // 🔄 Sets _LastName if valid
    } else {
      console.error("Last Name must be a non-empty string"); // ❌ Error message for invalid last name
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge; // 🔄 Sets _age if valid
    } else {
      console.error("Age must be a non-negative number"); // ❌ Error message for invalid age
    }
  }

  get FirstName() {
    return this._FirstName; // 🏷️ Returns first name
  }

  get LastName() {
    return this._LastName; // 🏷️ Returns last name
  }

  get FullName() {
    return this._FirstName + " " + this._LastName; // 📛 Returns full name
  }

  get age() {
    return this._age; // 🏷️ Returns age
  }
}

const person = new Person("Nero", "DCD", 27);

// Checking the person's properties
console.log(person.FirstName); // 🏷️ Displays first name
// Output: Nero

console.log(person.LastName); // 🏷️ Displays last name
// Output: DCD

console.log(person.FullName); // 🏷️ Displays full name
// Output: Nero DCD

console.log(person.age); // 🏷️ Displays age
// Output: 27

// 🧠 Simple Analogy 🧠
// 🏷️ Getters and setters are like gates to your property.
// They control who can enter (read) or change (write) your valuables
// while ensuring the rules are followed.

// 🎯 Possible Use Cases: 🎯
// 1️⃣ Validation Checks ✅: Ensure data integrity by validating values before setting them.
// 2️⃣ Computed Properties 📊: Calculate values dynamically when accessed, like area from width and height.
// 3️⃣ Encapsulation 🔒: Hide internal state and expose only what's necessary through controlled access.
// 4️⃣ Reactive Programming 🔄: Trigger additional behavior (e.g., UI updates) when a property is set.
// 5️⃣ Property Transformation 🔄: Modify values before storing or retrieving them (e.g., formatting strings).
// 6️⃣ Logging Changes 📜: Keep track of changes made to properties for debugging or auditing purposes.
// 7️⃣ Compatibility with Frameworks 🔗: Work seamlessly with frameworks that rely on getters and setters for data binding.
// 8️⃣ Simplified API Design 🛠️: Provide a cleaner and more intuitive interface for object manipulation.
// 9️⃣ Preventing Invalid States 🚫: Avoid putting the object into an invalid state through strict validations.
// 🔟 Supporting Legacy Code ♻️: Allow new functionalities to be added without breaking existing interfaces.
