// 34. JavaScript filter() method

// filter() = creates a new array by filtering out elements with a callback 🔍

// 1️⃣ Example 1: Filtering Even and Odd Numbers
// 📜 This example shows how to filter an array of numbers to get even and odd numbers separately.
// let numbers = [1, 2, 3, 4, 5, 6, 7];

// // 🔄 Filter the array to get only even numbers
// let evenNums = numbers.filter(isEven); // 🔄 Filters numbers to keep only even ones

// // 🔄 Filter the array to get only odd numbers
// let oddNums = numbers.filter(isOdd); // 🔄 Filters numbers to keep only odd ones

// function isEven(element) {
//   return element % 2 === 0; // 🔍 Checks if the number is even
// }

// function isOdd(element) {
//   return element % 2 !== 0; // 🔍 Checks if the number is odd
// }

// console.log(evenNums); // 📜 Logs: [2, 4, 6]
// console.log(oddNums); // 📜 Logs: [1, 3, 5, 7]

// 2️⃣ Example 2: Filtering Ages into Adults and Teenagers
// 📜 This example demonstrates how to filter an array of ages to get adults and teenagers separately.
// const ages = [17, 18, 19, 20, 20, 70];

// // 🔄 Filter the array to get only ages of adults
// const adults = ages.filter(isAdult); // 🔄 Filters ages to keep only adults

// // 🔄 Filter the array to get only ages of teenagers
// const teen = ages.filter(isTeen); // 🔄 Filters ages to keep only teenagers

// function isAdult(element) {
//   return element >= 18; // 🔍 Checks if the age is 18 or older
// }

// function isTeen(element) {
//   return element < 18; // 🔍 Checks if the age is less than 18
// }

// console.log(adults); // 📜 Logs: [18, 19, 20, 20, 70]
// console.log(teen); // 📜 Logs: [17]

// 3️⃣ Example 3: Filtering Words by Length
// 📜 This example filters an array of words into short and long words based on their length.
const words = [
  "ephemeral",
  "serendipity",
  "quintessential",
  "luminous",
  "resilience",
  "ethereal",
  "melancholy",
  "soliloquy"
];

// 🔄 Filter the array to get only short words (8 or fewer letters)
const shortwords = words.filter(getShortWords); // 🔄 Filters words to keep only short ones

// 🔄 Filter the array to get only long words (more than 8 letters)
const longwords = words.filter(getLongWords); // 🔄 Filters words to keep only long ones

function getShortWords(element) {
  return element.length <= 8; // 🔍 Checks if the word has 8 or fewer letters
}

function getLongWords(element) {
  return element.length > 8; // 🔍 Checks if the word has more than 8 letters
}

console.log(shortwords); // 📜 Logs: ["ephemeral", "luminous", "resilience", "ethereal"]
console.log(longwords); // 📜 Logs: ["serendipity", "quintessential", "melancholy", "soliloquy"]

// 🧠 Simple Analogy 🧠
// 🧺 Think of .filter() like sorting through a basket of mixed fruits. You might only keep the apples and set aside the oranges.
// Similarly, .filter() keeps only the items that meet the specified condition.

// 🎯 Possible Use Cases:
// 1️⃣ Filtering Lists:🔄 Extract items that meet specific conditions, such as finding all even numbers in an array.
// 2️⃣ Validating Data:✅ Filter out invalid or unwanted data entries, such as excluding underage users from a list.
// 3️⃣ Sorting Data:📊 Create subsets of data based on length, date, or other attributes, like short vs. long words.
// 4️⃣ User Preferences:🔍 Display items based on user preferences, such as showing available products or active users.
// 5️⃣ Data Cleanup:🧹 Remove unnecessary or irrelevant items from a dataset, like cleaning up a list of ages or names.
// 6️⃣ Query Results:📈 Retrieve specific results from a larger dataset, such as finding all records with a certain status.
// 7️⃣ Search Filtering:🔎 Filter search results based on criteria like keywords or tags, to show relevant results.
// 8️⃣ Categorizing Items:🗂️ Categorize items into different groups, like grouping students by age or products by category.
// 9️⃣ Analyzing Data:📊 Analyze subsets of data to generate insights or summaries, such as finding high vs. low values.
// 🔟 Dynamic Display:🎨 Dynamically display content based on user interactions or input, like filtering visible items on a page.
