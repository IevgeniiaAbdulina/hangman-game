"use strict";
/***
 Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">Pixabay</a>
 */

/***
 * create sound element
 */
let gameOverSound = new Audio('./assets/sounds/game-over-sound.mp3');

const useGameOverSound = () => {
    gameOverSound.id = 'wins-sound';
    gameOverSound.className = 'wins-sound';
    gameOverSound.style.display = 'none';
    return gameOverSound;
}

function playGameOverSound() {
    useGameOverSound();
    gameOverSound.volume = 0.2;
    gameOverSound.play();
}

function pauseGameOverSound() {
    gameOverSound.pause();
}

export {playGameOverSound}
