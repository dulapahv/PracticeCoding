# Sometimes, you may want to move your turtle to another point on the screen without drawing anything on the
# screen itself.

import turtle

t = turtle.Turtle()

t.fd(100)
t.rt(90)
t.penup()
t.fd(100)
t.rt(90)
t.pendown()
t.fd(100)
t.rt(90)
t.penup()
t.fd(100)
t.pendown()

turtle.done()
