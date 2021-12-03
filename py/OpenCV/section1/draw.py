import cv2 as cv
import numpy as np

blank = np.zeros((500, 500, 3), dtype = "uint8")
cv.imshow("Blank", blank)

img = cv.imread("py\OpenCV\section1\Photos\cat_large.jpg")
cv.imshow("Cat", img)

# Paint the image a color
blank[:] = 0, 0, 255
cv.imshow("Green", blank)

# Draw a rectangle
# cv.rectangle(blank, (0, 0), (250, 250), (0, 255, 0), thickness=2)
cv.rectangle(blank, (0, 0), (blank.shape[1]//2, blank.shape[0]//2), (0, 255, 0), thickness=2)
cv.imshow("Rectangle", blank)

# Draw a circle

cv.waitKey(0)