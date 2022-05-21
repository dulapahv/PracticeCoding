import java.util.Scanner;

abstract class Shape {
    int width;

    abstract void area();
}

class Square extends Shape {
    Square(int s) {
        width = s;
    }

    void area() {
        System.out.println(width * width);
    };
}

class Circle extends Shape {
    Circle(int r) {
        width = r;
    }

    void area() {
        System.out.println(Math.PI * width * width);
    }
}

class Shapes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();

        Square a = new Square(x);
        Circle b = new Circle(y);
        a.area();
        b.area();
    }
}