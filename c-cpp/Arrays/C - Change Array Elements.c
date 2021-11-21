#include <stdio.h>

int main()
{
    int mark[5] = {19, 10, 8, 17, 9};

    // make the value of the third element to -1
    mark[2] = -1;
    printf("%d\n", mark[2]); // -1

    // make the value of the fifth element to 0
    mark[4] = 0;
    printf("%d\n", mark[4]); // 0
}

// Here, we have used a for loop to take 5 inputs from the user and store them in an array. 
// Then, using another for loop, these elements are displayed on the screen.