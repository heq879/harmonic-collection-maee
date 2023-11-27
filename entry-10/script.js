// Get the canvas and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

// Event listener for mouse click to start/stop drawing
canvas.addEventListener('mousedown', () => {
   drawing = !drawing;
});

// Event listener for mouse movement to draw lines
canvas.addEventListener('mousemove', draw);

// Function to draw lines
function draw(e) {
   if (!drawing) return;

   // Set line styles
   ctx.lineWidth = 10;
   ctx.lineCap = 'round';
   ctx.strokeStyle = '#FFF'; // White color

   // Start drawing
   ctx.beginPath();
   ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

   // Draw line to the current mouse position
   ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

   // Stroke the line
   ctx.stroke();
}

// Event listener for mouse release to stop drawing
canvas.addEventListener('mouseup', () => {
   drawing = false;
});

// Event listener for clear button click
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

