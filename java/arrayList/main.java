/*
One such class is the ArrayList. Standard Java arrays are of a fixed length, 
which means that after they are created, they cannot expand or shrink.
On the other hand, ArrayLists are created with an initial size, 
but when this size is exceeded, the collection is automatically enlarged.
When objects are removed, the ArrayList may shrink in size.

Comparable to C++ vector
*/

import java.util.ArrayList;

public class main {
    public static void main(String[] args) {
        ArrayList<String> colors = new ArrayList<String>();  // You can also specify known size in ()
        colors.add("Red");
        colors.add("Green");
        colors.add("Blue");

        colors.remove("Red");

        System.out.println(colors);
        System.out.println(colors.size());
        System.out.println(colors.get(1));
    }
}
