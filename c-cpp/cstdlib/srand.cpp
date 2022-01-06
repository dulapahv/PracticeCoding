// The srand() function is used to generate truly random numbers.
// This function allows to specify a seed value as its parameter, which is used for the rand() function's algorithm.

#include <iostream>
#include <cstdlib>

int main() {
    srand(98);

    for (int x = 1; x <= 10; x++) {
        std::cout << 1 + (rand() % 6) << std::endl;
    }
}