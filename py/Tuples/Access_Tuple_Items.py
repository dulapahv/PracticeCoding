# Access Tuple Items
# You can access tuple items by referring to the index number, inside square brackets:

# Negative Indexing
# Negative indexing means start from the end.

# Range of Indexes
# You can specify a range of indexes by specifying where to start and where to end the range.
# When specifying a range, the return value will be a new tuple with the specified items.

thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[1], "\n",
      thistuple[-1], "\n",  # -1 refers to the last item, -2 refers to the second last item etc.
      thistuple[2:5], "\n",  # The search will start at index 2 (included) and end at index 5 (not included).
      thistuple[:4], "\n",  # By leaving out the start value, the range will start at the first item:
      thistuple[2:], "\n",  # By leaving out the end value, the range will go on to the end of the list:
      thistuple[-4:-1])  # Specify negative indexes if you want to start the search from the end of the tuple:

# Check if Item Exists
# To determine if a specified item is present in a tuple use the in keyword:
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
    print("Yes, 'apple' is in the fruits tuple")
