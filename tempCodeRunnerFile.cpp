#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    int rev = 0, digit, num = x;
    do {
        digit = num % 10;
        rev = (rev * 10) + digit;
        num = num / 10;
    } while (num != 0);

    cout << num;
    if (x == rev) {
        return true;
    }
    else {
        return false;
    }
}

int main() {
    int n;
    cin >>n;
    
    if(isPalindrome(n)) {
        cout <<n<<" is a palindrome";
    }
    else {
        cout << n<<" is NOT a palindrome";
    }
    return 0;
}