# As a Python developer you can choose to throw an exception if a condition occurs.
# To throw (or raise) an exception, use the raise keyword.

# Raise an error and stop the program if x is lower than 0:
x = -1
if x < 0:
    raise Exception("Sorry, no numbers below zero")
# Exception: Sorry, no numbers below zero

# Raise a TypeError if x is not an integer:
# x = "hello"
# if not type(x) is int:
#    raise TypeError("Only integers are allowed")
# Exception: Only integers are allowed
