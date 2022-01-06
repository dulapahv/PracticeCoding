#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    srand(time(0));

    for (int x = 1; x <= 10; x++) {
        std::cout << 1 + (rand() % 6) << std::endl;
    }
}