/*
The idea behind encapsulation is to ensure that implementation details are not visible to users.
The variables of one class will be hidden from the other classes, accessible only through the methods of the current class.
This is called data hiding.

To achieve encapsulation in Java, declare the class' variables as private and provide
public setter and getter methods to modify and view the variables' values.
*/

class BankAccount {
    private double balance = 0;

    public void deposit(double x) {
        if (x > 0) {
            balance += x;
        }
    }
}

public class main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
