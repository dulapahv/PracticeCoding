// The malloc() function reserves a block of memory of the specified number of bytes.
// And, it returns a pointer of void which can be casted into pointers of any form.

#include <stdio.h>
#include <stdlib.h>  // for malloc

int main() {
    // Syntax of malloc()
    // ptr = (castType*) malloc(size);
    double *ptr;
    ptr = (double*) malloc(100 * sizeof(double));

    // The above statement allocates 400 bytes of memory. 
    // It's because the size of double is 8 bytes. And, the pointer ptr holds the address of the first byte in the allocated memory.

    // The expression results in a NULL pointer if the memory cannot be allocated.

    for (int i = 0; i < 100; i++)
        ptr[i] = i;
    
    for (int i = 0; i < 100; i++)
        printf("%.2lf\n", ptr[i]);

    // Allocating 2D memory
    // double** array;  
    // array = (double**) malloc(nX*sizeof(double*));  
    // for (int i = 0; i < nX; i++)  
    // {
    //    array[i] = (double*) malloc(nY*sizeof(double));  
    //    /* then array[i][j] = values */
    // }
}
