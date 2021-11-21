// The rules for naming variables are:
// 1. Variables names must start with either a letter, an underscore _, or the dollar sign
// var a = "hello"
// var _a = "hello"
// var $a = "hello"
//
// 2. Variable names cannot start with numbers. For example
// invalid
// var 1a = "hello" // throws error
//
// 3. Swift is case-sensitive. So A and a are different variables. For example,
// var A = 5 
// var a = 55
// print(A) // 5
// print(a) // 55
//
// Avoid using Swift keywords like var, String, class, etc. as variable names.

// Swift variables
var num = 10
print(num) // 10

// Declaring variables
// Note: In Swift, we cannot change the type of a variable once it's declared.
var siteName: String
siteName = "Google.com"
print(siteName) // Google.com

// Assign values to variables
// Note: Variable name cannot be repeated
var siteName2 = "Google.com"
print(siteName2) // Google.com

// Change value of a variable
var siteName3 = "Google.com"
siteName3 = "Youtube.com"
print(siteName3) // Youtube.com