// puts() can be preferred for printing a string because 
// it is generally less expensive (implementation of puts() is generally simpler than printf())
// and if the string has formatting characters like ‘%s’, then printf() would give unexpected results.

// Also note that puts() moves the cursor to next line.
// If you do not want the cursor to be moved to next line, then use fputs(). 

#include <stdio.h>

int main() {
    puts("Dulapah");
    puts("Vibulsanti");
    // Dulapah
    // Vibulsanti

    fputs("Sitthapong", stdout);
    fputs("Jitsuparp", stdout);
    // SitthapongJitsuparp

    puts("\nNeko%smaid");  // can output special char like '%'
    // Neko%smaid
}