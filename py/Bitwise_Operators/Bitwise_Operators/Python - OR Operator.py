# Bitwise or operator: Returns 1 if either of the bit is 1 else 0.
# 1 | 0 = 1
# 0 | 1 = 1
# 1 | 1 = 1
# 0 | 0 = 1

a = 10  # 1010
b = 4  # 0100
x = a | b
print(x)  # 14

# Look vertically
# a = 1 | 0 | 1 | 0
# b = 0 | 1 | 0 | 0
# ------------------
# x = 1 | 1 | 1 | 0 = 14 (Decimal)

# We can say that Bitwise OR Operator functions similarly to addition.
