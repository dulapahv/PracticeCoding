// A private member cannot be accessed, or even viewed, from outside the class; it can be accessed only from within the class.

#include <iostream>
#include <string>

class myClass {
    public:
        void setName(std::string x) {
            name = x;
        }
    private:
        std::string name;
};

int main() {
    myClass myObj;
    myObj.setName("NuK0uMi");
    return 0;
}