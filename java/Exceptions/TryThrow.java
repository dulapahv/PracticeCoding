public class TryThrow {
    static int div(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("ERROR");
        }
        else {
            return a / b;
        }

        /* or
        throws ArithmeticException("ERROR") {
            if (b == 0) {
                throw new ArithmeticException("ERROR");
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(div(2, 0));
    } */
}