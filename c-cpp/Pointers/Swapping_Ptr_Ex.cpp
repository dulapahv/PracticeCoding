#include <iostream>

using namespace std;

void swapDouble(double *xPtr, double *yPtr) {
    double temp = *xPtr;
    *xPtr = *yPtr;
    *yPtr = temp;
}

int main() {
    double x, y;
    cout << "x = ";
    cin >> x;
    cout << "y = ";
    cin >> y;

    swapDouble(&x, &y);
    cout << "x = " << x << " y = " << y << endl;
    return 0;
}