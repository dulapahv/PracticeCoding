# There are four directions that a turtle can move in:
# 1. Forward
# 2. Backward
# 3. Left
# 4. Right
# The turtle moves .forward() or .backward() in the direction that it’s facing. You can change this direction by
# turning it .left() or .right() by a certain degree. You can try each of these commands like so:
import turtle

t = turtle.Turtle()  # You do not really need this line but the syntax of moving will be, for example, turtle.right(90)
t.right(90)  # t.rt()
t.forward(100)  # t.fd()
t.left(90)  # t.lt()
t.backward(100)  # t.bk()

turtle.done()  # Must use the word turtle

# You can also draw a line from your current position to any other arbitrary position on the screen.
# This is done with the help of coordinates (quadrants).
# t.goto(100,100)

# To bring the turtle back to its home position, you type the following:
# t.home()
