// 51. Learn JavaScript DATE objects

// 🗓️ A Date object in JavaScript is used to work with dates and times.
// It represents a specific point in time and provides methods to manipulate and format dates.

// 🔑 Key Uses:
// ⏰ Get the current date and time.
// 📅 Set or retrieve specific components (year, month, day, hour, etc.).
// ➗ Perform calculations with dates (e.g., find the difference between two dates).

// // 1️⃣ Example 1 (Current Date and Time)
// // 🕰️ Create a new Date object that holds the current date and time.
// const date = new Date();
// console.log(date);
// // 🖨️ Logs: Current date and time (e.g., "2024-09-25T12:34:56.789Z")

// // 2️⃣ Example 2 (Custom Date and Time)
// // 🎨 Creating a specific date and time with parameters (Year, Month (0-indexed), Day, Hour, Minute, Second, Millisecond).
// const dateCustom = new Date(2024, 0, 1, 2, 3, 4, 5); 
// console.log(dateCustom);
// // 🖨️ Logs: Mon Jan 01 2024 02:03:04 GMT+0000 (Your timezone)

// // 3️⃣ Example 3 (DateTime String)
// // 📝 Create a Date object using a string that represents a specific date and time (ISO 8601 format).
// const dateString = new Date("2024-01-02T12:00");
// console.log(dateString);
// // 🖨️ Logs: Tue Jan 02 2024 12:00:00 GMT+0000 (Your timezone)

// // 4️⃣ Example 4 (Milliseconds since Epoch)
// // 🕹️ Create a Date object using the number of milliseconds since January 1, 1970 (Unix Epoch).
// const dateEpoch = new Date(1700000000000);
// console.log(dateEpoch);
// // 🖨️ Logs: Thu Nov 14 2024 01:46:40 GMT+0000 (Your timezone)

// // 5️⃣ Example 5 (Get Methods)
// // 🛠️ Using Date object methods to retrieve specific date components.
// const now = new Date();
// const year = now.getFullYear();  // Get year (e.g., 2024)
// const month = now.getMonth();    // Get month (0-11, 0 = Jan)
// const day = now.getDate();       // Get day of the month (1-31)
// const hour = now.getHours();     // Get hour (0-23)
// const minutes = now.getMinutes(); // Get minutes (0-59)
// const seconds = now.getSeconds(); // Get seconds (0-59)
// const dayOfWeek = now.getDay();  // Get day of the week (0 = Sunday)

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);
// // 🖨️ Logs: Date components, like 2024, 8, 25, etc.

// // 7️⃣ Example 7 (Set Methods)
// // 🛠️ Modify an existing Date object by setting specific components (year, month, day, hour, etc.).
// const dateSet = new Date();
// dateSet.setFullYear(2027);  // Set year to 2027
// dateSet.setMonth(3);        // Set month to April (Month is 0-indexed)
// dateSet.setDate(20);        // Set day to 20th
// dateSet.setHours(5);        // Set hour to 5 AM
// dateSet.setMinutes(49);     // Set minutes to 49
// dateSet.setSeconds(19);     // Set seconds to 19

// console.log(dateSet);
// // 🖨️ Logs: Wed Apr 20 2027 05:49:19 GMT+0000 (Your timezone)

// 8️⃣ Example 8 (Compare DateTime)
// 🔄 Compare two dates to check which one is earlier or later.
const date1 = new Date("2021-12-31");
const date2 = new Date("2022-01-01");

if (date2 > date1) {
  console.log("Happy New Year!✨");
}
// 🖨️ Logs: Happy New Year!✨

// 🧠 Simple Analogy 🧠
// Imagine Date objects as calendars and clocks.
// You can create a blank calendar (current date) or a specific date (e.g., January 1st, 2024).
// Then, you can either read the details from that calendar (get methods) or modify the dates and times (set methods).

// 🎯 Possible Use Cases:
// 1️⃣ Event Scheduling 📅: Track and manage the date and time of upcoming events, meetings, or deadlines.
// 2️⃣ Birthday Reminders 🎂: Create reminders for upcoming birthdays and anniversaries.
// 3️⃣ Countdown Timers ⏳: Calculate and display the time remaining until a specific date, like a project deadline.
// 4️⃣ Data Logging 📜: Record the exact date and time when actions or events occur in an application.
// 5️⃣ Project Management 🛠️: Track project milestones and calculate progress between start and end dates.
// 6️⃣ Alarm Clock ⏰: Implement alarms that trigger actions at specific times or after certain durations.
// 7️⃣ Time Zones 🌍: Convert times between different time zones in international applications.
// 8️⃣ Age Calculation 👶: Calculate someone’s age by comparing the current date to their birthdate.
// 9️⃣ Time Tracking 🕰️: Record the time spent on various activities or tasks for reporting purposes.
// 🔟 Financial Apps 💸: Calculate interest rates or investment returns based on the difference between dates.
