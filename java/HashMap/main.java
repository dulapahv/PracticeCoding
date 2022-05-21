/* Comparable to python dictionary */

import java.util.HashMap;

public class main {
    public static void main(String[] args) {
        HashMap<String, Integer> points = new HashMap<String, Integer>();

        points.put("Nunoko", 154);
        points.put("Nomiya", 42);

        System.out.println(points.get("Nunoko"));
    }
}
