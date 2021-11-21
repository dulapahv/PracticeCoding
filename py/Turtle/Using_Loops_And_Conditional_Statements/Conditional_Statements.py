import turtle

t = turtle.Turtle()

u = input("Would you like me to draw a shape? Type yes or no: ")
if u == "yes":
    t.circle(50)
elif u == "no":
    print("Okay")
else:
    print("Invalid Reply")

turtle.done()
