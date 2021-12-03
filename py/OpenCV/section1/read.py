import cv2 as cv

# Reading images
# img = cv.imread("py\OpenCV\section1\Photos\cat_large.jpg")
# cv.imshow("Cat", img)

# Reading videos
capture = cv.VideoCapture("py\OpenCV\section1\Videos\dog.mp4") # 0 for webcam
while True:
    isTrue, frame = capture.read()
    cv.imshow("Video", frame)

    if cv.waitKey(20) & 0xFF == ord("d"): # if letter d is pressed, break
        break

cv.waitKey(0) # exit on key input