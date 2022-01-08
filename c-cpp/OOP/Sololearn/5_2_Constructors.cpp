// Constructors can be very useful for setting initial values for certain member variables.
// A default constructor has no parameters. However, when needed, parameters can be added to a constructor. 
// This makes it possible to assign an initial value to an object when it's created, as shown in the following example:

// We defined a constructor, that takes one parameter and assigns it to the name attribute using the setName() method.

#include <iostream>
#include <string>

class myClass {
    public:
        myClass(std::string nm) {
            setName(nm);
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
    myClass ob1("n0miya");
    myClass ob2("NuK0uMi");
    std::cout << ob1.getName() << "\n";
    std::cout << ob2.getName() << "\n";
}