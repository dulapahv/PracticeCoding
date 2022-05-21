import java.util.Scanner;

public class ConvertDate {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int days = scanner.nextInt();
		
		int hours = days * 24;
        int minutes = hours * 60;
        int seconds = minutes * 60;

        System.out.println(seconds);
	}
}