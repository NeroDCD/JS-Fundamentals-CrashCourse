// 79. How to FETCH data from an API using JavaScript

// 🌐 Fetch = A function used for making HTTP requests to retrieve resources.
// 📄 It can fetch various types of data, such as JSON, images, and files.
// 🚀 Fetch simplifies asynchronous data fetching in JavaScript,
// 🔗 allowing interaction with APIs to retrieve and send data asynchronously over the web.
// 📝 Syntax: fetch(url, {options})

// // 1️⃣ Example 1 (Title Here)
// // Explain this, add emoji also

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

// // Example 2 (Title Here)
// // Explain this, add emoji also
async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/rayquaza");
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also

// 🎯 Possible Use Cases:
//10 Use Cases
