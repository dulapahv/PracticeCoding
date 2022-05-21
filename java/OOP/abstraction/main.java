abstract class Animal {
    int legs = 0;
    abstract void makeSound();
}


class Cats extends Animal {
    public void makeSound() {
        System.out.println("nya!");
    }
}