n = input()
temp = input().split(' ')
chk = []
if not n.isalnum():
	print("0")
	exit()
for i in range(int(n)):
	chk.append(abs(int(temp[i])))
minimum = min(chk)
index = chk.index(minimum)
print(temp[index])