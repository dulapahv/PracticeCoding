import java.util.ArrayList;
import java.util.Collections;

public class sorting {
    public static void main(String[] args) {
        ArrayList<String> animals = new ArrayList<String>();

        animals.add("tiger");
        animals.add("cat");
        animals.add("snake");
        animals.add("dog");

        Collections.sort(animals);

        System.out.println(animals);
    }
}

/*
Other useful methods in the Collections class:
max(Collection c): Returns the maximum element in c as determined by natural ordering.
min(Collection c): Returns the minimum element in c as determined by natural ordering.
reverse(List list): Reverses the sequence in list.
shuffle(List list): Shuffles (i.e., randomizes) the elements in list.
*/