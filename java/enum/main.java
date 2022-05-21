/* An Enum is a special type used to define collections of constants. */

enum Rank {
    SOLDIER,
    SERGEANT,
    CAPTAIN
}

public class main {
    public static void main(String[] args) {
        Rank a = Rank.CAPTAIN;

        String output = switch(a) {
            case SOLDIER -> "Soldier says hi!";
            case SERGEANT -> "Sergeant says hi!";
            case CAPTAIN -> "Captain says hi!";
        };

        System.out.println(output);
    }
}
