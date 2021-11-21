# Access Items
# List items are indexed and you can access them by referring to the index number:

# Negative Indexing
# Negative indexing means start from the end
# -1 refers to the last item, -2 refers to the second last item etc.

# Range of Indexes
# You can specify a range of indexes by specifying where to start and where to end the range.
# When specifying a range, the return value will be a new list with the specified items.

# Range of Negative Indexes
# Specify negative indexes if you want to start the search from the end of the list:

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[1], "\n",  # banana
      thislist[-1], "\n",  # mango
      thislist[2:5], "\n",  # ['cherry', 'orange', 'kiwi'] The search will start at index 2(included) and end at
      # index 5(not included).
      thislist[:4], "\n",  # ['apple', 'banana', 'cherry', 'orange'] By leaving out the start value, the range will
      # start at the first item.
      thislist[2:], "\n",  # ['cherry', 'orange', 'kiwi', 'melon', 'mango'] By leaving out the end value, the range
      # will go on to the end of the list:
      thislist[-4:-1], "\n",  # ['orange', 'kiwi', 'melon']
      thislist[-2:4], "\n",  # Cannot reverse. Result []
      thislist[-2:4:-1], "\n",  # ['melon']
      thislist[3:-1], "\n",  # ['orange', 'kiwi', 'melon']
      thislist[::-1], "\n",  # ['mango', 'melon', 'kiwi', 'orange', 'cherry', 'banana', 'apple'] Reverse list
      thislist[1:5:2], "\n",  # ['banana', 'orange']  From [1:5] and count by every 2 item
      (len(thislist) - 1))  # 6 Useful when the list is so big

list0 = [9, 10]
list1 = [5, 6, [7, 8], list0]
newlist = [[1, 2], [3], 4, list1]
print(newlist[0][0], "\n",  # 1
      newlist[0][1], "\n",  # 2
      newlist[1], "\n",  # [3]
      newlist[1][0], "\n",  # 3
      newlist[2], "\n",  # 4
      newlist[3][0], "\n",  # 5
      newlist[3][3][1])  # 10

# Check if Item Exists
# To determine if a specified item is present in a list use the in keyword:
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
    print("Yes, 'apple' is in the fruits list")
