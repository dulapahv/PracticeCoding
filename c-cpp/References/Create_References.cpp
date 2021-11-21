// Creating References
// A reference variable is a "reference" to an existing variable, and it is created with the & operator:

// string food = "Pizza";  // food variable
// string &meal = food;    // reference to food

// Now, we can use either the variable name food or the reference name meal to refer to the food variable:

#include <iostream>

using namespace std;

int main() {
    string food = "Pizza";
    string &meal = food;

    cout << food << "\n";  // Pizza
    cout << meal << "\n";  // Pizza
}