import cv2 as cv

def rescaleFrame(frame, scale=0.75):
    width = int(frame.shape[1] * scale)  # width of your image
    height = int(frame.shape[0] * scale)  # height of your image
    dimensions = (width, height)

    return cv.resize(frame, dimensions, interpolation=cv.INTER_AREA)

def changeRes(width, height):
    # only works on live video
    capture.set(3, width)  # 3 is key for width
    capture.set(4, height)  # 4 is key for height



img = cv.imread("py\OpenCV\section1\Photos\cat_large.jpg")
img_resized = rescaleFrame(img)
cv.imshow("Cat", img)
cv.imshow("Cat Resized", img_resized)



capture = cv.VideoCapture("py\OpenCV\section1\Videos\dog.mp4")
while True:
    isTrue, frame = capture.read()

    frame_resized = rescaleFrame(frame, 0.2)

    cv.imshow("Video", frame)
    cv.imshow("Video Resized", frame_resized)

    if cv.waitKey(20) & 0xFF == ord("d"): # if letter d is pressed, break
        break


cv.waitKey(0)