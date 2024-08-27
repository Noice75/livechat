import supabase from "../utils/initialize.js";
import { user } from "../utils/user.js";

document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const chatbox = document.getElementById('chatbox');
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        chatbox.appendChild(messageElement);
        messageInput.value = ''; // Clear the input field after sending the message

        // Scroll to the bottom of the chatbox to show the latest message
        chatbox.scrollTop = chatbox.scrollHeight;
    }
});
