// program to check pass or fail
let marks = 60

// use of ternary operator
let result = (marks >= 40) ? "pass" : "fail"

print("You \(result) the exam") // You pass the exam


// Nested Ternary Operators
// program to check if a number is positive, zero, or negative
let num = 7

let result2 = (num == 0) ? "Zero" : ((num > 0) ? "Positive" : "Negative")

print("The number is \(result2).") // The number is Positive.

// * Note: It is recommended not to use nested ternary operators as they make our code more complex.