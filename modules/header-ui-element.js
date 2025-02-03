import {useSound} from "./sounds/sounds.js";

export const headerElement = () => {
    const audioElement = useSound();
    const headerElement = document.createElement('header');
    headerElement.className = 'header container';
    headerElement.innerHTML = '<h1>Hangman Game</h1>';

    headerElement.appendChild(audioElement);

    return headerElement;
}
