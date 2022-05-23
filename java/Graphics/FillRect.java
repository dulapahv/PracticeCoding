import java.awt.Graphics;
import javax.swing.JComponent;
import javax.swing.JFrame;

class MyCanvas extends JComponent {
    public void paint(Graphics g) {
        g.fillRect(10, 10, 200, 400);
    }
}

public class FillRect {
    public static void main(String[] args) {
        JFrame window = new JFrame("FillRect");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setBounds(30, 30, 500, 500);
        window.getContentPane().add(new MyCanvas());
        window.setVisible(true);
    }
}
