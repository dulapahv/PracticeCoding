// Outside class definition

#include <iostream>
#include <string>

class MyClass {
    public:
        void myMethod();
        int speed(int maxSpeed);
};

void MyClass::myMethod() {
    std::cout << "Hello World!\n";
}

int MyClass::speed(int maxSpeed) {
    return maxSpeed;
}

int main() {
    MyClass myObj;
    myObj.myMethod();
    std::cout << myObj.speed(200);
    return 0;
}