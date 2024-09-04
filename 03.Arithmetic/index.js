// Arithmetic Operators = Operands (Value, Variables, etc.)
//                        Operators (+, -, *, /)
//                        Example -  11 = x + 5;

//let students = 30;
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 3;

//Exponents (Example: students to the power of 3)
// students = students ** 3;

//Modulus (gives remainder of any division)
// let ExtraStudents = students % 3;
// console.log(ExtraStudents);

// Augmented Assignment Operators
// students += 31;
//students -= 20;
//students *= 4;
// students /= 2;
// students **= 2;
// students %= 2;

// Increment/decrement Operators
//students++;
//students--;

// Operator Precedence
/*
    operator precedence (from left to right)
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = (12 % 2) + 8 / 2;
document.getElementById("result").textContent = result;
