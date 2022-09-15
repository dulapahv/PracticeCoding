/*
LinkedList
[Data][Pointer to next data (Next)] -> [Data][Pointer to next data (Next)] -> ... -> NULL

Comparable to C++ vector
*/

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    head = (struct Node*) malloc(sizeof(struct Node));
    second = (struct Node*) malloc(sizeof(struct Node));
    third = (struct Node*) malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    while(head != NULL) {
        printf("%d\n", head->data);
        head = head->next;
    }

    return 0;
}