// derived class (child) - the class that inherits from another class
// base class (parent) - the class being inherited from
// To inherit from a class, use the : symbol.

#include <iostream>
#include <string>

// Base class
class Vehicle {
    public:
        std::string brand = "Ford";
        void honk() {
            std::cout << "Tuut, tuut! \n";
        }
};

// Derived class
class Car: public Vehicle {
    public:
        std::string model = "Mustang";
};

int main() {
    Car myCar;
    myCar.honk();
    std::cout << myCar.brand + " " + myCar.model;
    return 0;
}

// Why And When To Use "Inheritance"?
// - It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.