// public - members are accessible from outside the class
// private - members cannot be accessed (or viewed) from outside the class
// protected - members cannot be accessed from outside the class, however, they can be accessed in inherited classes.

// Note: By default, all members of a class are private if you don't specify an access specifier:

#include <iostream>

class MyClass {
    public:
        int x;
    private:
        int y;
    protected:
        int z;
};

int main() {
    MyClass myObj;
    myObj.x = 25;
    // myObj.y = 50;  // Not allowed (private)
    // myObj.z = 100;  // Not allowed (protected)
    return 0;
}

// Note: It is possible to access private members of a class using a public method inside the same class.

// Tip: It is considered good practice to declare your class attributes as private (as often as you can). 
// This will reduce the possibility of yourself (or others) to mess up the code. 
// This is also the main ingredient of the Encapsulation concept.