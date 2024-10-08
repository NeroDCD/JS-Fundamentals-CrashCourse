// 55. Format currency in JavaScript

// 🌍 .toLocaleString() = A method in JavaScript that returns a string with a language-sensitive representation of a number.
// It adapts based on the provided locale and options, which allow for formatting numbers in different countries or regions.
// For example, commas, periods, and symbols may vary depending on the location and currency.

// 🔧 Syntax: .toLocaleString("locale", {options})
// - "locale": Specifies the language and region code (e.g., "en-US" for American English, "hi-IN" for Hindi in India).
// - {options}: Allows customization like currency, minimum/maximum fraction digits, etc.

// 1️⃣ Example 1 (Formatting a Number with Locales)
// 🌐 This example formats the number `123456.789` in different locales.
// Each locale uses its own conventions for grouping (like commas) and decimal separators.

// let number = 123456.789;

// // US: Displays the number formatted for US English with commas separating the thousands
// number = number.toLocaleString("en-US");
// console.log(number); // 🖨️ Output: 123,456.789

// // India: Formats the number based on the Indian numbering system, which separates thousands and lakhs
// number = number.toLocaleString("hi-IN");
// console.log(number); // 🖨️ Output: 1,23,456.789

// // Germany: Uses periods to separate thousands and commas for decimals
// number = number.toLocaleString("de-DE");
// console.log(number); // 🖨️ Output: 123.456,789

// 2️⃣ Example 2 (Formatting Currency for Specific Locales)
// 💵 This example shows how to display a number as a currency, using the options object to specify currency types.

let number = 123456.789;

// // India: Formats the number in Indian Rupees (INR)
// number = number.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// console.log(number); // 🖨️ Output: ₹1,23,456.79

// // Germany: Formats the number in Euros (EUR)
// number = number.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
// console.log(number); // 🖨️ Output: 123.456,79 €

// US: Formats the number in US Dollars (USD)
number = number.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(number); // 🖨️ Output: $123,456.79

// 🧠 Simple Analogy 🧠
// 🌍 Think of `.toLocaleString()` as a translator for numbers. 
// 🗣️ Just like how languages change between countries, the way numbers are displayed changes too.
// 📊 In some places, you use commas for thousands; in others, you use periods.
// ☔ It’s like getting dressed for the weather, but here you format your numbers for the right locale!

// 🎯 Possible Use Cases:
// 1️⃣ E-commerce 🛒: Format prices in different currencies based on user location.
// 2️⃣ Financial Reports 📈: Display monetary values in the appropriate currency for stakeholders in various countries.
// 3️⃣ Invoices 🧾: Generate customer invoices with correctly formatted currency for different regions.
// 4️⃣ International Payments 💸: Show transaction values in the sender's and receiver's currencies.
// 5️⃣ Currency Conversion 💱: Display converted amounts in the correct locale when users switch between currencies.
// 6️⃣ Multi-language Websites 🌍: Ensure numbers and prices match local formatting conventions for global users.
// 7️⃣ Bank Statements 🏦: Format account balances in the currency of the user’s home country.
// 8️⃣ Travel Apps ✈️: Show expenses or currency rates when booking in the user’s local currency.
// 9️⃣ Point of Sale (POS) Systems 💳: Display item prices in local currencies for international stores.
// 🔟 Data Visualization 📊: Display financial data or metrics in the correct currency and format based on region.
