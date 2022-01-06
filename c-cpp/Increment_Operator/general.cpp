// ++x; // prefix
// x++; // postfix
// Prefix increments the value, and then proceeds with the expression.
// Postfix evaluates the expression and then performs the incrementing.

#include <iostream>

int main() {
    // Prefix example:
    int x = 5;
    int y = ++x;
    // x is 6, y is 6

    // Postfix example:
    int x = 5;
    int y = x++;
    // x is 6, y is 5
}