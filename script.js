const bongoCat = document.getElementById('bongoCat');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const leftSound = new Audio('sounds_bongo0.mp3');
const rightSound = new Audio('sounds_bongo1.mp3');

leftButton.addEventListener('click', () => {
    bongoCat.src = 'Left.png'; // Changes to the left-tapping image
    leftSound.play();
});

rightButton.addEventListener('click', () => {
    bongoCat.src = 'Right.png'; // Changes to the Right-tapping image
    rightSound.play();
});
