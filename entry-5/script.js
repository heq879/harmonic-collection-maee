//this js script is for the type box function

function sendMessage() {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;
  const chatDisplay = document.getElementById("chat");
  if (message.trim() !== "") {
    // create a new paragraph element for the message
    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    // append the message to the chat display
    chatDisplay.appendChild(messageElement);

    // clear the input field
    messageInput.value = "";
  }
}
