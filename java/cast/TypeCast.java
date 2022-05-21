class A {
    public void print() {
        System.out.println("A");
    }
}


class B extends A {
    public void print() {
        System.out.println("B");
    }
}

public class TypeCast {
    public static void main(String[] args) {
        A object = new B();
        B b = (B) object;
        b.print();
    }
}

/*
Here, in this code we have A object = new B(); 
here the instance of superclass A is created with reference to subclass B so whenever 
the method print() is called using "object" instance it will execute class B print() method. 
again we have B b = new B(); the general syntax for creating the instance of class B with 
reference to class B but new B() = A object [ first line ] so it becomes B b = A object; 
again when downcasting we can say A=(B) this becomes B b = (B) object; so it shows that 
we have created two instances of class B (b, object) so b.print() will execute the print method of class B
*/