// In C++, object composition involves using classes as member variables in other classes.
// This sample program demonstrates composition in action. It contains Person and Birthday classes, 
// and each Person will have a Birthday object as its member.

#include <iostream>

class Birthday {
    public:
        Birthday(int m, int d, int y) : month(m), day(d), year(y) {}

        void printDate() {
            std::cout << month << "/" << day << "/" << year << std::endl;
        }    
    
    private:
        int month;
        int day;
        int year;
};

// Our Birthday class has three member variables. 
// It also has a constructor that initializes the members using a member initialization list.