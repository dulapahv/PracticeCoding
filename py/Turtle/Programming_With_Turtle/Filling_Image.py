import turtle

t = turtle.Turtle()

t.fillcolor('blue')
t.begin_fill()
for i in range(4):
    t.fd(100)
    t.rt(90)
t.end_fill()
t.begin_fill()
t.fillcolor('#44FF3B')
t.circle(50)
t.end_fill()

turtle.done()
