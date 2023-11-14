var imageArray = ["img/something_3.png", "img/something_4.png", "img/something_5.png", "img/something_6.png"];
var currentIndex = 0;

// Function to switch to the next image
function nextImage() {
    // Increment the index or reset to 0 if at the end
    currentIndex = (currentIndex + 1) % imageArray.length;

    // Get the image element by ID and set its src attribute
    var imageElement = document.getElementById("galleryImage");
    imageElement.src = imageArray[currentIndex];
}


