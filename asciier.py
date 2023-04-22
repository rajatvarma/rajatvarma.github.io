import PIL.Image

ASCII_CHARS = ["@", "#", "$", "%", "?", "*", "+", ";", ":", ",", "."]
ASCII_CHARS.reverse()

def resize_image(image, new_width=100):
    width, height = image.size
    ratio = height / width
    new_height = int(new_width * ratio)
    resized_image = image.resize((new_width, new_height))
    return(resized_image)

def grayify(image):
    grayscale_image = image.convert("L")
    return(grayscale_image)

def pixels_to_ascii(image):
    pixels = image.getdata()
    result_string = ""
    for pixel in pixels:
        result_string += ASCII_CHARS[(pixel//25)]
    return(result_string)

path = "imgs\me2.jpg"
image = PIL.Image.open(path)
image = resize_image(image, new_width=100)
grey = grayify(image)
ascii_string = pixels_to_ascii(grey)
img_width = grey.width
ascii_string_len = len(ascii_string)
ascii_img = ""

for i in range(0, ascii_string_len, img_width):
    ascii_img += ascii_string[i:i + img_width] + "\n"

with open("ascii.txt", "w") as f:
    f.write(ascii_img)
