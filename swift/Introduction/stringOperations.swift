// Built-in function	Description
// isEmpty	            determines if a string is empty or not
// capitalized	        capitalizes the first letter of every word in a string
// uppercased()	        converts string to uppercase
// lowercase()	        converts string to lowercase
// hasPrefix()	        determines if a string starts with certain characters or not
// hasSuffix()	        determines if a string ends with certain characters or not

// 1. Compare Two Strings
let str1 = "Hello, world!"
let str2 = "I love Swift."
let str3 = "Hello, world!"

// compare str1 and str2
print(str1 == str2) // false

// compare str1 and str3
print(str1 == str3) // true


// 2. Join Two Strings
var greet = "Hello "
var name = "Jack"

// using the append() method
greet.append(name)
print(greet) // Hello Jack

// using + and +=
var greet2 = "Hello, "
let name2 = "Jack"

// using + operator
var result = greet2 + name2
print(result) // Hello, Jack

//using =+ operator
greet2 +=  name2
print(greet2) // Hello, Jack


// 3. Find Length of String
let message = "Hello, World!"

// count length of a string
print(message.count) // 13