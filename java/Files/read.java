import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class read {
    public static void main(String[] args) {
        try {
            File x = new File("test.txt");

            Scanner sc = new Scanner(x);

            while(sc.hasNext()) {
                System.out.println(sc.nextLine());
            }

            sc.close();
        }
        catch (FileNotFoundException e) {
            System.out.println("Error");
        }        
    }
}
