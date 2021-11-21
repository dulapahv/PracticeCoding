# Remove Item
# To remove an item in a set, use the remove(), or the discard() method.
# If the item to remove does not exist, remove() will raise an error.
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)  # {'cherry', 'apple'}

# If the item to remove does not exist, discard() will NOT raise an error.
thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)  # {'cherry', 'apple'}

# You can also use the pop() method to remove an item, but this method will remove the last item. Remember that sets
# are unordered, so you will not know what item that gets removed. The return value of the pop() method is the
# removed item.
# Sets are unordered, so when using the pop() method, you do not know which item that gets removed.
thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x)  # banana
print(thisset)  # {'cherry', 'apple'}

# The clear() method empties the set:
thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)  # set()

# The del keyword will delete the set completely:
thisset = {"apple", "banana", "cherry"}
del thisset
# print(thisset)  # ERROR
