// The delete operator frees up the memory allocated for the variable, 
// but does not delete the pointer itself, as the pointer is stored on the stack.

// Pointers that are left pointing to non-existent memory locations are called dangling pointers.

// The NULL pointer is a constant with a value of zero that is defined in several of the standard libraries, including iostream.
// It's a good practice to assign NULL to a pointer variable when you declare it, 
// in case you do not have exact address to be assigned. A pointer assigned NULL is called a null pointer. For example: int *ptr = NULL;

#include <iostream>

int main() {
    int *p = new int; // request memory
    *p = 5; // store value

    delete p; // free up the memory
    // now p is a dangling pointer

    p = new int; // reuse for a new address
}