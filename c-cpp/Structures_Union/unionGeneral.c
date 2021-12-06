// A union is a user-defined type similar to structs in C except for one key difference.

// Structures allocate enough space to store all their members, whereas unions can only hold one member value at a time

#include <stdio.h>

union car
{
  char name[50];
  int price;
};

int main()
{
  union car car1, car2, *car3;
  return 0;
}

// Another way of creating union variables is:
// union car
// {
//   char name[50];
//   int price;
// } car1, car2, *car3;

// Access members of a union
// We use the . operator to access members of a union. And to access pointer variables, we use the -> operator.

// In the above example,

// To access price for car1, car1.price is used.
// To access price using car3, either (*car3).price or car3->price can be used.


