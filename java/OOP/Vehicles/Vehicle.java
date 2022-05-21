public class Vehicle {
    private int maxSpeed;
    private int wheels;
    private String color;
    private double fuelCapacity;

    public void horn() {
        System.out.println("Beep!");
    }

    // Constructor
    Vehicle() {}
    Vehicle(String c) {
        setColor(c);
    }

    // Getter
    public String getColor() {
        return color;
    }

    // Setter
    public void setColor(String c) {
        this.color = c;
    }
}