# The try block lets you test a block of code for errors.

# The except block lets you handle the error.
# The finally block lets you execute code, regardless of the result of the try- and except blocks.
# Exception_Handling

# When an error occurs, or exception as we call it, Python will normally stop and generate an error message.
# These exceptions can be handled using the try statement:
# The try block will generate an exception, because x is not defined:
try:
    print(x)
except:
    print("An exception occurred")
# An exception occurred

# Since the try block raises an error, the except block will be executed.

# Without the try block, the program will crash and raise an error:
# This statement will raise an error, because x is not defined:
# print(x)  # ERROR

# Exception_Handling format
# try:
    # Some code...
# except:
    # optional block
    # Handling of exception (if required)
# else:
    # execute if no exception
# finally:
    # Some code... (always executed)
