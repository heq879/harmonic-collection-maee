const image = document.getElementById('zoom-image');
let isZoomed = false;

image.addEventListener('click', () => {
    if (isZoomed) {
        // If the image is already zoomed in, revert it to 125px
        image.style.width = '125px';
    } else {
        // If the image is not zoomed in, enlarge it to 400px
        image.style.width = '350px';
    }

    // Toggle the zoomed state
    isZoomed = !isZoomed;
});
