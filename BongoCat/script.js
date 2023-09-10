const bongoCat = document.getElementById('bongoCat');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const leftSound = new Audio('sounds_bongo0.mp3'); // Replace with the actual sound file path
const rightSound = new Audio('sounds_bongo1.mp3'); // Replace with the actual sound file path

let leftPressed = false;
let rightPressed = false;

leftButton.addEventListener('mousedown', () => {
    leftPressed = true;
    bongoCat.src = 'Left.png'; // Change to the left-tapping image
    leftSound.play(); // Play left sound
});

leftButton.addEventListener('mouseup', () => {
    leftPressed = false;
    bongoCat.src = 'Main.png'; // Revert to the default image
});

rightButton.addEventListener('mousedown', () => {
    rightPressed = true;
    bongoCat.src = 'Right.png'; // Change to the right-tapping image
    rightSound.play(); // Play right sound
});

rightButton.addEventListener('mouseup', () => {
    rightPressed = false;
    bongoCat.src = 'Main.png'; // Revert to the default image
});

// To handle mouseout events (in case the user releases the mouse button while not over the button)
leftButton.addEventListener('mouseout', () => {
    if (leftPressed) {
        leftPressed = false;
        bongoCat.src = 'Main.png'; // Revert to the default image
    }
});

rightButton.addEventListener('mouseout', () => {
    if (rightPressed) {
        rightPressed = false;
        bongoCat.src = 'Main.png'; // Revert to the default image
    }
});
