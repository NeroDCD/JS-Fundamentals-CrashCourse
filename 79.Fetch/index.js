// 79. How to FETCH data from an API using JavaScript

// 🌐 Fetch = A function used for making HTTP requests to retrieve resources.
// 📄 It can fetch various types of data, such as JSON, images, and files.
// 🚀 Fetch simplifies asynchronous data fetching in JavaScript,
// 🔗 allowing interaction with APIs to retrieve and send data asynchronously over the web.
// 📝 Syntax: fetch(url, {options})

// // 1️⃣ Example 1: (Fetching Pokémon Data)
// // 🔍 An API request is made to retrieve data about Pikachu from the Pokémon API.
// // 📦 The response is checked for success, and if successful, the JSON data is processed.
// // 🐾 The name of the Pokémon is logged to the console.

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource"); // ❌ Throws an error if the response is not OK
//     }
//     return response.json(); // 📥 Converts the response to JSON
//   })
//   .then((data) => console.log(data.name)) // 📜 Logs the name of the Pokémon
//   .catch((error) => console.error(error)); // 🛑 Logs any errors that occur during the fetch

// 2️⃣ Example 2: (Fetching Pokémon Sprite by User Input)
// 📥 A function allows users to input a Pokémon name and fetch its sprite.
// 📍 The function retrieves the value, makes an API request, and displays the Pokémon's image.
// ⚠️ If an error occurs (like a non-existent Pokémon), it logs the error to the console.

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase(); // 🔍 Gets the Pokémon name from the input field

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}` // 🌐 Fetches data based on user input
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource"); // ❌ Throws an error if the response is not OK
    }
    const data = await response.json(); // 📥 Converts the response to JSON
    const pokemonSprite = data.sprites.front_default; // 🌟 Gets the default front sprite of the Pokémon
    const imgElement = document.getElementById("pokemonSprite"); // 🔍 Selects the image element

    imgElement.src = pokemonSprite; // 📸 Updates the image source to display the Pokémon sprite
    imgElement.style.display = "block"; // 📈 Makes the image visible
  } catch (error) {
    console.error(error); // 🛑 Logs any errors that occur during the fetch
  }
}

fetchData(); // 🏁 Calls the fetchData function to execute the API request

// 🧠 Simple Analogy 🧠
// 📫 The fetch function can be compared to sending a letter to a friend.
// ✉️ A letter (request) is written and sent (fetch call).
// 📬 When the friend receives it (the server), the friend reads the letter and sends back a letter (response) with the requested information.
// 📝 If something goes wrong (like the friend not being home), an error is received instead!

// 🎯 Possible Use Cases for Fetching Data from APIs:
// 1️⃣ Dynamic Content Loading 📦: Fetch and display user-generated content in real-time.
// 2️⃣ Live Data Updates 📊: Retrieve stock prices or weather data to show live updates.
// 3️⃣ Social Media Feeds 📱: Fetch and display posts or comments from social media platforms.
// 4️⃣ User Authentication 🔐: Validate login credentials by sending them to an authentication API.
// 5️⃣ Product Listings 🛒: Dynamically load product data for e-commerce websites.
// 6️⃣ Game Data Retrieval 🎮: Fetch game stats or player information from gaming APIs.
// 7️⃣ News Aggregation 📰: Retrieve and display news articles from various sources.
// 8️⃣ Location Services 📍: Fetch geographical data based on user location.
// 9️⃣ Form Submissions 📩: Send user input data to servers for processing or storage.
// 🔟 Image Loading 🖼️: Retrieve images from an API for display in a gallery or slideshow.
