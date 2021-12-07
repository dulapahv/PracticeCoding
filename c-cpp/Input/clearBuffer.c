// C Code to explain why adding
// "while ( (getchar()) != '\n');"
// after "scanf()" statement
// flushes the input buffer
#include<stdio.h>
 
int main()
{
    char str[80], ch;
     
    // scan input from user -
    // GeeksforGeeks for example
    scanf("%s", str);
     
    // flushes the standard input
    // (clears the input buffer)
    while ((getchar()) != '\n');
     
    // scan character from user -
    // 'a' for example
    ch = getchar();
     
    // Printing character array,
    // prints “GeeksforGeeks”)
    printf("%s\n", str);
     
    // Printing character a: It
    // will print 'a' this time
    printf("%c", ch);
 
    return 0;
}

// Using “ while ((getchar()) != ‘\n’); ” : Typing “while ((getchar()) != ‘\n’);” 
// reads the buffer characters till the end and discards them(including newline) and 
// using it after the “scanf()” statement clears the input buffer and allows the input in the desired container.