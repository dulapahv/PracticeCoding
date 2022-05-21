/*
Inheritance is the process that enables one class to acquire the properties (methods and variables) of another.
With inheritance, the information is placed in a more manageable, hierarchical order.

The class inheriting the properties of another is the subclass (also called derived class, or child class);
the class whose properties are inherited is the superclass (base class, or parent class).

The constructor of the superclass is called when the subclass is instantiated.
*/

class Animal {
    protected int legs;
    public void eat() {
        System.out.println("Animal eats");
    }
}


class Dog extends Animal {
    Dog() {
        legs = 4;
    }
}


class main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
    }
}