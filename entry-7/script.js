// JavaScript to play and pause the audio when the icon is clicked
const audio = document.getElementById("audio");
const playIcon = document.getElementById("play-icon");

playIcon.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none"; // Hide the play icon when audio is playing
    } else {
        audio.pause();
        playIcon.style.display = "block"; // Show the play icon when audio is paused
    }
});
