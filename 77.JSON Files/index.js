// 77. Learn JSON Files

// 📄 JSON = JavaScript Object Notation, a data-interchange format.
// 🌐 Commonly used for exchanging data between a server and a web application.
// 🗃️ JSON files can be structured as {key: value} pairs or as arrays [value1, value2, value3].

// 🔄 JSON.stringify() = A method that converts a JavaScript object into a JSON string.
// 🔄 JSON.parse() = A method that converts a JSON string back into a JavaScript object.

// // 1️⃣ Example 1: (Stringifying JavaScript Objects)
// // 📄 Convert JavaScript objects and arrays into JSON strings.
// // 🌟 JSON.stringify() is used to convert arrays and objects for data transmission or storage.

// const names = ["Beau", "Momoi", "Ceana", "M.K.R", "Maggie", "Phantom"];
// const person = {
//   name: "Maggie",
//   rank: 240,
//   isUnlocked: true,
//   skills: ["Jet-Boost", "Tactical Roll", "Aero-Zoom"]
// };
// const people = [
//   { name: "Maggie", rank: 240, isUnlocked: true },
//   { name: "Phantom", rank: 100, isUnlocked: true },
//   { name: "Beau", rank: 250, isUnlocked: true }
// ];

// // 📄 Convert names to JSON string
// const jsonStringNames = JSON.stringify(names);
// console.log(jsonStringNames); // 📜 Logs the JSON string representation of names

// // 🧑‍🤝‍🧑 Convert person data to JSON string
// const jsonStringPerson = JSON.stringify(person);
// console.log(jsonStringPerson); // 📜 Logs the JSON string representation of the person

// // 👥 Convert people data to JSON string
// const jsonStringPeople = JSON.stringify(people);
// console.log(jsonStringPeople); // 📜 Logs the JSON string representation of people

// // 2️⃣ Example 2: (Parsing JSON Strings)
// // 🔍 Convert JSON strings back into JavaScript objects and arrays.
// // 🔍 JSON.parse() retrieves usable data from JSON strings.

// const jsonNames = `["Beau", "Momoi", "Ceana", "M.K.R", "Maggie", "Phantom"]`;
// const jsonPerson = `{
//   "name": "Maggie",
//   "rank": 240,
//   "isUnlocked": true,
//   "skills": ["Jet-Boost", "Tactical Roll", "Aero-Zoom"]
// }`;
// const jsonPeople = `[
//   { "name": "Maggie", "rank": 240, "isUnlocked": true },
//   { "name": "Phantom", "rank": 100, "isUnlocked": true },
//   { "name": "Beau", "rank": 250, "isUnlocked": true }
// ]`;

// // 📖 Parse names
// const parsedNames = JSON.parse(jsonNames);
// console.log(parsedNames); // 📜 Logs the parsed array of names

// // 🧑‍🤝‍🧑 Parse person data
// const parsedPerson = JSON.parse(jsonPerson);
// console.log(parsedPerson); // 📜 Logs the parsed object representing a person

// // 👥 Parse people data
// const parsedPeople = JSON.parse(jsonPeople);
// console.log(parsedPeople); // 📜 Logs the parsed array of people

// 3️⃣ Example 3: Fetching JSON Data from Files
// 🔄 Retrieve JSON data from external files using fetch API.
// 🌍 Use fetch to get data from a server or local JSON files.

// // 📥 Fetch names
// fetch("names.json")
//   .then((response) => response.json()) // 🔄 Parse the JSON response
//   .then((value) => console.log(value)); // 📜 Log the parsed names

// // 🧑‍🤝‍🧑 Fetch person data
// fetch("person.json")
//   .then((response) => response.json()) // 🔄 Parse the JSON response
//   .then((value) => console.log(value)); // 📜 Log the parsed person data

// 👥 Fetch people data
fetch("people.json")
  .then((response) => response.json()) // 🔄 Parse the JSON response
  .then((values) => values.forEach((value) => console.log(value.name))) // 📜 Log each name from the parsed data
  .catch((error) => console.error(error)); // ⚠️ Handle any errors during the fetch process

// 🧠 Simple Analogy 🧠
// 📚 Think of JSON like a beautifully organized library.
// 📦 Each book (data) is labeled with a title (key) and filled with stories (values),
// 📖 making it easy to find and share information with others.

// 🎯 Possible Use Cases for JSON:
// 1️⃣ API Responses 🌐: JSON is the standard format for APIs to send and receive data.
// 2️⃣ Configuration Files ⚙️: Store settings or configurations for applications in a structured format.
// 3️⃣ Data Storage 💾: Save data in a readable format for local storage in web applications.
// 4️⃣ User Profiles 🧑: Exchange user information, preferences, or settings between systems.
// 5️⃣ Content Management 📚: Manage dynamic content in applications, enabling easy updates and modifications.
// 6️⃣ Logging Data 📜: Store application logs in a structured format for better analysis and reporting.
// 7️⃣ Mobile Applications 📱: Utilize JSON for data transfer between mobile apps and servers.
// 8️⃣ Game States 🎮: Save and load game states or settings in a standardized format.
// 9️⃣ E-commerce 🛒: Share product details, inventory, and user transactions between frontend and backend systems.
// 🔟 IoT Devices 🌐: Communicate data between IoT devices and servers using lightweight JSON format.
