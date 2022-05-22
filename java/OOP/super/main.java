/*
Constructors from a Super class are not inherited in the subclass.
Thus, the only way to invoke a super class constructor is to use super.

Call-to-Super statement must appear in the first line of the subclass constructor.

When a constructor of a subclass is invoked without calling super class constructor, it
automatically calls a default constructor of a super class (super() is called).

Non-private properties/methods in the super class can be accessed directly by
super.method and super.property.
*/

class Circle {
    int xcenter;
    int ycenter;
    double radius;

    Circle() {
        this(1.0);
    }

    Circle(int x, int y, double r) {
        xcenter = x;
        ycenter = y;
        radius = r;
    }

    Circle(double r) {
        this(0, 0, r);
    }

    double findArea() {
        return Math.PI * Math.pow(radius, 2);
    }

    double findPerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Cylinder extends Circle {
    double height;

    Cylinder() {
        super();
        height = 1.0;
    }

    Cylinder(int x, int y, double r, double h) {
        super(x, y, r);
        height = h;
    }

    Cylinder(double h) {
        height = h;
    }

    double findVolume() {
        return super.findArea() * height;
    }
}

public class main {
    public static void main(String[] args) {
        Circle c1 = new Circle(2, 5, 10);
        System.out.println(c1.findArea());
        System.out.println(c1.findPerimeter());

        Cylinder c2 = new Cylinder(1, 2, 3, 4);
        System.out.println(c2.findVolume());
    }
}
