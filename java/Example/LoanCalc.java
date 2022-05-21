import java.util.Scanner;

class LoanCalc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
		int amount = scanner.nextInt();
		
        for(int i = 0; i < 3; i++) {
            amount *= 0.9;
        }

        System.out.println(amount);
    }
}