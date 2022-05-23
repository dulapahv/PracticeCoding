import java.awt.Graphics;
import javax.swing.JComponent;
import javax.swing.JFrame;

class MyCanvas extends JComponent {
    public void paint(Graphics g) {
        g.drawArc(10, 10, 200, 500, 0, 90);
        g.drawRect(10, 10, 200, 500);
    }
}

public class DrawArc {
    public static void main(String[] args) {
        JFrame window = new JFrame("DrawArc");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setBounds(30, 30, 500, 500);
        window.getContentPane().add(new MyCanvas());
        window.setVisible(true);
    }
}
