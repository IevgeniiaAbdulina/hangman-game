"use strict";
/***
 Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=56351">Pixabay</a>
 */

/***
 * create sound element
 */
let isPlaying = false;
let sound = new Audio('./assets/sounds/8bit-mix.mp3');

const useSound = () => {
    const soundElement = document.createElement('div');
    soundElement.className = 'sound__container';

    const playBtnContainer = document.createElement('div');
    playBtnContainer.className = 'sound__play-bth__container';

    const playBtn = document.createElement('div');
    playBtn.className = 'sound__play-bth';

    const playImage = document.createElement('img');
    playImage.className = 'sound__play-image';
    playImage.src = './assets/audio-ic.svg';

    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if(!isPlaying) {
            pauseAudio();
            playBtn.classList.remove('active');
        }
        if(isPlaying) {
            playAudio();
            playBtn.classList.add('active');
        }
    })

    playBtn.append(playImage);
    playBtnContainer.append(playBtn);
    soundElement.append(playBtnContainer);

    return soundElement;
}

function playAudio() {
    sound.volume = 0.3;
    sound.autoplay = true;
    sound.loop = true;
    sound.play();
}

function pauseAudio() {
    sound.pause();
}

export {useSound}
