/*
Java is a multi-threaded programming language. 
This means that our program can make optimal use of available resources by running 
two or more components concurrently, with each component handling a different task.
*/

/*
There are two ways to create a thread.
1. Extend the Thread class
Inherit from the Thread class, override its run() method, and write the functionality of the thread in the run() method.
Then you create a new object of your class and call it's start method to run the thread.
*/

class Loader extends Thread {
    public void run() {
        System.out.println("Hello");
    }
}

public class main {
    public static void main(String[] args) {
        Loader obj = new Loader();
        obj.start();
    }
}

/*
The other way of creating Threads is implementing the Runnable interface.
Implement the run() method. Then, create a new Thread object, 
pass the Runnable class to its constructor, and start the Thread by calling the start() method.
*/

class Loader implements Runnable {
    public void run() {
        System.out.println("Hello");
    }
}

public class main {
    public static void main(String[] args) {
        Thread t = new Thread(new Loader());
        t.start();
    }
}