# Bitwise operators

# In Python, bitwise operators are used to performing bitwise calculations on integers. The integers are first
# converted into binary and then operations are performed on bit by bit, hence the name bitwise operators. Then the
# result is returned in decimal format.

# Note: Python bitwise operators work only on integers.

# OPERATOR	DESCRIPTION	            SYNTAX
# &	        Bitwise AND	            x & y
# |	        Bitwise OR	            x | y
# ~	        Bitwise NOT	            ~x
# ^	        Bitwise XOR	            x ^ y
# >>	    Bitwise right shift	    x>>
# <<	    Bitwise left shift	    x<<

# You can check bits of the integer by:
x = 5
print("{0:b}".format(x))  # 0101
