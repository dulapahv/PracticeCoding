// We can add another public method in order to get the value of the attribute.

// The getName() method returns the value of the private name attribute.

#include <iostream>
#include <string>

class myClass {
    public:
        void setName(std::string x) {
            name = x;
        }
        std::string getName() {
            return name;
        }
    private:
        std::string name;
};