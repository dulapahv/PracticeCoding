#include <iostream>

using namespace std;

int main() {
    // ++i will increment the value of i, and then return the incremented value. (Pre Increment)
    int i = 1;
    int j = ++i;
    cout << "i = " << i << " | "
         << "j = " << j << endl; // i = 2 | j = 2

    // i++ will increment the value of i, but return the original value that i held before being incremented. (Post Increment)
    int x = 1;
    int y = x++;
    cout << "x = " << x << " | "
         << "y = " << y << endl; // x = 2 | y = 1

    // It will matter when, for exmaple:
    for (int a = 0; a < 5;) {
        cout << ++a << " ";  // 1 2 3 4 5
    }
    cout << "\n";

    for (int b = 0; b < 5;) {
        cout << b++ << " ";  // 0 1 2 3 4
    }
}
