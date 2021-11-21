# The while loop is used to perform a certain task while a condition is still satisfied. If the condition is no longer
# satisfied, then your code will terminate the process.

import turtle

t = turtle.Turtle()

n = 10
while n <= 40:
    t.circle(n)
    n += 10

turtle.done()
