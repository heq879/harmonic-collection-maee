document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector('.text-container');
    const text = document.querySelector('.text');
    const textSlider = document.getElementById('textSlider');
  
    textSlider.addEventListener('input', function () {
      const fontSize = textSlider.value;
      text.style.fontSize = `${fontSize}px`;
    });
  
    textContainer.addEventListener('mouseleave', function () {
      // Reset font size when mouse leaves the container
      textSlider.value = 10; // Reset slider value to default
      text.style.fontSize = '10px';
    });
  });
  