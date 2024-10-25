// 80. Build a JavaScript WEATHER APP

// 🌦️ Sample Project: Learn and practice how to fetch data from an API and display it.
// 🔗 This project uses OpenWeather's API for accessing weather data.
// 📄 API Documentation:
// - General Info: https://openweathermap.org/
// - Current Weather: https://openweathermap.org/current
// - Additional Weather Data: https://openweathermap.org/weather-conditions

// 1️⃣ Fetching Weather Data
// 📅 A form is created for users to input a city name and get the current weather.
// 🎯 On form submission, the input value is taken, and an API call is made to fetch weather data.
// 🚨 If successful, the weather information is displayed; if not, an error message is shown.

const weatherForm = document.querySelector(".weatherForm"); // 🔍 Selects the form element for user input
const cityInput = document.querySelector(".cityInput"); // 🔍 Selects the input field for city name
const card = document.querySelector(".card"); // 🔍 Selects the card element to display weather information
const apiKey = "****"; // 🔑 Stores the API key for OpenWeather

// Adds an event listener to the form that triggers when submitted
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // 🛑 Prevents the default form submission behavior
  const city = cityInput.value; // 🔍 Retrieves the city name from the input field

  if (city) {
    try {
      const weatherData = await getWeatherData(city); // 🌐 Fetches weather data based on city input
      displayWeatherInfo(weatherData); // 🌟 Displays the retrieved weather information
    } catch (error) {
      console.error(error); // 📜 Logs the error for debugging
      displayError(error); // ❌ Displays the error message to the user
    }
  } else {
    displayError("Please enter a city"); // ⚠️ Prompts the user to enter a city name
  }
});

// Asynchronously fetches weather data from the OpenWeather API
async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // 📦 Constructs the API URL with the city name and API key
  const response = await fetch(apiUrl); // 🌍 Fetches data from the API
  if (!response.ok) {
    throw new Error("Could not fetch weather data"); // ❌ Throws an error if the response is not OK
  }
  return await response.json(); // 📥 Returns the response data as JSON
}

// Displays the weather information on the webpage
function displayWeatherInfo(data) {
  const {
    name: city, // 🏙️ Extracts the city name
    main: { temp, humidity }, // 🌡️ Extracts temperature and humidity from the main object
    weather: [{ description, id }] // 📜 Extracts weather description and ID from the weather array
  } = data;

  card.textContent = ""; // 🗑️ Clears previous weather information
  card.style.display = "flex"; // 📈 Sets the display style of the card

  // 📋 Creates elements to display weather information
  const cityDisplay = document.createElement("h1"); // 🏙️ Creates an element for the city name
  const tempDisplay = document.createElement("p"); // 🌡️ Creates an element for temperature
  const humidityDisplay = document.createElement("p"); // 💧 Creates an element for humidity
  const descDisplay = document.createElement("p"); // 📜 Creates an element for weather description
  const weatherEmoji = document.createElement("p"); // 🌧️ Creates an element for weather emoji

  cityDisplay.textContent = city; // 🏙️ Displays the city name
  tempDisplay.textContent = `${(((temp - 273.15) * 9) / 5 + 32).toFixed(1)}°F`; // 🌡️ Converts temperature from Kelvin to Fahrenheit and displays it
  humidityDisplay.textContent = `Humidity: ${humidity}%`; // 💧 Displays humidity
  descDisplay.textContent = description; // 📜 Displays weather description
  weatherEmoji.textContent = getWeatherEmoji(id); // 🌧️ Gets the corresponding weather emoji based on weather ID

  // 🌟 Adds classes for styling
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  // 🏗️ Appends elements to the card
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

// Returns an emoji based on the weather ID
function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️"; // ⚡ Thunderstorm emoji
    case weatherId >= 300 && weatherId < 400:
      return "🌦️"; // 🌦️ Drizzle emoji
    case weatherId >= 500 && weatherId < 600:
      return "🌧️"; // 🌧️ Rain emoji
    case weatherId >= 600 && weatherId < 700:
      return "❄️"; // ❄️ Snow emoji
    case weatherId >= 700 && weatherId < 800:
      return "🌫️"; // 🌫️ Mist emoji
    case weatherId === 800:
      return "☀️"; // ☀️ Clear sky emoji
    case weatherId >= 801 && weatherId < 810:
      return "☁️"; // ☁️ Few clouds emoji
    default:
      return "❓"; // ❓ Unknown weather emoji
  }
}

// Displays an error message when something goes wrong
function displayError(message) {
  const errorDisplay = document.createElement("p"); // 📝 Creates an element for the error message
  errorDisplay.textContent = message; // 📜 Displays the error message
  errorDisplay.classList.add("errorDisplay"); // 🏷️ Adds a class for styling
  card.textContent = ""; // 🗑️ Clears previous content
  card.style.display = "flex"; // 📈 Sets the display style of the card
  card.appendChild(errorDisplay); // 🏗️ Appends the error message to the card
}

// 🧠 Simple Analogy 🧠
// 🌧️ The process of fetching weather data can be likened to asking a librarian for a book.
// 📚 A request is made to the librarian (API) for a specific book (weather information).
// 📖 The librarian checks the shelves (database) and retrieves the book (data) if available.
// 🏷️ If the book is not found, the librarian provides a message indicating the book is unavailable (error).

// 🎯 Possible Use Cases for a Weather App:
// 1️⃣ Real-time Weather Updates ☀️: Display current weather conditions for any location.
// 2️⃣ Weather Forecasting 📅: Provide users with a forecast for upcoming days or weeks.
// 3️⃣ Weather Alerts 🌧️: Notify users about severe weather conditions or warnings.
// 4️⃣ Travel Planning ✈️: Help travelers check weather conditions for their destinations.
// 5️⃣ Gardening Assistance 🌱: Provide local weather data to help gardeners decide the best planting times.
// 6️⃣ Event Planning 🎉: Allow users to plan outdoor events based on expected weather conditions.
// 7️⃣ Fitness Activities 🏋️: Help fitness enthusiasts schedule outdoor activities based on the weather.
// 8️⃣ Agriculture 📈: Assist farmers in making informed decisions based on current weather data.
// 9️⃣ Sports Events ⚽: Update teams and players on weather conditions affecting outdoor sports.
// 🔟 Local Business Insights 🏪: Aid local businesses in adapting to weather changes (e.g., ice cream shops promoting hot days).
