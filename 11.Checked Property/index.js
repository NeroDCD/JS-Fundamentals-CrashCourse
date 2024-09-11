// 11. The JavaScript checked property is easy

// 🗹 .checked = property that determines the checked state of an
//                HTML checkbox or radio button element

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
