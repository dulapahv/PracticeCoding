#include <stdio.h>

union unionJob
{
   //defining a union
   char name[32];
   float salary;
   int workerNo;
} uJob;

struct structJob
{
   char name[32];
   float salary;
   int workerNo;
} sJob;

int main()
{
   printf("size of union = %d bytes", sizeof(uJob));
   printf("\nsize of structure = %d bytes", sizeof(sJob));
   return 0;
}

// size of union = 32
// size of structure = 40

// Here, the size of sJob is 40 bytes because
// the size of name[32] is 32 bytes
// the size of salary is 4 bytes
// the size of workerNo is 4 bytes
// However, the size of uJob is 32 bytes. It's because the size of a union variable will always be the size of its largest element. 
// In the above example, the size of its largest element, (name[32]), is 32 bytes.

// With a union, all members share the same memory.