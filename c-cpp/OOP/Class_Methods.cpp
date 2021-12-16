// Inside class definition

#include <iostream>
#include <string>

class MyClass {
    public:
        void myMethod() {
            std::cout << "Hello World!";
        }
};

int main() {
    MyClass myObj;
    myObj.myMethod();
    return 0;
}