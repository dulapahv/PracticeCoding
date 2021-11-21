// You can access elements of an array by indices.
// Few keynotes:
// Arrays have 0 as the first index, not 1. In this example, mark[0] is the first element.
// If the size of an array is n, to access the last element, the n-1 index is used.
// Suppose the starting address of mark[0] is 2120d. Then, the address of the mark[1] will be 2124d. Similarly, the address of mark[2] will be 2128d and so on.
// This is because the size of a float is 4 bytes.

#include <stdio.h>

int main()
{
    int mark[5] = {19, 10, 8, 17, 9}; // You can also type: int mark[] = {19, 10, 8, 17, 9};
    printf("%d\n", mark[0]);          // 19
    printf("%d\n", mark[1]);          // 10
    printf("%d\n", mark[2]);          // 8
    printf("%d\n", mark[3]);          // 17
    printf("%d\n", mark[4]);          // 9
    printf("%d\n", mark[5]);          // \0 at the end of an array
}

// Access elements out of its bound
// If you try to access out of bound elements. The element is not available. This may cause unexpected output (undefined behavior).
// Sometimes you might get an error and some other time your program may run correctly.

// Hence, you should never access elements of an array outside of its bound.