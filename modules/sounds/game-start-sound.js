"use strict";
/**
 * Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6104">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6104">Pixabay</a>
 * */

/***
 * create sound element
 */

let startGameSound = new Audio('./assets/sounds/game-start.mp3');

const useStartGameSound = () => {
    startGameSound.id = 'wins-sound';
    startGameSound.className = 'wins-sound';
    startGameSound.style.display = 'none';
    return startGameSound;
}

function playStartGame() {
    useStartGameSound();
    startGameSound.volume = 0.2;
    startGameSound.play();
}

function pauseWinsSound() {
    startGameSound.pause();
}

export {playStartGame}
