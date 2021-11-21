# Bitwise left shift: Shifts the bits of the number to the left and fills 0 on voids left as a result. Similar effect
# as of multiplying the number with some power of two.

# Use << 1 to multiply number by 2
a = 10  # 0000 1010
x = a << 1  # Shifts to the left. 0000 1010 -> 0001 0100 (20)
print(x)  # 20

# Use << 2 to multiply number by 2, 2 times
a = 10
x = a << 2
print(x)
