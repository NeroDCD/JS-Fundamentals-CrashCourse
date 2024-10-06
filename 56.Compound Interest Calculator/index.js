// 56. Build a JS compound interest calculator

// 📚 A compound interest calculator is a tool that helps determine how much an initial investment will grow over time
// by accumulating interest on both the principal amount and the interest earned.
// It factors in the interest rate, time period, and compounding frequency (e.g., annually, monthly, daily).
// Compound interest enables your money to grow more rapidly than simple interest due to the "interest-on-interest" effect!

// 1️⃣ Function Calculate
// 🧮 This function computes the total amount after a specified number of years,
// taking into account the principal, interest rate, and number of years.
// It retrieves input values, checks for valid entries, and calculates the compound interest.

function calculate() {
  const totalAmount = document.getElementById("total-amount"); // 🎯 Reference to the DOM element where the result will be displayed
  const principalInput = document.getElementById("principal"); // 🎯 Reference to the input for the principal amount
  const rateInput = document.getElementById("rate"); // 🎯 Reference to the input for the interest rate
  const yearsInput = document.getElementById("years"); // 🎯 Reference to the input for the number of years

  let principal = Number(principalInput.value); // 🎲 Converts the principal input value to a number
  let rate = Number(rateInput.value) / 100; // 🎲 Converts the rate input value to a fraction
  let years = Number(yearsInput.value); // 🎲 Converts the years input value to a number

  // 🔒 Input Validation: Ensures that principal, rate, and years are non-negative
  if (principal < 0 || isNaN(principal)) {
    principal = 0; // 💡 Sets principal to zero if invalid
    principalInput.value = 0; // 💡 Updates the input field to reflect this
  }

  if (rate < 0 || isNaN(rate)) {
    rate = 0; // 💡 Sets rate to zero if invalid
    rateInput.value = 0; // 💡 Updates the input field to reflect this
  }

  if (years < 0 || isNaN(years)) {
    years = 0; // 💡 Sets years to zero if invalid
    yearsInput.value = 0; // 💡 Updates the input field to reflect this
  }

  // 📈 Calculates the total amount using the compound interest formula
  const result = principal * Math.pow(1 + rate / 1, 1 * years);
  totalAmount.textContent = result.toLocaleString(undefined, {
    // 💵 Displays the result in currency format
    style: "currency",
    currency: "USD"
  });
}

// 🧠 Simple Analogy 🧠
// Think of compound interest like a snowball rolling down a hill. As it rolls, it gathers
// more snow (interest) not just from what it started with (the principal)
// but also from the snow (interest) it has already collected.
// The bigger the snowball gets, the more snow it picks up, making it grow faster over time!

// 🎯 Possible Use Cases:
// 1️⃣ Personal Finance 📊: Individuals can plan their savings and investments effectively by understanding how money grows over time.
// 2️⃣ Retirement Planning 🏖️: Help users estimate how much they need to save for a comfortable retirement based on compound interest.
// 3️⃣ Education Savings 🎓: Families can calculate how much they need to save for their children’s education expenses.
// 4️⃣ Investment Strategies 📈: Investors can compare different investment options based on their potential compound interest growth.
// 5️⃣ Business Financial Planning 💼: Businesses can project future revenues or investments by using compound interest calculations.
// 6️⃣ Real Estate Investments 🏡: Calculate potential returns on property investments over time based on compounding.
// 7️⃣ Loan Analysis 💳: Borrowers can understand how long it will take to pay off loans with interest accruing over time.
// 8️⃣ Emergency Funds 🆘: Individuals can see how their emergency funds can grow when placed in high-yield accounts.
// 9️⃣ Financial Education 📚: Used as a tool in workshops or classes to teach the principles of interest and investment.
// 🔟 Online Calculators 🌐: Provide an interactive tool on financial websites to help users make informed decisions.
