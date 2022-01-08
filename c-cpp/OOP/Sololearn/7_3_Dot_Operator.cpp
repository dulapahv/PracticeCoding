#include "7_3_Dot_Operator.h"
#include <iostream>

MyClass::MyClass() {
    MyClass::myPrint(); {
        std::cout << "Hello\n";
    }
};

int main() {
    MyClass obj;
    obj.myPrint();

    // We can also use a pointer to access the object's members.
    // The following pointer points to the obj object:

    // MyClass obj;
    // MyClass *ptr = &obj;
}