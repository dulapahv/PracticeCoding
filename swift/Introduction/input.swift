print("Enter your favorite programming language:")
let name = readLine()

print("Your favorite programming language is \(name!).")
// Enter your favorite programming language:
// Swift
// Your favorite programming language is Swift.

// * The readLine() function doesn't return a regular string. Instead, it returns an optional string. 
// * Hence, we have used name! to forcefully unwrap the name.