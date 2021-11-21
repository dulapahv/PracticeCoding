# Bitwise right shift: Shifts the bits of the number to the right and fills 0 on voids left as a result. Similar
# effect as of dividing the number with some power of two.

a = 10  # 1010
x = a >> 1  # Shifts to the right. 1010 -> 0101 (5)
print(x)  # 5

# Works as dividing number with 2
