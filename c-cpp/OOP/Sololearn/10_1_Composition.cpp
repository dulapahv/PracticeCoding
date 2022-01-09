#include <string>
#include "10_1_Composition.h"

class Person {
    public:
        Person(std::string n, Birthday b) : name(n), bd(b) {}

        void printInfo() {
            std::cout << name << std::endl;
            bd.printDate();
        }

    private:
        std::string name;
        Birthday bd;
};

// The Person class has a name and a Birthday member, and a constructor to initialize them.
// Ensure that the corresponding header files are included.

// Notice that we can call the bd member's printDate() function, 
// since it's of type Birthday, which has that function defined.

int main() {
    Birthday bd(2, 21, 1985);
    Person p("David", bd);
    p.printInfo();
}

// We've created a Birthday object for the date of 2/21/1985. 
// Next, we created a Person object and passed the Birthday object to its constructor. 
// Finally, we used the Person object's printInfo() function to print its data.

// In general, composition serves to keep each individual class relatively 
// simple, straightforward, and focused on performing one task. 
// It also enables each sub-object to be self-contained, allowing for reusability 
// (we can use the Birthday class within various other classes).