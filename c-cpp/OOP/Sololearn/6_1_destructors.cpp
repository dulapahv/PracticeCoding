// The name of a destructor will be exactly the same as the class, 
// only prefixed with a tilde (~). A destructor can't return a value or take any parameters.

// Destructors can be very useful for releasing resources before coming out of the program. 
// This can include closing files, releasing memory, and so on.

// Since destructors can't take parameters, they also can't be overloaded.
// Each class will have just one destructor.

// Defining a destructor is not mandatory; if you don't need one, you don't have to define one.

#include <iostream>

class MyClass {
    public:
        ~MyClass() {
            // some code
        }
};