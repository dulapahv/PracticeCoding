// the actual syntax of the print function accepts 3 parameters
// print(items: separator: terminator:)
// items - values inside the double quotation
// separator (optional) - allows us to separate multiple items inside print().
// terminator (optional) - allows us to add add specific values like new line "\n", tab "\t"

// * Note: separator and terminator are optional. If we don't include them inside the print(), 
// * their default values: single space " " for separator and new line "\n" for terminator are used.

print("Good Morning!")
print("It's rainy today")
// Good Morning!
// It's rainy today

// print with terminator space
print("Good Morning!", terminator: " ")
print("It's rainy today")
// Good Morning! It's rainy today

print("New Year", 2022, "See you soon!", separator: ". ")
// New Year. 2022. See you soon!