document.getElementById('user-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage(this.value);
        this.value = ''; // Clear input after send
    }
});

function sendMessage(message) {
    if (navigator.onLine) {
        // API call to OpenAI
        console.log("Sending message:", message); // Placeholder for actual API call
    } else {
        alert('Offline. View only.');
    }
}

function updateProfilePicture() {
    var selector = document.getElementById('bot-selector');
    var profilePic = document.getElementById('profile-picture');
    profilePic.style.display = 'block';
    if (selector.value === 'bot1') {
        profilePic.src = 'path_to_bot1_image.png'; // Adjust path as necessary
    } else {
        profilePic.src = 'path_to_bot2_image.png'; // Adjust path as necessary
    }
}
