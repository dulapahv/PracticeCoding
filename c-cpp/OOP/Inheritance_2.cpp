#include <iostream>

// Base class (parent)
class MyClass {
    public:
        void myFunction() {
            std::cout << "Some content in parent class.";
        }
};

// Derived class (child)
class MyChild: public MyClass {
};

// Derived class (grandchild)
class MyGrandChild: public MyChild {
};

int main() {
    MyGrandChild myObj;
    myObj.myFunction();
    return 0;
}