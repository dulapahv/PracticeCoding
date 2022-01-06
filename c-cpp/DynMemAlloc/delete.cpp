// For local variables on the stack, managing memory is carried out automatically.
// On the heap, it's necessary to manually handle the dynamically allocated memory, 
// and use the delete operator to free up the memory when it's no longer needed.

// Forgetting to free up memory that has been allocated with the new keyword will result 
// in memory leaks, because that memory will stay allocated until the program shuts down.

#include <iostream>

int main() {
    int *p = new int; // request memory
    *p = 5; // store value

    std::cout << *p << std::endl; // use value

    delete p; // free up the memory
}