import java.util.Formatter;

public class Create {
    public static void main(String[] args) {
        try {
            Formatter f = new Formatter("new.txt");

            f.format("%s %s %s", "1", "Nunoko", "Nomiya \r\n");
            f.format("%s %s %s", "2", "Hello", "World");

            f.close();
        }
        catch (Exception e) {
            System.out.println("Error");
        }
    }
}
