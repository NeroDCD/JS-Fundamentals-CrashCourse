// 78. Learn how JavaScript COOKIES work!

// 🍪 Cookie = A small text file stored on the user's computer.
// 📝 It is used to remember information about the user, such as preferences or login status.
// 🔗 Cookies are saved in name=value pairs and can be accessed by the web application.

// // 1️⃣ Example 1: (Checking Cookie Support)
// // 🔍 Checks if cookies are enabled in the user's browser.
// // ✅ If cookies are enabled, `navigator.cookieEnabled` returns true; otherwise, it returns false.

// console.log(navigator.cookieEnabled); // 📜 Logs whether cookies are enabled or not

// // 📝 Setting Cookies
// document.cookie =
//   "firstName=Near; expires=Sun, 1 January 2042 12:00:00 UTC; path=/"; // 🍪 Sets the first name cookie
// document.cookie =
//   "lastName=Nero; expires=Sun, 1 January 2042 12:00:00 UTC; path=/"; // 🍪 Sets the last name cookie

// console.log(document.cookie); // 📜 Logs all cookies as a string

// 2️⃣ Example 2: (Working with Cookies in Input Fields)
// 🖊️ Save user input as cookies and retrieve them.
// 📥 When the user submits their name, the values are stored in cookies.
// 📤 Clicking the cookie button retrieves the values from cookies and populates the input fields.

const firstText = document.querySelector("#firstText"); // 🔍 Selects the input for first name
const lastText = document.querySelector("#lastText"); // 🔍 Selects the input for last name
const submitBtn = document.querySelector("#submitBtn"); // 🔍 Selects the submit button
const cookieBtn = document.querySelector("#cookieBtn"); // 🔍 Selects the button to retrieve cookies

submitBtn.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365); // 🌟 Sets the first name cookie for 365 days
  setCookie("lastName", lastText.value, 365); // 🌟 Sets the last name cookie for 365 days
});

cookieBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName"); // 📥 Retrieves first name from cookies
  lastText.value = getCookie("lastName"); // 📥 Retrieves last name from cookies
});

// Function to set a cookie with a specified name, value, and expiration in days
function setCookie(name, value, daysToLive) {
  const date = new Date(); // 🗓️ Creates a new date object
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000); // ⏳ Calculates expiration time
  const expires = "expires=" + date.toUTCString(); // 📅 Formats expiration date
  document.cookie = `${name}=${value}; ${expires}; path=/`; // 🍪 Sets the cookie
}

// Function to delete a cookie by setting its expiration date to the past
function deleteCookie(name) {
  setCookie(name, "", -1); // 🔄 Sets an expired date to delete the cookie
}

// Function to retrieve a cookie value by its name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie); // 🔓 Decodes cookie string
  const cookieArray = decodedCookie.split("; "); // 🔗 Splits the string into individual cookies
  let result = null; // 🔍 Initializes result variable

  cookieArray.forEach((cookie) => {
    if (cookie.indexOf(name + "=") === 0) {
      // 🔍 Checks if the cookie name matches
      result = cookie.substring(name.length + 1); // 📥 Retrieves the cookie value
    }
  });

  return result; // 📤 Returns the cookie value or null if not found
}

// // 🍪 Example usage of deleting cookies
// deleteCookie("firstName"); // 🗑️ Deletes the first name cookie
// deleteCookie("lastName"); // 🗑️ Deletes the last name cookie
// deleteCookie("email"); // 🗑️ Deletes the email cookie

// // 🍪 Example usage of setting cookies
// setCookie("firstName", "Nero", 365); // 🍪 Sets first name cookie
// setCookie("lastName", "Near", 365); // 🍪 Sets last name cookie

// // 🍪 Example usage of retrieving cookies
// console.log(getCookie("firstName")); // 📜 Logs the value of the first name cookie
// console.log(getCookie("lastName")); // 📜 Logs the value of the last name cookie

// 🧠 Simple Analogy 🧠
// 🏠 Think of cookies as small notes left in a mailbox.
// 📜 Each note contains information (name=value) about the user,
// 💌 allowing the application to remember preferences and settings between visits.

// 🎯 Possible Use Cases for Cookies:
// 1️⃣ User Preferences 🎨: Store user-selected themes or language settings.
// 2️⃣ Login Sessions 🔑: Remember user login status across sessions.
// 3️⃣ Shopping Cart 🛒: Preserve items in a shopping cart while browsing.
// 4️⃣ Analytics 📊: Track user behavior and site usage statistics.
// 5️⃣ A/B Testing ⚖️: Store test variants for user segmentation.
// 6️⃣ Ad Personalization 🎯: Remember user interests for targeted advertising.
// 7️⃣ Form Data 📝: Retain user input in forms for convenience.
// 8️⃣ Consent Management ⚖️: Store user consent for data processing.
// 9️⃣ Game States 🎮: Save progress in web-based games between sessions.
// 🔟 Multi-Device Syncing 🌐: Sync settings and preferences across devices.
