import java.awt.Graphics;
import javax.swing.JComponent;
import javax.swing.JFrame;

class MyCanvas extends JComponent {
    private static int xPoints[] = { 100, 320, 100, 10 };
    private static int yPoints[] = { 150, 350, 10, 10 };

    public void paint(Graphics g) {
        g.drawPolygon(xPoints, yPoints, 4);
    }
}

public class DrawPolygon {
    public static void main(String[] args) {
        JFrame window = new JFrame("DrawOval");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setBounds(30, 30, 500, 500);
        window.getContentPane().add(new MyCanvas());
        window.setVisible(true);
    }
}
