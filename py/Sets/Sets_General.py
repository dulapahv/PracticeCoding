# Set
# Sets are used to store multiple items in a single variable.

# A set is a collection which is both unordered and unindexed.
# Sets are unordered, so you cannot be sure in which order the items will appear.

# Sets are written with curly brackets.
thisset = {"apple", "banana", "cherry"}
print(thisset)  # {'apple', 'banana', 'cherry'}

# Set Items
# Set items are unordered, unchangeable, and do not allow duplicate values.

# Unordered
# Unordered means that the items in a set do not have a defined order.

# Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

# Unchangeable
# Sets are unchangeable, meaning that we cannot change the items after the set has been created.
# Once a set is created, you cannot change its items, but you can add new items.

# Duplicates Not Allowed
# Sets cannot have two items with the same value.
# Duplicate values will be ignored:
thisset = {"apple", "banana", "cherry", "apple"}
print(thisset)  # {'apple', 'banana', 'cherry'}

# Get the Length of a Set
# To determine how many items a set has, use the len() method.
thisset = {"apple", "banana", "cherry"}
print(len(thisset))  # 3

# The set() Constructor
# It is also possible to use the set() constructor to make a set.
thisset = set(("apple", "banana", "cherry"))  # note the double round-brackets
print(thisset)  # {'apple', 'banana', 'cherry'}
