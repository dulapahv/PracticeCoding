results = [10.22111, 30.33, 40.69999]

for i, result in enumerate(results):
    print(f" Index: {i} Original: {result:>10}, Rounded: {result:>.2f}")

# {result:>10} ">" means align right. The number preceding specifies how much space.

# "<" Left
# ">" Right
# "^" Center
# "="

# Spacing:
x = "HI"
print("YES, {:10s}. YES, {:5s}. TEST".format(x, x))  # YES, HI        . YES, HI   . TEST
