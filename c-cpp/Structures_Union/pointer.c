// struct name {
//     member1;
//     member2;
//     .
//     .
// };

// int main()
// {
//     struct name *ptr, Harry;
// }


#include <stdio.h>
#include <string.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person *ptr, judge;
    ptr = &judge;

    printf("Enter name: ");
    scanf("%s", &ptr->name);  // equivalent to *ptr.name

    printf("Enter age: ");
    scanf("%d", &ptr->age);

    puts(ptr->name);
    printf("%d\n", ptr->age);
}