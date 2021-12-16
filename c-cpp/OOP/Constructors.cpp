// A constructor in C++ is a special method that is automatically called when an object of a class is created.

#include <iostream>
#include <string>

class MyClass {
    public:
        MyClass() {
            std::cout << "Hello World!";
        }
};

int main() {
    MyClass myObj;
    return 0;
}