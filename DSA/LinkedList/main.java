/*
LinkedList
[Data][Pointer to next data (Next)] -> [Data][Pointer to next data (Next)] -> ... -> NULL

Comparable to C++ vector
*/


import java.util.LinkedList;

public class main {
    public static void main(String[] args) {
        LinkedList<String> c = new LinkedList<String>();  // You cannot specify an initial capacity for the LinkedList.
        c.add("Red");
        c.add("Green");
        c.add("Blue");

        c.remove("Red");

        System.out.println(c);
    }
}


/*
Summary:
- Use an ArrayList when you need rapid access to your data.
- Use a LinkedList when you need to make a large number of inserts and/or deletes.
*/