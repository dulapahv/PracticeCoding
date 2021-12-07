#include <stdio.h>

int main() {
    char name[20];
    int age;
    // read string input from the user until \n is entered
    // \n is discarded
    scanf("%[^\n]%*c", name);
    scanf("%d", &age);

    puts(name);
    printf("%d\n", age);
}