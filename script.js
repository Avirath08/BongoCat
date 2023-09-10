const bongoCat = document.getElementById('bongoCat');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const leftSound = new Audio('sounds_bongo0.mp3');
const rightSound = new Audio('sounds_bongo1.mp3');

let leftTapped = false;
let rightTapped = false;

leftButton.addEventListener('click', () => {
    if (!leftTapped) {
        bongoCat.src = 'Left.png'; // Changes to the left-tapping image
        leftSound.play();
        leftTapped = true;
    } else {
        bongoCat.src = 'Main.png'; // Reverts to the default image
        leftTapped = false;
    }
});

rightButton.addEventListener('click', () => {
    if (!rightTapped) {
        bongoCat.src = 'Right.png'; // Changes to the Right-tapping image
        rightSound.play();
        rightTapped = true;
    } else {
        bongoCat.src = 'Main.png'; // Reverts to the default image
        rightTapped = false;
    }
});
