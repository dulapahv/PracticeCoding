public class Vehicle {
    private int maxSpeed;
    private int wheels;
    private String color;
    private double fuelCapacity;

    public void horn() {
        System.out.println("Beep!");
    }
}

/*
It's a best practice to keep the variables within a class private.
The variables are accessible and modified using Getters and Setters.
- Private
- Protected
- Public
*/