import java.util.HashSet;

public class main {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<String>();

        set.add("A");
        set.add("B");
        set.add("C");

        System.out.println(set);
    }
}

/*
The HashSet class does not automatically retain the order of the elements as they're added. 
To order the elements, use a LinkedHashSet, which maintains a linked list of the set's elements in the order in which they were inserted.

A hash table stores information through a mechanism called hashing, 
in which a key's informational content is used to determine a unique value called a hash code.
So, basically, each element in the HashSet is associated with its unique hash code.
*/

