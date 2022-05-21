public class array {
    public static void main(String[] args) {
        /* General */ 
        // For example, to declare an array of integers:
        int[] arr;
        // Define the array's capacity, or the number of elements it will hold. To accomplish this, use the keyword new
        arr = new int[5];
        // It can be simplified into int[] arr = new int[5];

        String[] myNames = {"A", "B", "C", "D", "E"};
        System.out.println(myNames[2]);


        /* Multidimensional Array */
        int[][] sample = {{1, 2, 3}, {4, 5, 6}};
        System.out.println(sample[0][2]);


        /* Array length */
        System.out.println(myNames.length);
    }
}

/*
Summary:
- Use an ArrayList when you need rapid access to your data.
- Use a LinkedList when you need to make a large number of inserts and/or deletes.
*/