# Bitwise not operator: Returns one’s complement of the number.

a = 10  # 1010
x = ~a
print(x)  # -11

# ~ = add 0001 (1) to bits and then change value to negative
# a = 1 | 0 | 1 | 0
# 1 = 0 | 0 | 0 | 1
# ------------------
# x = -1 | 0 | 1 | 1 = -11 (Decimal)
