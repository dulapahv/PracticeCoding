/*
Read a byte - nextByte()
Read a short - nextShort()
Read an int - nextInt()
Read a long - nextLong()
Read a float - nextFloat()
Read a double - nextDouble()
Read a boolean - nextBoolean()
Read a complete line - nextLine()
Read a word - next()
*/


import java.util.Scanner;

public class myClass {
    public static void main(String[] args) throws Exception{
        Scanner myVar = new Scanner(System.in);
        System.out.println(myVar.nextLine());
    }
}