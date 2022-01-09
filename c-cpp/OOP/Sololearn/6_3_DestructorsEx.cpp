#include "6_2_destructorsEx.h"
#include <iostream>

MyClass::MyClass() {
    std::cout << "Constructor\n";
};

MyClass::~MyClass() {
    std::cout << "Destructor\n";
}

int main() {
    MyClass obj;
    return 0;
}

// When the program runs, it first creates the object and calls the constructor. 
// The object is deleted and the destructor is called when the program's execution is completed.