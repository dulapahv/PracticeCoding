// The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. 
// To achieve this, you must declare class variables/attributes as private (cannot be accessed from outside the class). 
// If you want others to read or modify the value of a private member, you can provide public get and set methods.

#include <iostream>

class Employee {
    private:
        int salary;
    
    public:
        void setSalary(int s) { salary = s; }

        int getSalary() { return salary; }
};

int main() {
    Employee myObj;
    myObj.setSalary(50000);
    std::cout << myObj.getSalary();
    return 0;
}