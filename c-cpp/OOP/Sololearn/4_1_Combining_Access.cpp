#include <iostream>
#include <string>

class myClass {
    public:
        void setName(std::string x) {
            name = x;
        }
        std::string getName() {
            return name;
        }
    private:
        std::string name;
};

int main() {
    myClass myObj;
    myObj.setName("n0miya");
    std::cout << myObj.getName();
}