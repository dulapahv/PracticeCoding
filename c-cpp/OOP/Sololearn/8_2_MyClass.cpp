#include "8_2_MyClass.h"
#include <iostream>

void MyClass::myPrint() const {
    std::cout << "Hello" << std::endl;
};

int main() {
    const MyClass obj;
    obj.myPrint();
}

// Now the myPrint() function is a constant member function. As such, it can be called by our constant object: