// 12. JavaScript TERNARY OPERATOR

// 🛠️ Ternary Operator = a shortcut to if{} and else{} statements
//                       Allows you to assign a value based on a condition
//                       condition ? codeIfTrue : codeIfFalse

// 🔄 The Ternary Operator is a more concise way to handle if-else logic
//    It makes the code shorter, easier to read, and more elegant for simple conditions.

// 🐔 Example 1: Age-based Message
// let age = 27;
// let message = age >= 18 ? "You're an Adult 🐔" : "You're a Teenager 🐤";
// console.log(message);

// 🌞 Example 2: Time-based Greeting
// let time = 17;
// let greeting = time < 12 ? "Good Morning 🌞" : "Good Afternoon 🎇";
// console.log(greeting);

// 🙋 Example 3: Check if a person is a student
// let isStudent = false;
// let message = isStudent ? "You are a student 🙋" : "You are NOT a student 🙅";
// console.log(message);

// 💸 Example 4: Purchase Amount Discount
let purchaseAmount = 125; // 🛒 Set the purchase amount
let discount = purchaseAmount >= 100 ? 10 : 0; // 🤑 If purchase is $100+, apply 10% discount, else 0%
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}` // 💵 Show total after discount
);

// 📝 Explanation:
// 1️⃣ In this example, if the purchaseAmount is 100 or more, a 10% discount is applied. Otherwise, no discount is given.
// 2️⃣ The ternary operator `purchaseAmount >= 100 ? 10 : 0` checks the condition and assigns the appropriate discount.
// 3️⃣ The final total is calculated by subtracting the discount from the purchaseAmount, and it's displayed with a message.

// 🧠 Simple Analogy 🧠
// 🎯 The ternary operator in JavaScript is like a quick decision-making tool with a yes or no outcome:
// ➡️ It's a compact way of asking a question and deciding between two options, similar to choosing between two paths in a fork in the road.
// 🌞 For example, "Is it sunny? If yes, go to the park, if no, stay indoors." 🌧️
// ✨ The ternary operator allows you to write this in one line: `condition ? option1 : option2`.
// 📜 It helps streamline decisions in your code with a concise and readable format.

// 🎯 Possible Use Cases:
// 1️⃣ Conditional rendering 🔐: Show "Logout" if the user is logged in; otherwise, display "Login." 
// 2️⃣ Form validation 🚫: Display error messages if required fields are empty.
// 3️⃣ Simplifying logic 🎨: Apply different CSS classes based on a value for conditional styling.
// 4️⃣ Assigning membership levels 💳: Show "Premium" if payment is successful; otherwise, show "Free."
// 5️⃣ Displaying different content ⏰: Change messages based on the time of day or user input.
// 6️⃣ Setting default values 🔄: Use a fallback value when the primary value is not available.
// 7️⃣ Determining actions 🔍: Execute different functions based on user choices or conditions.
// 8️⃣ Showing different elements 🛒: Display different product categories based on user preferences.
// 9️⃣ Controlling feature toggles ⚙️: Enable or disable advanced options based on user roles or feature flags.
// 🔟 Conditionally rendering components ⚛️: Render different components in frameworks like React based on state or props.