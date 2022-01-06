// Class constructors are special member functions of a class.
// They are executed whenever new objects are created within that class.

// The constructor's name is identical to that of the class. It has no return type, not even void.

// Comparable to __init__ in Python

#include <iostream>
#include <string>

class myClass {
    public:
        myClass() {
            std::cout << "Hey";
        }
        void setName(std::string x) {
            name = x;
        }
        std::string getName() {
            return name;
        }
    private:
        std::string name;
};

int main() {
    myClass myObj;
    return 0;
}