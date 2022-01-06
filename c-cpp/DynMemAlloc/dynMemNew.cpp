#include <iostream>

int main() {
    int *p = new int;
    *p = 5;
    // We have dynamically allocated memory for an integer, and assigned it a value of 5.
    // The pointer p is stored in the stack as a local variable, and holds the heap's allocated address as its value. 
    // The value of 5 is stored at that address in the heap.
}