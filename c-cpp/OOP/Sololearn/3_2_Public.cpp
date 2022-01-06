// Access specifiers are used to set access levels to particular members of the class.
// The three levels of access specifiers are public, protected, and private.

// A public member is accessible from outside the class, and anywhere within the scope of the class object.

// If no access specifier is defined, all members of a class are set to private by default.

#include <iostream>
#include <string>

class myClass {
    public:
        std::string name;
};

int main() {
    myClass myObj;
    myObj.name = "n0miya";
    std::cout << myObj.name;
    return 0;
}