"use strict";
/***
 Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">Pixabay</a>
 */

let winsSound = new Audio('./assets/sounds/wins-sound.mp3');

const useWinsSound = () => {
    winsSound.id = 'wins-sound';
    winsSound.className = 'wins-sound';
    winsSound.style.display = 'none';
    return winsSound;
}

function playWinsSound() {
    useWinsSound();
    winsSound.volume = 0.2;
    winsSound.play();
}

function pauseWinsSound() {
    winsSound.pause();
}

export {playWinsSound}
