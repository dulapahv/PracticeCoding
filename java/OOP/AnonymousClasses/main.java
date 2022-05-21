/* Anonymous classes are a way to extend the existing classes on the fly. */

/*
The modification is applicable only to the current object, and not the class itself. 
So if we create another object of that class, 
the start method's implementation will be the one defined in the class.
*/

class Machine {
    public void start() {
        System.out.println("Starting...");
    }
}

public class main {
    public static void main(String[] args) {
        Machine m = new Machine() {
            @Override
            public void start() {
                System.out.println("Uwoooooo!");
            }
        };

        m.start();
    }
}

/*
The @Override annotation is used to make your code easier to understand, 
because it makes it more obvious when methods are overridden.
*/