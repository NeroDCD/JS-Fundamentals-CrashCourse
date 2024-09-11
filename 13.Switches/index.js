// 13. Learn JavaScript SWITCHES

// 🔄 SWITCH = can be an efficient replacement for multiple else-if statements.
//            It helps check the same variable or expression against different values,
//            making your code cleaner and more readable.

// 🎯 Possible Use Cases in Web Development:
// 1️⃣ Displaying different content based on the user’s selection (e.g., weekly planner or calendar).
// 2️⃣ Applying different rules based on user input (e.g., assigning membership levels).
// 3️⃣ Categorizing data into groups (e.g., pricing tiers, skill levels, or age ranges).
// 4️⃣ Mapping numeric values to readable strings (e.g., HTTP status codes like 200, 404, 500).

// break: ⚠️ The break ensures the switch stops after finding the matching case.
// switch: 🔄 The switch statement checks the value of `day` against multiple cases.
// default:  ❓ If none of the cases match, the default case runs.

// 🐔 Example 1: Day of the Week
// let day = 2; // 📅 Assigns a numeric value for the day of the week (1 = Monday, 2 = Tuesday, etc.)
// switch (day) {
//   case 1:
//     console.log("It is Monday 😫");
//     break;
//   case 2:
//     console.log("It is Tuesday 😠");
//     break;
//   case 3:
//     console.log("It is Wednesday 😩");
//     break;
//   case 4:
//     console.log("It is Thursday 😞");
//     break;
//   case 5:
//     console.log("It is Friday 😏");
//     break;
//   case 6:
//     console.log("It is Saturday 😜");
//     break;
//   case 7:
//     console.log("It is Sunday 😶");
//     break;
//   default: // ❓ If none of the cases match, the default case runs.
//     console.log(`${day} is not a valid day 👽`);
// }

// 📝 Explanation:
// 1️⃣ The `day` variable represents a day of the week using a number (e.g., 1 = Monday, 2 = Tuesday).
// 2️⃣ The switch compares `day` to each case. If `day` matches a case, the corresponding code runs.
//     For instance, when `day = 2`, "It is Tuesday 😠" is printed.
// 3️⃣ If `day` doesn't match any case (e.g., `day = 10`), the `default` case runs and shows "not a valid day 👽".
// 4️⃣ Each case ends with a `break` to prevent other cases from running after a match.

// 🌟 Example 2: Test Score and Letter Grade
let testScore = 92; // 📝 Assigns a student's test score.
let letterGrade; // 📝 Variable to store the resulting letter grade.

switch (
  true // 💡 Using `switch(true)` allows us to check conditions instead of exact values.
) {
  case testScore >= 90: // 🎓 If the score is 90 or higher, it's an A.
    letterGrade = "A🌟";
    break;
  case testScore >= 80: // 🎓 If the score is between 80 and 89, it's a B.
    letterGrade = "B✨";
    break;
  case testScore >= 70: // 🎓 If the score is between 70 and 79, it's a C.
    letterGrade = "C⭐";
    break;
  case testScore >= 60: // 🎓 If the score is between 60 and 69, it's a D.
    letterGrade = "D😁";
    break;
  default: // 🎓 Any score below 60 is an F.
    letterGrade = "F😝";
}

console.log(letterGrade); // 🔄 Outputs the student's letter grade based on their score.

// 📝 Explanation:
// 1️⃣ `switch(true)` allows us to evaluate conditions (e.g., score ranges) instead of direct values.
// 2️⃣ Each case checks whether the `testScore` falls within a range (e.g., `testScore >= 90`).
// 3️⃣ When `testScore = 92`, it matches the first case, assigning an A and breaking out of the switch.
// 4️⃣ If none of the ranges match (e.g., a score below 60), the `default` case runs and assigns an F.
