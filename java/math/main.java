/*
Math.abs()
Math.ceil()
Math.floor()
Math.max()
Math.min()
Math.pow()
Math.sqrt()
Math.sin()
Math.cos()
*/

import java.util.Scanner;

class main {
   public static void main(String[] args) {
       Scanner read = new Scanner(System.in);
       int num1 = read.nextInt();
       int num2 = read.nextInt();

       System.out.println(Math.pow(num1, num2));
       
   }
}