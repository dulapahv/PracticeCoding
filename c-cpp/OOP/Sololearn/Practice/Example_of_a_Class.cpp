// Example of a class


// Complete the given program. Define a class Bird which has one public method called makeSound(). That prints "chirp-chirp" when called.

// Expected Output
// chirp-chirp

// Don't forget to add access specifier - the public keyword.

#include <iostream>
using namespace std;


class Bird {
    public:
        void makeSound() {
            cout << "chirp-chirp";
        }
    
};


int main() {
    
    //instantiation
    Bird bird;
    
    //function call
    bird.makeSound();
    
    return 0;
}