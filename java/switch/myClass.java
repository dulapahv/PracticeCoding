/*
switch (expression) {
   case value1 :
     //Statements
     break; //optional
   case value2 :
     //Statements
     break; //optional
    //You can have any number of case statements.
    default : //Optional
       //Statements
}
*/

/* 
The switch expression allows multiple comma-separated values per case and 
returns a value for the whole switch-case block.
*/


public class myClass {
    public static void main(String[] args) {
        int day = 2;
        String dayType  = switch(day) {
            case 1, 2, 3, 4, 5 -> "Working day";
            case 6, 7 -> "Weekend";
            default -> "Invalid day";
        };
        System.out.println(dayType);


        String coffee = "Espresso";
        int price = switch(coffee) {
            case "Espresso" -> 1;
            case "Cappuccino" -> 2;
            case "Latte" -> 3;
            default -> -1;
        };
        System.out.println(price);
    }
}