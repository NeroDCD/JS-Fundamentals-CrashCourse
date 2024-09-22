// 47. Learn JavaScript NESTED OBJECTS

// 🥚 Nested Objects = Objects inside of other Objects.
// They allow you to represent more complex data structures, where a child object is enclosed by a parent object.

// 🏗️ How Nested Objects Work:
// - Parent-Child Relationship: A parent object contains one or
//   more child objects. Each child can have its own properties and methods.

// - Organizing Data: This structure is useful for grouping related
//   data together. For example, a `School` object can contain
//   `Student` objects, where each `Student` has properties like
//   `name`, `age`, and `grades`.

// 1️⃣ Example 1: (Using a Simple Nested Object)
// This example demonstrates how to create a basic nested object (person)
// that contains various properties, including another object (Address).

// const person = {
//   FullName: "John Doe", // 👤 Full name of the person
//   Age: 25, // 🎂 Age of the person
//   isStudent: true, // 🎓 Indicates if the person is a student
//   Hobbies: ["Reading", "Traveling", "Cooking"], // 📚 List of hobbies as an array
//   Address: {
//     // 🏠 Nested object representing the address
//     Street: "123 Coast St.", // 📍 Street address
//     City: "Springfield", // 🏙️ City name
//     Country: "USA" // 🌎 Country name
//   }
// };

// // Accessing properties of the person object
// console.log(person.FullName); // 🖨️ "John Doe"
// console.log(person.Age); // 🖨️ 25
// console.log(person.isStudent); // 🖨️ true
// console.log(person.Hobbies[2]); // 🖨️ "Cooking"

// // 🔄 Looping through properties of the Address object
// for (const property in person.Address) {
//   console.log(person.Address[property]); // 🖨️ Each address property (Street, City, Country)
// }

// 2️⃣ Example 2 (Using Classes to Create Nested Objects)
// This example introduces classes (Person and Address) to create objects in a more structured way.
// It illustrates how to instantiate Person objects that automatically
// include an Address object, allowing for cleaner code organization

// Class to create a person with a nested address object
class Person {
  constructor(Name, Age, ...address) {
    this.Name = Name; // 👤 Sets the name of the person
    this.Age = Age; // 🎂 Sets the age of the person
    this.Address = new Address(...address); // 🏠 Creates a new Address object using the provided address parameters.
    // The '...address' syntax collects any additional arguments into an array,
    // allowing for flexibility in the number of address components (like street, city, and country).
    // The spread operator '...' then spreads these components into separate
    // arguments when creating the Address object.
  }
}

// Class to represent an address
class Address {
  constructor(Street, City, Country) {
    this.Street = Street; // 📍 Sets the street address
    this.City = City; // 🏙️ Sets the city name
    this.Country = Country; // 🌎 Sets the country name
  }
}

// Creating instances of Person with nested Address
const Person1 = new Person(
  "John Doe", // 👤 Name
  25, // 🎂 Age
  "123 Coast St.", // 📍 Street
  "Springfield", // 🏙️ City
  "USA" // 🌎 Country
);

const Person2 = new Person(
  "Jane Smith", // 👤 Name
  22, // 🎂 Age
  "456 Maple Ave.", // 📍 Street
  "Metropolis", // 🏙️ City
  "Canada" // 🌎 Country
);

const Person3 = new Person(
  "Alice Johnson", // 👤 Name
  30, // 🎂 Age
  "789 Oak Dr", // 📍 Street
  "Gotham", // 🏙️ City
  "UK" // 🌎 Country
);

// Person 1
console.log(Person1.Name); // 🖨️ "John Doe"
console.log(Person1.Age); // 🖨️ 25
console.log(Person1.Address.Street); // 🖨️ "123 Coast St."

// Person 2
console.log(Person2.Name); // 🖨️ "Jane Smith"
console.log(Person2.Age); // 🖨️ 22
console.log(Person2.Address.Street); // 🖨️ "456 Maple Ave."

// Person 3
console.log(Person3.Name); // 🖨️ "Alice Johnson"
console.log(Person3.Age); // 🖨️ 30
console.log(Person3.Address.Street); // 🖨️ "789 Oak Dr."

// 🧠 Simple Analogy 🧠
// Nested objects are like a family tree. The parent object represents the family,
// while the child objects represent individual family members with their own attributes and details.

// 🎯 Possible Use Cases:
// 1️⃣ User Profiles 👤: Store detailed user information, including address, preferences, and contact details.
// 2️⃣ Product Catalog 📦: Represent products with nested objects for specifications, reviews, and pricing information.
// 3️⃣ Configuration Settings ⚙️: Extract specific configuration options from a settings object, making it easy to access
// the necessary options without the whole object.
// 4️⃣ Data Models 📊: Structure data models in applications, such as a blog with nested objects for posts, comments, and authors.
// 5️⃣ Geographic Data 🌍: Organize location-based data with nested objects representing regions, cities, and landmarks.
// 6️⃣ API Responses 🌐: Handle structured responses from APIs where data is nested within various levels of objects.
// 7️⃣ Game Objects 🎮: Represent entities in games (like players, items, or levels) with complex properties and relationships.
// 8️⃣ Event Handling 🎉: Store event data with nested objects for details about the event, participants, and location.
// 9️⃣ Social Media 🌐: Manage posts with nested comments, likes, and user interactions.
// 🔟 Project Management 📋: Organize project data with nested tasks, subtasks, and associated team members.
