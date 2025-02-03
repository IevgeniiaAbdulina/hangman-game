"use strict";
/***
 Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">Pixabay</a>
 */
let keyClickSound = new Audio('./assets/sounds/retro-coin.mp3');

const useKeySound = () => {
    keyClickSound.id = 'key-sound';
    keyClickSound.className = 'keydown-sound';
    keyClickSound.style.display = 'none';
    return keyClickSound;
}

function playKeySound() {
    useKeySound();
    keyClickSound.volume = 0.1;
    keyClickSound.play();
}

function pauseKeySound() {
    keyClickSound.pause();
}

export {playKeySound}
