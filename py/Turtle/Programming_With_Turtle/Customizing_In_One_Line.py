# Suppose you want to set your turtle’s characteristics to the following:
# Pen color: purple
# Fill color: orange
# Pen size: 10
# Pen speed: 9

import turtle

t = turtle.Turtle()

t.pen(pencolor="purple", fillcolor="orange", pensize=10, speed=9)
t.begin_fill()
t.circle(90)
t.end_fill()

turtle.done()

# Instead of writing like this:
# t.pencolor("purple")
# t.fillcolor("orange")
# t.pensize(10)
# t.speed(9)
# t.begin_fill()
# t.circle(90)
# t.end_fill()
