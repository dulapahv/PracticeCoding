import turtle

t = turtle.Turtle()

# Draw a square
t.fd(100)
t.rt(90)
t.fd(100)
t.rt(90)
t.fd(100)
t.rt(90)
t.fd(100)
t.undo()

turtle.done()

# This undoes the last command that you ran. If you want to undo your last three commands,
# then you would type t.undo() three times.
