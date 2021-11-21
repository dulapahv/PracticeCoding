let someValue:Int? = 5
print(someValue) // Optional(5)
print(someValue!) // 5
// As you can see, printing the optional as print(someValue) doesn't give you 5 but Optional(5). 
// It is of the form as described above: Optional<Value>. 
// In order to access the <Value> from it, we need a mechanism called unwrapping.
// You can unwrap an optional by appending ! character at the end of the variable/constant as in the next line print(someValue!).

let someValue:Int! = 5
print(someValue) // 5

var someValue:Int!
var unwrappedValue:Int = someValue // ! error: Unexpectedly found nil while unwrapping an Optional value