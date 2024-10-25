// 80. Build a JavaScript WEATHER APP

// 🌦️ Sample Project: Learn and practice how to fetch data from an API and display it.
// 🔗 This project uses OpenWeather's API for accessing weather data.
// 📄 API Documentation:
// - General Info: https://openweathermap.org/
// - Current Weather: https://openweathermap.org/current
// - Additional Weather Data: https://openweathermap.org/weather-co...

// 1️⃣ Example 1 (Title Here)
// Explain this, add emoji also

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "6c5da548c9f7a380af45a39648d59c17";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {}

function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also
// [emoji here]: description

// 🎯 Possible Use Cases:
//10 Use Cases, add emoji also
// 1️⃣ Use cases 1 [emoji here]: description
