// Memory Address
// The & operator was used to create a reference variable. But it can also be used to get the memory address of a variable; which is 
// the location of where the variable is stored on the computer.

// When a variable is created in C++, a memory address is assigned to the variable. And when we assign a value to the variable, it is stored in this memory address.

// To access it, use the & operator, and the result will represent where the variable is stored:

#include <iostream>

using namespace std;

int main() {
    string food = "Pizza";

    cout << &food; // 0x61fde0
}

// Note: The memory address is in hexadecimal form (0x..). Note that you may not get the same result in your program.

// References and Pointers (which you will learn about in the next chapter) are important in C++, because they give you the ability to 
// manipulate the data in the computer's memory - which can reduce the code and improve the performance.

// These two features are one of the things that make C++ stand out from other programming languages, like Python and Java.