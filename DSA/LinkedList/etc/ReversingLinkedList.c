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

    struct Node* temp = head;
    while(temp != NULL) {
        printf("%d\n", temp->data);
        temp = temp->next;
    }

    /**REVERSING**/
    struct Node* prev = NULL;
    struct Node* curr = head;
    struct Node* next = NULL;

    while(curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;

    temp = head;
    while(temp != NULL) {
        printf("%d\n", temp->data);
        temp = temp->next;
    }

    return 0;
}