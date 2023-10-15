// script.js
document.querySelectorAll('.clickable-text').forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'black'; // Change the text color to black when clicked
        element.style.backgroundColor = 'black';
    });
});
