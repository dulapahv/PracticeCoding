#include <iostream>

int main() {
    int *p = NULL; // pointer initialized with null
    p = new int[20]; // request memory
    delete [] p; // delete array pointed to by p
}