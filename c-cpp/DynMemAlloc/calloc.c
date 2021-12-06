// The malloc() function allocates memory and leaves the memory uninitialized,
// whereas the calloc() function allocates memory and initializes all bits to zero.

#include <stdio.h>
#include <stdlib.h>

int main() {
    // Syntax of calloc()
    // ptr = (castType*)calloc(n, size);
    double *ptr;
    ptr = (double*) calloc(100, sizeof(double));
    // The above statement allocates contiguous space in memory for 100 elements of type double.

    for (int i = 0; i < 100; i++)
        ptr[i] = i;
    
    for (int i = 0; i < 100; i++)
        printf("%.2lf\n", ptr[i]);
}