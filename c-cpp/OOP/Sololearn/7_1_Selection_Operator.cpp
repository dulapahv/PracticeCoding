// #ifndef & #define

// ifndef stands for "if not defined". The first pair of statements tells the program to 
// define the MyClass header file if it has not been defined already. endif ends the condition.

#ifndef MYCLASS_H
#define MYCLASS_H

class MyClass
{
  public:
    MyClass();
  protected:
    private:
};

#endif // MYCLASS_H 

// They prevent the header file from being included more than once within one file.