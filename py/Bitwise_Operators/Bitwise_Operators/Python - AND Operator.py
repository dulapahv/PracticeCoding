# Bitwise AND operator: Returns 1 if both the bits are 1 else 0.
# 1 & 0 = 0
# 0 & 1 = 0
# 1 & 1 = 1
# 0 & 0 = 0

a = 10  # 1010
b = 4  # 0100
x = a & b
print(x)  # 0

# Look vertically
# a = 1 | 0 | 1 | 0
# b = 0 | 1 | 0 | 0
# ------------------
# x = 0 | 0 | 0 | 0 = 0 (Decimal)

# Use to check whether a number is even (0) or odd (1) by looking at the rightmost bit.
n = 15  # 1111
if n & 1:  # 1111 & 0001 = 0001 (Rightmost bit is 1, so "odd")
    print("odd")
else:
    print("even")
# odd
