import java.util.*; 

class Bowling {
    HashMap<String, Integer> players;
    Bowling() {
        players = new HashMap<String, Integer>();
    }
    public void addPlayer(String name, int p) {
        players.put(name, p);
    }
    
    public void getWinner() {
        System.out.println();
        int max = 0;
        String winner = "";
        for (Map.Entry<String, Integer> entry : players.entrySet()) {
            if (entry.getValue() > max) {
                winner = entry.getKey();
                max = entry.getValue();
            }
        }
        System.out.println(winner);
    }
    
}

public class BowlingGame {
    public static void main(String[ ] args) {
        Bowling game = new Bowling();
        Scanner sc = new Scanner(System.in);

        for(int i=0;i<3;i++) {
            String input = sc.nextLine();
            String[] values = input.split(" ");
            String name = values[0];
            int points = Integer.parseInt(values[1]);
            game.addPlayer(name, points);
        }
        game.getWinner();
    }
}