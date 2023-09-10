const bongoCat = document.getElementById('bongoCat');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const leftSound = new Audio('sounds_bongo0.mp3');
const rightSound = new Audio('sounds_bongo1.mp3');

let leftPressed = false;
let rightPressed = false;

const leftImage = new Image();
leftImage.src = 'Left.png';

const rightImage = new Image();
rightImage.src = 'Right.png';

leftButton.addEventListener('mousedown', () => {
    leftPressed = true;
    bongoCat.src = 'Left.png'; // Changes to the left-tapping image
    leftSound.play();
});

leftButton.addEventListener('mouseup', () => {
    leftPressed = false;
    bongoCat.src = 'Main.png'; // Reverts to the default image
});

rightButton.addEventListener('mousedown', () => {
    rightPressed = true;
    bongoCat.src = 'Right.png'; // Changes to the Right-tapping image
    rightSound.play();
});

rightButton.addEventListener('mouseup', () => {
    rightPressed = false;
    bongoCat.src = 'Main.png'; // Revert to the default image
});

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
