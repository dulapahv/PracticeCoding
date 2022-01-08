// class MyClass {
//   public:
//    MyClass(int a, int b) {
//     regVar = a;
//     constVar = b;
//    }
//   private:
//     int regVar;
//     const int constVar;
// };
// ERROR

// This class has two member variables, regVar and constVar.
// It also has a constructor that takes two parameters, which are used to initialize the member variables.
// Running this code returns an error, because one of its member variables is a constant,
// which cannot be assigned a value after declaration.

// In cases like this one, a member initialization list can be used to assign values to the member variables.

class MyClass {
  public:
    MyClass(int a, int b) : regVar(a), constVar(b) {
    }

  private:
    int regVar;
    const int constVar;
};