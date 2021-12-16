#include <iostream>
#include <string>

// Create a class
// class MyClass {  // The class
//     public:  // Acces specifier
//         int myNum;  // Attribute (int var)
//         string myString;  // Attribute (string var)
// };

// Create an object

class MyClass {
    public:
        int myNum;
        std::string myString;
};

int main() {
    // Create an object of MyClass
    MyClass myObj;

    // Access attributes and set values
    myObj.myNum = 15;
    myObj.myString = "Some text";

    // Print attribute values
    std::cout << myObj.myNum << "\n";
    std::cout << myObj.myString;
    return 0;
}