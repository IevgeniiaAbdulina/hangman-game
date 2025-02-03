"use strict";
import {bodyPartsContainer} from "./body-parts-ui-element.js";

/**
 * create body-parts
 * */
export function createUIBodyParts() {
    const containerEl = document.querySelector(".body-parts__wrapper");
    containerEl.prepend(bodyPartsContainer);
}

const bodyPartsElements = () => {
    const descendants = document.querySelectorAll('.body-item');
    return [...descendants];
}

export function showBodyParts(counter) {
    const bodyItems = bodyPartsElements();
    bodyItems.forEach(() => {
        bodyItems[counter - 1].classList.add('is-visible');
    })
}

export function hideBodyParts() {
    const bodyItems = bodyPartsElements();
    bodyItems.forEach((item) => {
        item.classList.remove('is-visible');
    })
}
