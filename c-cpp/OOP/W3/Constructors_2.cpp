#include <iostream>
#include <string>

class Car {
    public:
        std::string brand;  // Attribute
        std::string model;  // Attribute
        int year;

        Car(std::string x, std::string y, int z) {  // Constructor definition outside the class
            brand = x;
            model = y;
            year = z;
        }
};

int main() {
    Car carObj1("BMW", "X5", 1999);
    Car carObj2("Ford", "Mustang", 1969);

    std::cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
    std::cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
}