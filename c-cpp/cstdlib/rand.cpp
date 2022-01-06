#include <iostream>
#include <cstdlib>

int main() {
    std::cout << rand();
    
    for (int x = 1; x <= 10; x++) {
        // Randome number from 1 through 9
        std::cout << 1 + (rand() % 9) << std::endl;
    }
}