#include "9_2_MyClass.h"
#include <iostream>

MyClass::MyClass(int a, int b) : regVar(a), constVar(b) {
    std::cout << regVar << std::endl;
    std::cout << constVar << std::endl;
};

int main() {
    MyClass obj(42, 33);
}