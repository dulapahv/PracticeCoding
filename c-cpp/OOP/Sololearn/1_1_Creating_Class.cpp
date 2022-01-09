#include <iostream>

class BankAccount {
    public:
        void sayHi() {
            std::cout << "Hi" << std::endl;
        }
};

int main() {
    BankAccount test;
    test.sayHi();
}