// 11. The JavaScript checked property is easy

// 🗹 `.checked` = property that determines the checked state of an  HTML checkbox or radio button element

// 📌 The `.checked` property is a boolean that indicates whether an HTML 
//    checkbox or radio button is currently selected (checked) or not (unchecked).
       
// ✅ True: The checkbox or radio button is checked.
// ❌ False: The checkbox or radio button is unchecked.

// 🌍 Usage Context: Commonly used with input elements of type:
// - checkbox: Allows multiple selections.
// - radio: Allows only one selection from a group.

// 🖥️ HTML Elements
const myCheckbox = document.getElementById("myCheckbox"); // ✅ Get the checkbox element for subscription.
const visaBtn = document.getElementById("visaBtn"); // 💳 Get the Visa radio button.
const masterCardBtn = document.getElementById("masterCardBtn"); // 💳 Get the MasterCard radio button.
const payPalBtn = document.getElementById("payPalBtn"); // 💸 Get the PayPal radio button.
const mySubmit = document.getElementById("mySubmit"); // 🖱️ Get the submit button.
const subResult = document.getElementById("subResult"); // 🏷️ Get the element to display subscription result.
const paymentResult = document.getElementById("paymentResult"); // 🏷️ Get the element to display payment result.

// 📥 Submit Button Click Handler
mySubmit.onclick = function () {
  // 🖱️ When the submit button is clicked:
  // 🗹 Subscription Status Check
  if (myCheckbox.checked) {
    // ✅ If the checkbox is checked:
    subResult.textContent = "🎉 Thanks for subscribing!"; // 🎉 Display a thank you message.
  } else {
    // ❌ If the checkbox is not checked:
    subResult.textContent = "🚫 Subscription not completed."; // 🚫 Display a subscription not completed message.
  }

  // 💳 Payment Method Check
  if (visaBtn.checked) {
    // 💳 If the Visa radio button is checked:
    paymentResult.textContent = "💳 Paying with Visa."; // 💳 Display message for Visa payment.
  } else if (masterCardBtn.checked) {
    // 💳 If the MasterCard radio button is checked:
    paymentResult.textContent = "💳 Paying with MasterCard."; // 💳 Display message for MasterCard payment.
  } else if (payPalBtn.checked) {
    // 💸 If the PayPal radio button is checked:
    paymentResult.textContent = "💸 Paying with PayPal."; // 💸 Display message for PayPal payment.
  } else {
    // 🔄 If no payment method is selected:
    paymentResult.textContent = "🎯 You must select a payment type"; // 🎯 Prompt to select a payment type.
  }
};

// 🔑 Explanation:
// 1️⃣ The `.checked` property is used to determine if a checkbox or radio button is selected.
// 2️⃣ When the submit button is clicked, it checks the state of `myCheckbox` to determine subscription status.
// 3️⃣ It also checks which payment method is selected among the radio buttons and updates the result accordingly.
// 4️⃣ If no payment method is selected, it prompts the user to select one.

// 🧠 Simple Analogy 🧠
// 📋 The `.checked` property is like checking a box on a to-do list.
// ✅ If the box is checked, it’s like saying, "Yup, this is done!"
// ❌ If the box isn't checked, it’s like saying, "Nope, not yet!"
// 🔍 In JavaScript, the `.checked` property lets you verify whether a checkbox or radio button is ticked or not.
// 💡 It’s just like when you're double-checking if you’ve turned off the lights before leaving the house!

// 🎯 Possible Use Cases:
// 1️⃣ Form validation ✅: Ensuring users have agreed to terms and conditions using a checkbox.
// 2️⃣ Subscription settings 📧: Managing email notifications by checking/unchecking options.
// 3️⃣ Payment methods 💳: Selecting Visa, MasterCard, or PayPal with radio buttons.
// 4️⃣ User preferences 🌙: Toggling dark mode or newsletter sign-up with checkboxes.
// 5️⃣ Filter options 🔍: Filtering search results by category, price range, etc., in e-commerce platforms.
// 6️⃣ User settings ⚙️: Saving preferences by enabling or disabling features.
// 7️⃣ Multi-select forms 📋: Tracking selection states for multiple items in a form.
// 8️⃣ Dynamic forms 📝: Showing or hiding additional fields based on user choices.
// 9️⃣ Quizzes or surveys 📝: Allowing multiple answers with checkbox selections.
// 🔟 Interactive features ➕➖: Expanding or collapsing content using toggles.
