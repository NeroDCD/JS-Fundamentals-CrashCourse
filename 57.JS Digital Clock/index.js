// 57. Build this JS Digital Clock

// ⏰ A digital clock is a real-time display of the current time, which updates every second.
// In this JavaScript project, we use `setInterval()` to refresh the clock every second,
// and the `Date()` object to retrieve the current hour, minute, and second from the system time.

// 1️⃣ Function updateClock()
// 🕰️ This function gets the current time, formats it in a 12-hour clock with AM/PM notation, and updates the display on the webpage.

function updateClock() {
  const now = new Date(); // ⌚ Gets the current date and time from the system
  let hours = now.getHours(); // 🕒 Extracts the hour from the current time
  const meridiem = hours >= 12 ? "PM" : "AM"; // 🌅 Determines if it's AM or PM
  hours = hours % 12 || 12; // 🌓 Converts 24-hour format to 12-hour format (using '|| 12' to handle midnight)
  hours = hours.toString().padStart(2, 0); // 🕑 Ensures the hour is always two digits (e.g., 01, 02, etc.)
  const minutes = now.getMinutes().toString().padStart(2, 0); // ⏳ Formats minutes as two digits
  const seconds = now.getSeconds().toString().padStart(2, 0); // ⌛ Formats seconds as two digits
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`; // 🕰️ Builds the time string in HH:MM:SS AM/PM format
  document.getElementById("clock").textContent = timeString; // 🖥️ Updates the content of the HTML element with id "clock" to show the time
}

updateClock(); // 🟢 Initial call to display the current time when the page loads
setInterval(updateClock, 1000); // 🔄 Refreshes the time every 1 second (1000ms)

// 🧠 Simple Analogy 🧠
// Imagine you're adjusting a clock every second manually. This digital clock does that for you,
// continuously checking the time from the system and updating itself on the screen automatically every second.

// 🎯 Possible Use Cases:
// 1️⃣ Website Headers ⏲️: Display a live digital clock in a website’s header for real-time updates.
// 2️⃣ Time Tracking Apps ⌚: Useful in applications that track or display the current time for users (e.g., dashboards).
// 3️⃣ Alarm Clock ⏰: The base code can be extended to create an alarm clock that triggers events at specific times.
// 4️⃣ Event Countdown Timers 📅: Combine it with a countdown timer to track how much time is left until an event.
// 5️⃣ Timezones ⏲️🌍: Modify it to display time in different time zones for international applications.
// 6️⃣ Home Automation UI 🏠: Use it in home automation dashboards that display time along with other real-time data.
// 7️⃣ Attendance Systems 🎓: Helpful in systems that log check-in and check-out times in schools or offices.
// 8️⃣ Fitness Apps 🏋️‍♂️: Show the current time during workout sessions for time management.
// 9️⃣ Project Management Tools 📊: Incorporate it into task or project management tools to help users stay on track with deadlines.
// 🔟 Live TV Streams 📺: Use it in overlays for live video streams or online TV broadcasting to show the current time.
