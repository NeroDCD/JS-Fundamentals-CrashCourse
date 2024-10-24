// 78. Learn how JavaScript COOKIES work!

// 🍪 Cookie = A small text file stored on the user's computer.
// 📝 It is used to remember information about the user, such as preferences or login status.
// 🔗 Cookies are saved in name=value pairs and can be accessed by the web application.

// // 1️⃣ Example 1 (Title Here)
// // Explain this, add emoji also

// // console.log(navigator.cookieEnabled);

// document.cookie =
//   "firstName=Near; expires=Sun, 1 January 2042 12:00:00 UTC; path=/";
// document.cookie =
//   "lastName=Nero; expires=Sun, 1 January 2042 12:00:00 UTC; path=/";

// console.log(document.cookie);

// // 1️⃣ Example 2 (Title Here)
// // Explain this, add emoji also

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
  setCookie(name, "", -1); // Set an expired date to delete the cookie
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split("; ");
  let result = null;

  cookieArray.forEach((cookie) => {
    if (cookie.indexOf(name + "=") === 0) {
      result = cookie.substring(name.length + 1);
    }
  });

  return result;
}

// Deleting cookies
// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");

// Setting cookies
setCookie("firstName", "Nero", 365);
setCookie("lastName", "Near", 365);

// Retrieving cookies
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));

// 🧠 Simple Analogy 🧠
//Explain this, add emoji also

// 🎯 Possible Use Cases:
//10 Use Cases
