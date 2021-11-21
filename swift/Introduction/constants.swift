// A constant is a special type of variable whose value cannot be changed. For example,
// let a = 5
// Here, after a is initialized to 5, we cannot change its value.
// If you are sure that the value of a variable won't change throughout the program, it's recommended to use let.

// Declare constants
let x = 5
x = 10
print(x) // ! error: cannot assign to value: 'x' is a 'let' constant

let siteName: String
print(siteName) // ! error: constant 'siteName' used before being initialized