# Change the color of the turtle: This changes the fill color.
# Change the color of the pen: This changes the outline or the ink color.

import turtle

t = turtle.Turtle()

t.shapesize(3, 3, 3)  # To see color more clearly

# To change the color of the turtle (or the fill), type the following:
# t.fillcolor("red")

# To change the color of the pen (or the outline), type the following:
# t.pencolor("green")

# You can type like this for short
t.color("green", "red")
t.pensize(5)
t.fd(200)

turtle.done()
