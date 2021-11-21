#include <iostream>

using namespace std;

void fillCupValue(int cupOfCoffee){
    while(cupOfCoffee < 100){
        cupOfCoffee++;
    }
}

void fillCupRef(int *cupOfCoffee){
    while(*cupOfCoffee < 100){
        *cupOfCoffee += 1;
    }
}

int main(){
    int cupOfCoffee = 0;

    fillCupValue(cupOfCoffee);
    cout << "Coffee: " << cupOfCoffee << "%" << endl; // Coffee: 0%

    fillCupRef(&cupOfCoffee);
    cout << "Coffee: " << cupOfCoffee << "%" << endl; // Coffee: 100%
}