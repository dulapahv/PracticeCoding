print("Hello,", "how are you?")
print("Hello," + " how are you?")
print("%s" % "Hello, how are you?")
print("%s%s" % ("Hello, ", "how are you?"))
print("{}, how {} you?".format("Hello", "are"))

txt = "{}, how are you?"
print(txt.format("Hello"))

txt = "{0}, {1}"
print(txt.format("Hello", "how are you?"))
# Hello, how are you?
