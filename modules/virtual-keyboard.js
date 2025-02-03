"use strict";
import {alphabet} from "./quiz-data.js";
import {playKeySound} from "./sounds/key-down-sound.js";

export function createVirtualKeyboard(onKeyListener) {
    const charContainer = document.createElement('div');
    charContainer.className = 'keyboard__wrap';

    alphabet.forEach((el, index) => {
        const charElem = document.createElement('div');
        charElem.id = `keyboard__item-id-${index}`;
        charElem.className = 'keyboard__item';
        charElem.innerText = `${el}`;

        charContainer.append(charElem);

        charElem.addEventListener('click', (event) => {
            onKeyListener(el);
            playKeySound();
        });
    });

    return charContainer;
}

export function clearKeyboard() {
    const parent = document.querySelector('.keyboard__wrap');
    const descendants = parent.querySelectorAll('.keyboard__item');
    const keys = [...descendants];

    keys.forEach((key) => {
        key.classList.remove('disabled');
    })
}

export function changeKeyboardKeyState(keyIndex, isDisabled) {
    const keyBtnId = `keyboard__item-id-${keyIndex}`;
    const correspondingBtn = document.getElementById(keyBtnId);

    if (!isDisabled) {
        correspondingBtn.classList.remove('disabled');
    }
    correspondingBtn.classList.add('disabled');
}
