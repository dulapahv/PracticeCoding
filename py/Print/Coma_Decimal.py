# Add a coma :
x = 1000
print('{:,}'.format(x))  # 1,000

# Add a coma and display decimal points:
x = 80 / 99  # 0.808080...
print('{:,.2f}'.format(x))  # 0.81 (Rounded)
print('{:,.3f}'.format(x))  # 0.808
print('{:,.4f}'.format(x))  # 0.8081 (Rounded)

# Express percentages with 2 decimal points:
x = 80 / 99
print('{:.2%}'.format(x))  # 80.81%

# Round and show decimals:
x = 10.2299999
print('{:.2f}'.format(round(x, 2)))  # 10.23
print('{:.3f}'.format(round(x, 1)))  # 10.200


