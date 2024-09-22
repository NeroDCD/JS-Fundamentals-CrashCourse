// 46. JavaScript DESTRUCTURING

// 🛠️ Destructuring = A convenient way to extract values from arrays and objects, and then assign them to variables.
// It allows for breaking down complex data structures into simpler parts, making your code more readable and efficient.

// 📦 [] = Used for "Array Destructuring".
// This allows you to pick specific values from an array and assign them to variables in one line.
// Example: let [a, b] = [1, 2]; // Assigns 1 to 'a' and 2 to 'b'.

// 📄 {} = Used for "Object Destructuring".
// This allows you to extract values from objects by matching the property names with the variables you're assigning them to.
// Example: let { name, age } = { name: "Alice", age: 25 }; // Extracts 'name' and 'age' from the object and assigns them to variables.

// 📦 Array Destructuring

// 1️⃣ Example 1 (Swap the value of two variables)

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 🖨️ 2
// console.log(b); // 🖨️ 1

// 🔄 Here, the values of 'a' and 'b' are swapped using array destructuring.

// 2️⃣ Example 2 (Swap two elements in an array)

// const colors = ["🔴 Red", "🟠 Orange", "🟡 Yellow", "🔵 Blue", "🟣 Purple"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);
// 🖨️ ["🟣 Purple", "🟠 Orange", "🟡 Yellow", "🔵 Blue", "🔴 Red"]

// 🔄 The first and last elements of the 'colors' array are swapped.

// 3️⃣ Example 3 (Assign array elements to variables)

// const colors = ["🔴 Red", "🟠 Orange", "🟡 Yellow", "🔵 Blue", "🟣 Purple"];

// const [FirstColor, SecondColor, ThirdColor, ...ExtraColors] = colors;

// console.log(FirstColor);   // 🖨️ "🔴 Red"
// console.log(SecondColor);  // 🖨️ "🟠 Orange"
// console.log(ThirdColor);   // 🖨️ "🟡 Yellow"
// console.log(ExtraColors);  // 🖨️ ["🔵 Blue", "🟣 Purple"]

// 🔄 Destructuring the array into individual variables for the first three colors and grouping the rest in 'ExtraColors'.

// 📄 Object Destructuring

// 4️⃣ Example 4 (Extract values from objects)

// const person1 = {
//   FirstName: "Peter",
//   LastName: "Parker",
//   Age: 27,
//   Job: "Web Developer"
// };

// const person2 = {
//   FirstName: "Miles",
//   LastName: "Morales",
//   Age: 24
// };

// const { FirstName, LastName, Age, Job ="Unemployed" } = person1;
// console.log(FirstName);  // 🖨️ "Peter"
// console.log(LastName);   // 🖨️ "Parker"
// console.log(Age);        // 🖨️ 27
// console.log(Job);        // 🖨️ "Web Developer"

// const { FirstName, LastName, Age, Job="Unemployed" } = person2;
// console.log(FirstName);  // 🖨️ "Miles"
// console.log(LastName);   // 🖨️ "Morales"
// console.log(Age);        // 🖨️ 24
// console.log(Job);        // 🖨️ "Unemployed"

// 🔄 Destructuring object properties from 'person1' and 'person2'. If 'Job' is missing, it defaults to "Unemployed".

// 5️⃣ Example 5 (Destructure in function parameters)

function DisplayPerson({ FirstName, LastName, Age, Job = "Unemployed" }) {
  console.log(`Name: ${FirstName} ${LastName}`); // 🖨️ Full name
  console.log(`Age: ${Age}`); // 🖨️ Age
  console.log(`Job: ${Job}`); // 🖨️ Job
}

const Person1 = {
  FirstName: "Peter",
  LastName: "Parker",
  Age: 27,
  Job: "Web Developer"
};

const Person2 = {
  FirstName: "Miles",
  LastName: "Morales",
  Age: 24
};

DisplayPerson(Person1); // 🖨️ "Name: Peter Parker", "Age: 27", "Job: Web Developer"
DisplayPerson(Person2); // 🖨️ "Name: Miles Morales", "Age: 24", "Job: Unemployed"

// 🛠️ The function destructures its parameter, making it easy to access 'FirstName', 'LastName', 'Age', and 'Job'.

// 🧠 Simple Analogy 🧠
// Destructuring is like unpacking a suitcase. Instead of rummaging through the entire suitcase (array/object),
// you pull out specific items (values) and place them neatly where you need them (variables).

// 🎯 Possible Use Cases:
// 1️⃣ API Responses 🌐: Extract specific data from API response objects, like user details or product information.
// 2️⃣ Function Parameters 🛠️: Simplify function signatures by destructuring objects directly in the parameter list for readability and convenience.
// 3️⃣ Configuration Settings ⚙️: Extract specific configuration options from a settings object, making it easy to access the necessary options without the whole object.
// 4️⃣ Swapping Variables 🔄: Swap the values of two variables using array destructuring in one line.
// 5️⃣ Array Manipulation 🧩: Easily extract the first few elements of an array (e.g., first name, last name) and group the rest into a new array.
// 6️⃣ Default Values 📦: Use destructuring to provide default values when properties are missing in an object or undefined.
// 7️⃣ Complex Object Handling 🛢️: Extract nested properties from deep within objects (e.g., data from complex API responses or database records).
// 8️⃣ Importing Modules 📚: Destructure objects returned from modules to only import the necessary functions or constants, keeping your code clean.
// 9️⃣ State Management 🎛️: Extract and manage state variables in frameworks like React, where destructuring can make your code more readable and concise.
// 🔟 Event Handling 🎯: Destructure event objects in event handler functions to quickly access event properties like `target`, `type`, etc.
